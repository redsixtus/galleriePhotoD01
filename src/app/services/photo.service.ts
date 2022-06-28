import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { UserPhoto } from '../interfaces/userphoto';
import { ServiceHttpService } from './service-http.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  /**
   * Un attribut public de type UserPhoto[] pour justement stockée
   * en mémoire les photos (des images importées ou/et récupérer par la Camera)
   * Camera est géré par Ionic/Capacitor
   */
  public photos: UserPhoto[] = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public PHOTO_STORAGE= 'photos';

  constructor(private serviceHttp: ServiceHttpService<UserPhoto>) { }

  public async loadsaved(){
    /**
     * Récupére les photos sauvegardées dans un tableau de données
     * On utilise l'objet Storage : '@capacitor/storage'
     * Il va s'adapter à l'OS APP (ANDROID, IOS, BROWSER)
     * this.PHOTO_STORAGE c'est la clé de stockage que l'on va utiliser
     * par l'intermédiaire Storage
     */
     this.photos = await this.serviceHttp.getAll().toPromise();

     if((this.photos == null) || (this.photos?.length === 0)) {
      const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
      this.photos = JSON.parse(photoList.value) || [];
     }



    /**
     * photoList récupère un flux de données
     * que nous allons 'parser' en JSON pour notre tableau de type UserPhoto
     * Si justement on a photoList.value "non parsable ou undefined" alors on a automatiquement un tableau vide
     * || []
     */

    /**
     * on va faire un foreach sur this.photos pour récupérer les éléments stockées en mémoire
     * ...
     */
     for (const photo of this.photos) {
      /**
       * J'utilise Filesystem et Directory @capacitor/filesystem
       * pour justement récupérer physiquement le contenu du média
       */
      console.log(photo);

      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      /**
       * Ici je définis le type de média : data:image/jpeg;base64
       * pour les compsants qui vont afficher le contenu de l'image
       */
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

  }

  public async addNewToGallery() { // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    /**
     *  Faire la sauvegardes dans Storage et dans la tableau photos
     *  On va développer une méthode savePicture(capturedPhoto)
     */

     const savedImageFile = await this.savePicture(capturedPhoto);
     /**
      * On ajoute savedImageFile au début du tableau this.photos
      */

     this.photos.unshift(savedImageFile);
    // this.serviceHttp.post(savedImageFile).subscribe(data=>console.log(data));
    await this.serviceHttp.post(savedImageFile).toPromise();

    /**
     * On met à jour l'objet Storage : '@capacitor/storage
     */
     Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  /**
   * On va créer des méthodes pour convertir Base64 : flux de média
   * Photo : @capacitor/camera
   * On récupère cet objet en paramètre
   * Puis on récupère un promise par le fetch dans response
   * On récupère en DUMP : BLOB : Mémo Binaire (un volume en format binaire )
   * C'est pour cela que nous allons le convertir
   * await me permet d'éxcuter le promise (then)
   */
   private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
  /**
   * On convertit le DUMP en String
   *
   * @param blob
   * @returns
   */
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };

    reader.readAsDataURL(blob);

  });

  /**
   * A partir de l'objet : Photo : @capacitor/camera
   * On va utiliser les méthodes readAsBase64 & convertBlobToBase64
   * On récupère  base64Data = await this.readAsBase64(photo);
   * A partir de cette variable
   * On crée un fichier pour stocker l'objet Photo
   * fileName = new Date().getTime() + '.jpeg';
   * Filesystem.writeFile : @capacitor/filesystem
   * par cet objet on va stocker le résultat du DUMP dans un fichier physique
   * Il va adapter le stockage selon l'OS APP
   *
   * @param photo
   * @returns
   */
  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
      id:0
    };
  }

}
