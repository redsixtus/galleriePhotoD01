'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">photo-gallery documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"' : 'data-target="#xs-components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"' : 'id="xs-components-links-module-AppModule-4d3d15459682b3b8c16c1b13e5f230d09a44598a98d6ba4e87457535fd3b415c3a40b3328af7851c26e08444dd5b3356084f53d3626540635c5290700d9b48a8"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ExploreContainerComponentModule.html\" data-type=\"entity-link\" >ExploreContainerComponentModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' : 'id="xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ExploreContainerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ExploreContainerComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/Tab1PageModule.html\" data-type=\"entity-link\" >Tab1PageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' : 'data-target="#xs-components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"' : 'id="xs-components-links-module-Tab1PageModule-9021517ddba37032dd18c1d90fee452e14e2fd1fa587c78d68c7b32dca5af7cca335b70ef9d93429592a7982d2bdf647f1d092754c94fc73ed152e1d48e334b4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/Tab1Page.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >Tab1Page</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/Tab1PageRoutingModule.html\" data-type=\"entity-link\" >Tab1PageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/Tab2PageModule.html\" data-type=\"entity-link\" >Tab2PageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"' : 'data-target="#xs-components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"' : 'id="xs-components-links-module-Tab2PageModule-6cb2e8fa3e9fe2897763e5db7a69d5c50719b65cf30a2253117252c690b0f7cf6062fbfaf1fbe6550eb5d0563ae926b0a8589ee24d629572fd0c1f73fe56ef83"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/Tab2Page.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >Tab2Page</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/Tab2PageRoutingModule.html\" data-type=\"entity-link\" >Tab2PageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/Tab3PageModule.html\" data-type=\"entity-link\" >Tab3PageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"' : 'data-target="#xs-components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"' : 'id="xs-components-links-module-Tab3PageModule-dcdbb3848ebec8f43ab14db6d4a9bbf4980cfc27b4cd46eaf437dae0cdd36a6a9e9e5060cb361705693876b26a1737fe76964c7a1a6283b0a7c7c89589732067"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/Tab3Page.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >Tab3Page</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/Tab3PageRoutingModule.html\" data-type=\"entity-link\" >Tab3PageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TabsPageModule.html\" data-type=\"entity-link\" >TabsPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"' : 'data-target="#xs-components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"' : 'id="xs-components-links-module-TabsPageModule-fb8bae462a133bdf79d9143d7d73883ed882d1e5d19fc18f0e903098c223d806486e742d6bf7e8d443bf9fe94028990d07f6c1ee7433fd35ee9704a2460e296d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/TabsPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TabsPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TabsPageRoutingModule.html\" data-type=\"entity-link\" >TabsPageRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/UserPhoto.html\" data-type=\"entity-link\" >UserPhoto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/PhotoService.html\" data-type=\"entity-link\" >PhotoService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ServiceHttpService.html\" data-type=\"entity-link\" >ServiceHttpService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));