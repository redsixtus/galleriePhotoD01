import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService<T> {
public url = 'http://localhost:3000/UserPhoto';
  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]>{
    return this.http.get<T[]>(this.url);
  }
  getOne(key: any): Observable<T>{
    return this.http.get<T>('${this.url}\${key}');
  }

  post(data: T): Observable<T> {
    return this.http.post<T>(this.url,data);
  }
}
