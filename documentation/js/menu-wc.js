'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">photo-gallery documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"' : 'data-target="#xs-components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"' :
                                            'id="xs-components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link" >Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' : 'data-target="#xs-components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' :
                                            'id="xs-components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link" >Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link" >Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"' : 'data-target="#xs-components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"' :
                                            'id="xs-components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link" >Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"' : 'data-target="#xs-components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"' :
                                            'id="xs-components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"' : 'data-target="#xs-components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"' :
                                            'id="xs-components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/UserPhoto.html" data-type="entity-link" >UserPhoto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PhotoService.html" data-type="entity-link" >PhotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceHttpService.html" data-type="entity-link" >ServiceHttpService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});