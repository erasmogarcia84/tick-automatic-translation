function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_main_translator_main_translator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/main-translator/main-translator.component */
    "./src/app/components/main-translator/main-translator.component.ts");
    /* harmony import */


    var _components_trans_texts_trans_texts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/trans-texts/trans-texts.component */
    "./src/app/components/trans-texts/trans-texts.component.ts");
    /* harmony import */


    var _components_trans_files_trans_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/trans-files/trans-files.component */
    "./src/app/components/trans-files/trans-files.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_info_versions_info_versions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/info-versions/info-versions.component */
    "./src/app/components/info-versions/info-versions.component.ts");

    var routes = [{
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'home',
      component: _components_main_translator_main_translator_component__WEBPACK_IMPORTED_MODULE_2__["MainTranslatorComponent"]
    }, {
      path: 'info',
      component: _components_info_versions_info_versions_component__WEBPACK_IMPORTED_MODULE_6__["InfoVersionsComponent"]
    }, {
      path: 'texts',
      component: _components_trans_texts_trans_texts_component__WEBPACK_IMPORTED_MODULE_3__["TransTextsComponent"]
    }, {
      path: 'files',
      component: _components_trans_files_trans_files_component__WEBPACK_IMPORTED_MODULE_4__["TransFilesComponent"]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'tick-api-sdl';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _components_main_translator_main_translator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/main-translator/main-translator.component */
    "./src/app/components/main-translator/main-translator.component.ts");
    /* harmony import */


    var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./directives/ng-drop-files.directive */
    "./src/app/directives/ng-drop-files.directive.ts");
    /* harmony import */


    var _components_trans_texts_trans_texts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/trans-texts/trans-texts.component */
    "./src/app/components/trans-texts/trans-texts.component.ts");
    /* harmony import */


    var _components_trans_files_trans_files_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/trans-files/trans-files.component */
    "./src/app/components/trans-files/trans-files.component.ts");
    /* harmony import */


    var _pipes_langs_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pipes/langs-pipe */
    "./src/app/pipes/langs-pipe.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_info_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/info/info.component */
    "./src/app/components/info/info.component.ts");
    /* harmony import */


    var _pipes_error_codes_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pipes/error-codes.pipe */
    "./src/app/pipes/error-codes.pipe.ts");
    /* harmony import */


    var _components_info_versions_info_versions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/info-versions/info-versions.component */
    "./src/app/components/info-versions/info-versions.component.ts");

    var config = {
      apiKey: "AIzaSyCunoHb1QwcBJchUa1bAcDl3TaSI8dBBj8",
      authDomain: "tick-cloud.firebaseapp.com",
      databaseURL: "https://tick-cloud.firebaseio.com",
      projectId: "tick-cloud",
      storageBucket: "tick-cloud.appspot.com",
      messagingSenderId: "643445452006",
      appId: "1:643445452006:web:754221a7e31dd21372df27",
      measurementId: "G-8HM5EV4YVW"
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(config), _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_main_translator_main_translator_component__WEBPACK_IMPORTED_MODULE_12__["MainTranslatorComponent"], _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_13__["NgDropFilesDirective"], _components_trans_texts_trans_texts_component__WEBPACK_IMPORTED_MODULE_14__["TransTextsComponent"], _components_trans_files_trans_files_component__WEBPACK_IMPORTED_MODULE_15__["TransFilesComponent"], _pipes_langs_pipe__WEBPACK_IMPORTED_MODULE_16__["LangsPipe"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_18__["InfoComponent"], _pipes_error_codes_pipe__WEBPACK_IMPORTED_MODULE_19__["ErrorCodesPipe"], _components_info_versions_info_versions_component__WEBPACK_IMPORTED_MODULE_20__["InfoVersionsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_main_translator_main_translator_component__WEBPACK_IMPORTED_MODULE_12__["MainTranslatorComponent"], _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_13__["NgDropFilesDirective"], _components_trans_texts_trans_texts_component__WEBPACK_IMPORTED_MODULE_14__["TransTextsComponent"], _components_trans_files_trans_files_component__WEBPACK_IMPORTED_MODULE_15__["TransFilesComponent"], _pipes_langs_pipe__WEBPACK_IMPORTED_MODULE_16__["LangsPipe"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_18__["InfoComponent"], _pipes_error_codes_pipe__WEBPACK_IMPORTED_MODULE_19__["ErrorCodesPipe"], _components_info_versions_info_versions_component__WEBPACK_IMPORTED_MODULE_20__["InfoVersionsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(config), _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/info-versions/info-versions.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/info-versions/info-versions.component.ts ***!
    \*********************************************************************/

  /*! exports provided: InfoVersionsComponent */

  /***/
  function srcAppComponentsInfoVersionsInfoVersionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoVersionsComponent", function () {
      return InfoVersionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");

    function InfoVersionsComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var lang_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", lang_r4, ", ");
      }
    }

    function InfoVersionsComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var lang_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", lang_r5, ", ");
      }
    }

    function InfoVersionsComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var lang_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", lang_r6, ", ");
      }
    }

    function InfoVersionsComponent_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var lang_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", lang_r7, ", ");
      }
    }

    var InfoVersionsComponent = /*#__PURE__*/function () {
      function InfoVersionsComponent() {
        _classCallCheck(this, InfoVersionsComponent);

        this.SDL = {
          langsList: ['Africaans', 'Alban??s', 'Alem??n', 'Am??rico', '??rabe (Arabizi)', 'Ar??bica', 'Armenio', 'Azerbaiyano', 'Bengal??', 'Bielorruso', 'Bihari', 'B??lgaro', 'Catal??n', 'Cebuano', 'Checo', 'Cherokee', 'Chino (simplificado)', 'Chino (tradicional)', 'Coreano', 'Croata', 'Dan??s', 'Dari', 'Eslovaco', 'Esloveno', 'Espa??ol', 'Estonio', 'Finland??s', 'Franc??s', 'Franc??s (Canad??)', 'Gal??s', 'Gallego', 'Ganda', 'Georgiano', 'Griego', 'Gujarati', 'Hausa', 'Hebreo', 'Hindi', 'Hmong', 'Holand??s', 'H??ngaro', 'Indonesio', 'Ingl??s', 'Inuktitut', 'Irlandesa', 'Island??s', 'Italiano', 'Japon??s', 'Javan??s', 'Kannada', 'Kinyarwanda', 'Let??n', 'Limbu', 'Lituano', 'Maced??nio', 'Malayalam', 'Malayo', 'Malt??s', 'Marathi', 'Nepal??', 'Noruego', 'Oriya', 'Osetio', 'Pashto', 'Persa', 'Polaco', 'Portugu??s', 'Portugu??s (Brasil)', 'Portugu??s (portugal)', 'Rumano', 'Ruso', 'Serbio', 'Sir??aco', 'Somal??', 'Sueco', 'Sundan??s', 'Swahili', 'Tagalo', 'Tailand??s', 'Tamil', 'Tayiko', 'Telugu', 'Turco', 'Ucranio', 'Urdu', 'Uzbeko', 'Vasco', 'Vietnamita', 'Y??dish'],
          fileTypes: ['.txt', '.xline', '.htm, .html, .xhtml', '.xml', '.sdlxml', '.tmx', '.xliff', '.bcm', '.pdf', '.rtf', '.docx, .dotx, .docm, .dotm', '.xlsx, .xltx, .xlsm, .xltm, .xlam, .xlsb', '.pptx, .potx, .ppsx, .pptm, .potm, .ppsm', '.doc, .dot', '.xls, .xlt, .xla', '.ppt, .pot, .pps', '.odt', '.ods', '.odp', '.gif', '.jpg, .jpeg', '.png'],
          fileLimits: '100 mb',
          filePermanency: '1 descarga / 2 horas'
        };
        this.DEEPL = {
          langsList: ['Alem??n', 'B??lgaro', 'Checo', 'Chino', 'Dan??s', 'Eslovaco', 'Esloveno', 'Espa??ol', 'Estonio', 'Finland??s', 'Franc??s', 'Griego', 'Holand??s', 'H??ngaro', 'Ingl??s', 'Italiano', 'Japon??s', 'Let??n', 'Lituano', 'Polaco', 'Portugu??s', 'Rumano', 'Ruso', 'Sueco'],
          fileTypes: ['.docx', '.pptx', '.htm, .html', '.txt'],
          fileLimits: '10 mb / 1.000.000 caracteres',
          filePermanency: '1 descarga'
        };
      }

      _createClass(InfoVersionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoVersionsComponent;
    }();

    InfoVersionsComponent.??fac = function InfoVersionsComponent_Factory(t) {
      return new (t || InfoVersionsComponent)();
    };

    InfoVersionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: InfoVersionsComponent,
      selectors: [["app-info-versions"]],
      decls: 52,
      vars: 8,
      consts: [[1, "container-fluid"], [1, "row", "d-flex"], [1, "col-12", "px-4"], [1, "table", "table-striped", "mb-5", "text-center"], [2, "width", "40%"], [1, "display-4", "my-3", "text-center", "main-color"], [2, "width", "20%"], [1, "align-middle"], [4, "ngFor", "ngForOf"], [1, "display-4", "text-center"], ["class", "d-block", 4, "ngFor", "ngForOf"], [1, "d-block"]],
      template: function InfoVersionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Pro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, InfoVersionsComponent_span_17_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Idiomas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, InfoVersionsComponent_span_22_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, InfoVersionsComponent_span_25_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Tipos de archivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, InfoVersionsComponent_span_30_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "L\xEDmites por archivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Permanencia de los archivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.DEEPL.langsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.SDL.langsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.DEEPL.fileTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.SDL.fileTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.DEEPL.fileLimits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.SDL.fileLimits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.DEEPL.filePermanency);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.SDL.filePermanency);
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["h5[_ngcontent-%COMP%] {\r\n  font-size: 2rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvLXZlcnNpb25zL2luZm8tdmVyc2lvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby12ZXJzaW9ucy9pbmZvLXZlcnNpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNSB7XHJcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InfoVersionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-versions',
          templateUrl: './info-versions.component.html',
          styleUrls: ['./info-versions.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/info/info.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/info/info.component.ts ***!
    \***************************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppComponentsInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");

    function InfoComponent_tr_10_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2 * 3 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.langsList[i_r2 * 3], "");
      }
    }

    function InfoComponent_tr_10_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2 * 3 + 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r4.langsList[i_r2 * 3 + 1], "");
      }
    }

    function InfoComponent_tr_10_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2 * 3 + 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r5.langsList[i_r2 * 3 + 2], "");
      }
    }

    function InfoComponent_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, InfoComponent_tr_10_td_1_Template, 4, 2, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, InfoComponent_tr_10_td_2_Template, 4, 2, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, InfoComponent_tr_10_td_3_Template, 4, 2, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r2 < 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r2 < 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r2 < 29);
      }
    }

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent() {
        _classCallCheck(this, InfoComponent);

        this.langsList = ['Africaans', 'Alban??s', 'Alem??n', 'Am??rico', '??rabe (Arabizi)', 'Ar??bica', 'Armenio', 'Azerbaiyano', 'Bengal??', 'Bielorruso', 'Bihari', 'B??lgaro', 'Catal??n', 'Cebuano', 'Checo', 'Cherokee', 'Chino (simplificado)', 'Chino (tradicional)', 'Coreano', 'Croata', 'Dan??s', 'Dari', 'Eslovaco', 'Esloveno', 'Espa??ol', 'Estonio', 'Finland??s', 'Franc??s', 'Franc??s (Canad??)', 'Gal??s', 'Gallego', 'Ganda', 'Georgiano', 'Griego', 'Gujarati', 'Hausa', 'Hebreo', 'Hindi', 'Hmong', 'Holand??s', 'H??ngaro', 'Indonesio', 'Ingl??s', 'Inuktitut', 'Irlandesa', 'Island??s', 'Italiano', 'Japon??s', 'Javan??s', 'Kannada', 'Kinyarwanda', 'Let??n', 'Limbu', 'Lituano', 'Maced??nio', 'Malayalam', 'Malayo', 'Malt??s', 'Marathi', 'Nepal??', 'Noruego', 'Oriya', 'Osetio', 'Pashto', 'Persa', 'Polaco', 'Portugu??s', 'Portugu??s (Brasil)', 'Portugu??s (portugal)', 'Rumano', 'Ruso', 'Serbio', 'Sir??aco', 'Somal??', 'Sueco', 'Sundan??s', 'Swahili', 'Tagalo', 'Tailand??s', 'Tamil', 'Tayiko', 'Telugu', 'Turco', 'Ucranio', 'Urdu', 'Uzbeko', 'Vasco', 'Vietnamita', 'Y??dish'];
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoComponent;
    }();

    InfoComponent.??fac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)();
    };

    InfoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 181,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "row", "d-flex"], [1, "col-6", "bg-light", "px-4"], [1, "display-4", "my-3", "text-center"], [1, "table", "table-striped", "mb-5"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Idiomas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Lista de idiomas devueltos por nuestro motor de Auto-detecci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, InfoComponent_tr_10_Template, 4, 3, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Archivos permitidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "File Extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "PLAIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, ".txt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Plain text (UTF8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "XLINE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, ".xline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Plain text, one sentence per line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "HTML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, ".htm, .html, .xhtml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "HTML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, ".xml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "SDLXML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, ".sdlxml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Treats every closing XML tag in the input as the end of a segment. The XML format in contrast does not make this assumption.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "TMX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, ".tmx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Translation Memory eXchange");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "XLIFF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, ".xliff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "XML Localization Interchange File Format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "BCM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, ".bcm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "SDL Proprietary format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, ".pdf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Adobe Acrobat (PDF)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "RTF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, ".rtf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Rich Text Format (RTF)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "DOCX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, ".docx, .dotx, .docm, .dotm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Microsoft Word (Office Open XML)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "XLSX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, ".xlsx, .xltx, .xlsm, .xltm, .xlam, .xlsb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Microsoft Excel (Office Open XML)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "PPTX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, ".pptx, .potx, .ppsx, .pptm, .potm, .ppsm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Microsoft PowerPoint (Office Open XML)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "DOC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, ".doc, .dot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Microsoft Word (97-2003)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, ".xls, .xlt, .xla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Microsoft Excel (97-2003)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "PPT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, ".ppt, .pot, .pps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Microsoft PowerPoint (97-2003)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "ODT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, ".odt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "OpenDocument Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "ODS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, ".ods");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "OpenDocument Spreadsheet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "ODP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, ".odp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "OpenDocument Presentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "GIF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, ".gif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Graphics Interchange Format (GIF)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "JPG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, ".jpg, .jpeg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "JPEG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "PNG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, ".png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Portable Network Graphics (PNG)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.langsList);
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this$loginForm$value, email, password, user;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // console.log('Form --> ', this.loginForm.value);
                    _this$loginForm$value = this.loginForm.value, email = _this$loginForm$value.email, password = _this$loginForm$value.password;
                    _context.prev = 1;
                    _context.next = 4;
                    return this.authService.login(email, password);

                  case 4:
                    user = _context.sent;

                    // console.log('USER ha devuelto -->', user);
                    if (!user.user) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: user.code,
                        text: user.message,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      });
                    } else {
                      if (user) {
                        // Redirect to Home Page
                        this.router.navigate(['/home']);
                      }
                    }

                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](1);
                    console.log(_context.t0);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 8]]);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 22,
      vars: 2,
      consts: [[1, "container-fluid", "bg-tick", "full-login", "d-flex", "align-items-center", "justify-content-center"], [1, "fixed-top"], ["src", "../../../assets/logo-tick-full.png", "alt", "Logo Tick", 1, "ml-4", "mt-1", "float-left"], ["src", "../../../assets/logo-indra.png", "alt", "Logo Indra", 1, "mr-4", "mt-1", "float-right"], [1, "box-login", "mx-auto"], [1, "col-12", "form-login", "bg-tick-secondary", "py-4", "px-5"], [1, "mb-5"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "email", "name", "email", "formControlName", "email", "placeholder", "Correo electr\xF3nico", "required", "", 1, "form-control", "input-sm", "chat-input", "mb-3"], ["type", "password", "name", "password", "id", "userPassword", "formControlName", "password", "placeholder", "Contrase\xF1a", "required", "", 1, "form-control", "input-sm", "chat-input", "mb-4"], [1, "wrapper"], [1, "group-btn"], ["type", "submit", 1, "btn", "btn-tick", "btn-block", "mb-3", 3, "disabled"], [1, "fa", "fa-sign-in"], ["href", "#", 1, "text-light", "mt-4"], [1, "col-12", "mt-4", "bg-tick-secondary", "text-white", "text-center", "py-4", "rounded"], [1, "p-0", "m-0"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Inicio de sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " Iniciar sesi\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, " \xBFHa olvidado su contrase\xF1a? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, " TICK, YOUR GLOBAL LANGUAGE PARTNER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.loginForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  background-color:#1a3b47 !important;\r\n  -webkit-font-smoothing: antialiased;\r\n  font: normal 14px Roboto,arial,sans-serif;\r\n}\r\n\r\n.box-login[_ngcontent-%COMP%] {\r\n  width: 406px;\r\n}\r\n\r\n.full-login[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n  margin: auto 0;\r\n  height: 100%;\r\n\r\n}\r\n\r\n.form-login[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n border:0 solid #fff;\r\n border-bottom-width:1px;\r\n padding-bottom:10px;\r\n text-align: center;\r\n color: white;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7O0FBRWQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWEzYjQ3ICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udDogbm9ybWFsIDE0cHggUm9ib3RvLGFyaWFsLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ib3gtbG9naW4ge1xyXG4gIHdpZHRoOiA0MDZweDtcclxufVxyXG5cclxuLmZ1bGwtbG9naW4ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmZvcm0tbG9naW4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiBib3JkZXI6MCBzb2xpZCAjZmZmO1xyXG4gYm9yZGVyLWJvdHRvbS13aWR0aDoxcHg7XHJcbiBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-translator/main-translator.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/main-translator/main-translator.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MainTranslatorComponent */

  /***/
  function srcAppComponentsMainTranslatorMainTranslatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainTranslatorComponent", function () {
      return MainTranslatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/api-sdl.service */
    "./src/app/services/api-sdl.service.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");

    var MainTranslatorComponent = /*#__PURE__*/function () {
      function MainTranslatorComponent(apiSDLService) {
        _classCallCheck(this, MainTranslatorComponent);

        this.apiSDLService = apiSDLService;
        this.APIBase = 'DEEPL';
      }

      _createClass(MainTranslatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          switch (this.APIBase) {
            case 'SDL':
              this.apiSDLService.getToken().subscribe(function (res) {
                _this.token = res;
                _this.apiSDLService.token = _this.token.accessToken; // console.log('TOKEN =>', this.token.accessToken);
              });
              break;

            default:
              break;
          }
        }
      }]);

      return MainTranslatorComponent;
    }();

    MainTranslatorComponent.??fac = function MainTranslatorComponent_Factory(t) {
      return new (t || MainTranslatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_1__["ApiSdlService"]));
    };

    MainTranslatorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MainTranslatorComponent,
      selectors: [["app-main-translator"]],
      decls: 16,
      vars: 0,
      consts: [[1, "container", "text-center", "my-auto"], [1, "display-4", "my-5"], [1, "text-justify"]],
      template: function MainTranslatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Bienvenido a Traducciones Autom\xE1ticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Tick Translations pone a vuestra disposici\xF3n uno de los motores de traducci\xF3n autom\xE1tica m\xE1s potentes del mercado pero a\xFAn as\xED, estamos hablando de traducci\xF3n autom\xE1tica. Es una opci\xF3n que puede servir para entender muy por encima el contexto o el significado\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "grosso modo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\xA0del contenido. Sin embargo,\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "no es la alternativa aconsejable para traducir textos t\xE9cnicos, contratos, documentos jur\xEDdicos o financieros o publicitarios.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Las traducciones de la plataforma no son calidad certificada ISO.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "En algunos tipos de formatos, como por ejemplo PDF de documentos escaneados o im\xE1genes no editables, ser\xE1 necesario una maquetaci\xF3n para extraer bien todo el texto. En Tick Translations podremos ayudaros en todo momento. Tambi\xE9n, para realizar una revisi\xF3n posterior. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-footer");
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".drop-zone[_ngcontent-%COMP%]{\r\n  border: dotted 3px lightgray;\r\n  opacity: 0.5;\r\n  color: #666;\r\n  text-align: center;\r\n}\r\n\r\n.file-over[_ngcontent-%COMP%] {\r\n  border: dotted 3px green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXRyYW5zbGF0b3IvbWFpbi10cmFuc2xhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tdHJhbnNsYXRvci9tYWluLXRyYW5zbGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLXpvbmV7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IGxpZ2h0Z3JheTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlsZS1vdmVyIHtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggZ3JlZW47XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainTranslatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-translator',
          templateUrl: './main-translator.component.html',
          styleUrls: ['./main-translator.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_1__["ApiSdlService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container-fluid", "bg-tick", "fixed-bottom", "text-center", "text-white", "py-2"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Copyright \xA9 2021 Tick Translations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/texts"];
    };

    var _c1 = function _c1() {
      return ["/files"];
    };

    var _c2 = function _c2() {
      return ["/info"];
    };

    function NavbarComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Textos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Archivos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_div_8_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r1.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](5, _c2));
      }
    }

    var _c3 = function _c3() {
      return ["/home"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(authService) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.isLogged = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var user;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.authService.getCurrentUser();

                  case 2:
                    user = _context2.sent;

                    if (user) {
                      // console.log('User -->', user);
                      this.isLogged = true;
                    } else {
                      this.isLogged = false;
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.??fac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 9,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-tick"], [1, "navbar-brand", 3, "routerLink"], ["src", "../assets/logo-tick.png", "width", "30", "height", "30", "alt", "", "loading", "lazy", 1, "d-inline-block", "align-top"], [1, "text-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["class", "collapse navbar-collapse", "id", "navbarSupportedContent", 4, "ngIf"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "fas", "fa-info-circle"], [1, "nav-link", 3, "click"], [1, "fas", "fa-power-off"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " Tick Translations | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "small", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Traducciones Autom\xE1ticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, NavbarComponent_div_8_Template, 14, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](2, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.isLogged);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: ["a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/trans-files/trans-files.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/trans-files/trans-files.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TransFilesComponent */

  /***/
  function srcAppComponentsTransFilesTransFilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransFilesComponent", function () {
      return TransFilesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-sdl.service */
    "./src/app/services/api-sdl.service.ts");
    /* harmony import */


    var src_app_services_api_deepl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api-deepl.service */
    "./src/app/services/api-deepl.service.ts");
    /* harmony import */


    var src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/upload-file.service */
    "./src/app/services/upload-file.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../directives/ng-drop-files.directive */
    "./src/app/directives/ng-drop-files.directive.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _pipes_langs_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipes/langs-pipe */
    "./src/app/pipes/langs-pipe.ts");

    function TransFilesComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "langsPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var sourceLang_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", sourceLang_r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, sourceLang_r12), " ");
      }
    }

    function TransFilesComponent_h5_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Listo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TransFilesComponent_table_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Archivo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Tama\xF1o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TransFilesComponent_table_23_Template_i_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r13.cleanFiles();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.selectedFile.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](14, 2, ctx_r3.selectedFile.size / 1024 / 1024, ".2-2"), " MB ");
      }
    }

    function TransFilesComponent_i_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 33);
      }
    }

    function TransFilesComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 34);
      }
    }

    function TransFilesComponent_p_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.countDeeplUsage);
      }
    }

    function TransFilesComponent_option_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "langsPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var targetLang_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", targetLang_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, targetLang_r15));
      }
    }

    function TransFilesComponent_h5_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Listo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TransFilesComponent_img_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 36);
      }
    }

    function TransFilesComponent_table_45_i_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TransFilesComponent_table_45_i_11_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r18.getFile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TransFilesComponent_table_45_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TransFilesComponent_table_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Archivo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, TransFilesComponent_table_45_i_11_Template, 1, 0, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, TransFilesComponent_table_45_a_12_Template, 2, 0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r10.outputFileName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.APIBase === "SDL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.APIBase === "DEEPL");
      }
    }

    function TransFilesComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Palabras");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Bytes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "table", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Palabras");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Bytes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r11.statistics.inputWordCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r11.statistics.inputCharCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r11.statistics.inputByteCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r11.statistics.translationWordCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r11.statistics.translationCharCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r11.statistics.translationByteCount);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "file-over": a0
      };
    };

    var TransFilesComponent = /*#__PURE__*/function () {
      function TransFilesComponent(apiSDLService, apiDEEPLService, uploadFileService, http) {
        _classCallCheck(this, TransFilesComponent);

        this.apiSDLService = apiSDLService;
        this.apiDEEPLService = apiDEEPLService;
        this.uploadFileService = uploadFileService;
        this.http = http;
        this.fileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          translationSourceL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          translationTargetL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          selectedFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }); // private APIBase: string = 'SDL';

        this.APIBase = 'DEEPL';
        this.translationInProcess = false; //public files: FileItem[]=[];

        this.isOverElement = false;
        this.nameTraducido = 'Test1-FR.docx';
        this.sourceLangsFull = [];
        this.targetLangsFull = [];
        this.sourceLangs = [];
        this.targetLangs = [];
        this.selectedFile = null;
        this.selectedFileTypeIn = '';
        this.selectedFileTypeOut = '';
        this.formatIndex = null;
        this.isTranslated = false;
        this.isFileReady = false;
        this.readyID = '';
        this.readyTypeOut = '';
        this.outputFileName = '';
        this.inputFormatsName = ['PLAIN', 'XLINE', 'HTML', 'XML', 'SDLXML', 'TMX', 'XLIFF', 'BCM', 'PDF', 'RTF', 'DOCX', 'XLSX', 'PPTX', 'DOC', 'XLS', 'PPT', 'ODT', 'ODS', 'ODP', 'GIF', 'JPG', 'PNG'];
        this.inputFormatsIn = ['text/plain', 'text/x-line', 'text/html', 'text/xml', 'text/sdlxml', 'text/x-tmx', 'application/x-xliff', 'application/x-json-bcm', 'application/pdf', 'application/rtf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.presentation', 'image/gif', 'image/jpeg', 'image/png'];
        this.inputFormatsOut = ['text/plain', 'text/x-line', 'text/html', 'text/xml', 'text/sdlxml', 'text/x-tmx', 'application/x-xliff', 'application/x-json-bcm', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/rtf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.presentation', 'text/plain', 'text/plain', 'text/plain'];
        this.sourceLangsCode = {
          'Bulgarian': "BG",
          'Czech': "CS",
          'Danish': "DA",
          'German': "DE",
          'Greek': "EL",
          'English': "EN",
          'Spanish': "ES",
          'Estonian': "ET",
          'Finnish': "FI",
          'French': "FR",
          'Hungarian': "HU",
          'Italian': "IT",
          'Japanese': "JA",
          'Lithuanian': "LT",
          'Latvian': "LV",
          'Dutch': "NL",
          'Polish': "PL",
          'Portuguese': "PT",
          'Romanian': "RO",
          'Russian': "RU",
          'Slovak': "SK",
          'Slovenian': "SL",
          'Swedish': "SV",
          'Chinese': "ZH"
        };
        this.targetLangsCode = {
          'Bulgarian': "BG",
          'Czech': "CS",
          'Danish': "DA",
          'German': "DE",
          'Greek': "EL",
          'English': "EN",
          'Spanish': "ES",
          'Estonian': "ET",
          'Finnish': "FI",
          'French': "FR",
          'Hungarian': "HU",
          'Italian': "IT",
          'Japanese': "JA",
          'Lithuanian': "LT",
          'Latvian': "LV",
          'Dutch': "NL",
          'Polish': "PL",
          'Portuguese': "PT",
          'Romanian': "RO",
          'Russian': "RU",
          'Slovak': "SK",
          'Slovenian': "SL",
          'Swedish': "SV",
          'Chinese': "ZH"
        };
        this.countDeeplUsage = '';
      }

      _createClass(TransFilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.translation = '';

          switch (this.APIBase) {
            case 'SDL':
              this.apiSDLService.getToken().subscribe(function (res) {
                _this2.token = res;
                _this2.apiSDLService.token = _this2.token.accessToken;

                _this2.getLanguagePairs();
              });
              this.fileForm.valueChanges.subscribe(function (value) {
                console.log('FORM UPDATED ->');
                console.log(value);
              });
              break;

            case 'DEEPL':
              console.log('DEEPL');
              this.getDeeplUsage();
              this.apiDEEPLService.getLanguagePairs().subscribe(function (languages) {
                _this2.extractLanguages(languages);
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "getLanguagePairs",
        value: function getLanguagePairs() {
          var _this3 = this;

          this.apiSDLService.getLanguagePairs().subscribe(function (languages) {
            _this3.extractLanguages(languages.languagePairs);

            console.log(languages.languagePairs);
          });
        }
      }, {
        key: "extractLanguages",
        value: function extractLanguages(languagePairs) {
          switch (this.APIBase) {
            case 'SDL':
              var _iterator = _createForOfIteratorHelper(languagePairs),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var lang = _step.value;
                  this.sourceLangsFull.push(lang.sourceLanguageId);
                  this.targetLangsFull.push(lang.targetLanguageId);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this.sourceLangs = Array.from(new Set(this.sourceLangsFull)).sort();
              this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
              break;

            case 'DEEPL':
              var _iterator2 = _createForOfIteratorHelper(languagePairs),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _lang = _step2.value;
                  this.sourceLangsFull.push(_lang.name);
                  this.targetLangsFull.push(_lang.name);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.sourceLangs = Array.from(new Set(this.sourceLangsFull)).sort();
              this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
              break;

            default:
              break;
          }

          console.log('IDIOMAS ENTRADA => ', this.sourceLangs);
          console.log('IDIOMAS SALIDA => ', this.targetLangs);
        }
      }, {
        key: "updateTargetLang",
        value: function updateTargetLang(e) {
          var lang = e.target.value;
          var cant = 0;

          switch (this.APIBase) {
            case 'SDL':
              if (lang == 'auto') {
                this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
                cant = this.targetLangs.length;
              } else {
                this.targetLangs = [];
                console.log('GO TO UPDATE LANGS', lang);

                for (var l = 0; l < this.sourceLangsFull.length; l++) {
                  var element = this.sourceLangsFull[l];

                  if (element == lang) {
                    this.targetLangs[cant] = this.targetLangsFull[l];
                    cant++;
                  }
                }
              }

              break;

            default:
              break;
          } // console.log(cant, 'combinaciones => ', this.targetLangs);

        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this4 = this;

          this.selectedFile = event.target.files[0];
          console.log('INPUT FILE => ', event);
          /*
          const reader = new FileReader();
          reader.readAsDataURL(e.target.value);
          console.log('READER => ', reader);
          const myFile = new Blob([reader.result], { type: fileType });
          console.log('MYFILE => ', myFile);
          const myUrl = window.URL.createObjectURL(myFile);
          console.log('MYURL => ', myUrl);
          */

          switch (this.APIBase) {
            case 'SDL':
              this.formatIndex = this.inputFormatsIn.indexOf(this.selectedFile.type);
              this.selectedFileTypeIn = this.inputFormatsName[this.formatIndex];
              this.selectedFileTypeOut = this.inputFormatsOut[this.formatIndex];
              break;

            case 'DEEPL':
              /*
              let localUrl: any[];
              if (event.target.files && event.target.files[0]) {
               let reader = new FileReader();
               reader.onload = (event: any) => {
                   localUrl = event.target.result;
                   console.log('LOCAL_URL => ', localUrl);
                   console.log('READER (in) => ', reader);
               }
               console.log('WEBKITRELATIVEPATH => ', event.target.files[0].webkitRelativePath);
               this.selectedFileTypeIn = event.target.files[0].webkitRelativePath;
                          reader.readAsDataURL(event.target.files[0]);
               // console.log('READER (out) => ', reader.readAsDataURL(event.target.files[0]));
                          const myFile = new Blob([reader.result], { type: event.target.files[0].type });
               console.log('MYFILE => ', myFile);
                          const myUrl = window.URL.createObjectURL(myFile);
               console.log('MYURL => ', myUrl);
              }
              */
              console.log('UPLOAD_FILE_TO_API => ', this.selectedFile);
              this.apiDEEPLService.upload(this.selectedFile).subscribe(function (event) {
                if (typeof event === 'object') {
                  console.log('EVENT_LINK => ', event.link);
                  _this4.selectedFileTypeIn = event.link;
                  _this4.selectedFileTypeOut = event.link;
                }
              });
              break;

            default:
              break;
          }

          console.log('FILE -->', this.selectedFileTypeIn, this.selectedFile);
        }
      }, {
        key: "createFileName",
        value: function createFileName(filename, lang) {
          var outputFileName = '';
          var separator = filename.lastIndexOf(".");
          var name = filename.slice(0, separator);
          var ext = filename.slice(-(filename.length - separator)).toLowerCase();
          lang = lang.toUpperCase();

          switch (ext) {
            case '.pdf':
              outputFileName = "".concat(name, "-").concat(lang, ".docx");
              break;

            case '.gif':
            case '.png':
            case '.jpg':
            case '.jpeg':
              outputFileName = "".concat(name, "-").concat(lang, ".txt");
              break;

            default:
              outputFileName = "".concat(name, "-").concat(lang).concat(ext);
              break;
          }

          console.log(filename, '======>', outputFileName);
          return outputFileName;
        }
      }, {
        key: "uploadAndTranslate",
        value: function uploadAndTranslate() {
          var _this5 = this;

          this.statistics = null;
          this.isFileReady = false;
          this.translationInProcess = true;
          var sourceL = this.fileForm.get("translationSourceL").value;
          var targetL = this.fileForm.get("translationTargetL").value;
          console.log('FORM UPLOAD -> ', sourceL, '>', targetL, this.selectedFile);

          switch (this.APIBase) {
            case 'SDL':
              this.outputFileName = this.createFileName(this.selectedFile.name, targetL);
              this.apiSDLService.sendFileToTranslate(this.selectedFile, this.selectedFileTypeIn, sourceL, targetL).subscribe(function (data) {
                _this5.requestID = data.requestId;

                _this5.checkStatus(_this5.requestID);
              });
              break;

            case 'DEEPL':
              this.outputFileName = this.createFileName(this.selectedFile.name, this.targetLangsCode[targetL]);
              this.apiDEEPLService.sendFileToTranslate(this.selectedFile, this.selectedFileTypeIn, this.sourceLangsCode[sourceL], this.targetLangsCode[targetL]).subscribe(function (data) {
                console.log(data);

                _this5.checkStatus('');
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "checkStatus",
        value: function checkStatus(requestID) {
          var _this6 = this;

          var intervalID;
          var contador = 0;
          this.statusTranslation = '';

          switch (this.APIBase) {
            case 'SDL':
              intervalID = setInterval(function () {
                _this6.apiSDLService.checkTranslationStatus(requestID).subscribe(function (res) {
                  _this6.statusTranslation = res.translationStatus;

                  switch (_this6.statusTranslation) {
                    case 'DONE':
                      clearInterval(intervalID);
                      _this6.statistics = res.translationStats;
                      _this6.translationInProcess = false;
                      _this6.isFileReady = true;
                      _this6.readyID = _this6.requestID;
                      _this6.readyTypeOut = _this6.selectedFileTypeOut;
                      break;

                    case 'FAILED':
                      clearInterval(intervalID);
                      _this6.translationInProcess = false;
                      var error = res.errors[0];
                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Error # ".concat(error.code),
                        text: error.description,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      });
                      break;
                  }
                });
              }, 500);
              break;

            case 'DEEPL':
              intervalID = setInterval(function () {
                _this6.statusTranslation = 'DONE';
                _this6.statistics = 'DONE';
                _this6.translationInProcess = false;
                _this6.isFileReady = true;
                _this6.readyID = _this6.requestID;
                _this6.readyTypeOut = _this6.selectedFileTypeOut;
              }, 500);
              break;

            default:
              break;
          }
        }
      }, {
        key: "getFile",
        value: function getFile() {
          switch (this.APIBase) {
            case 'SDL':
              this.apiSDLService.getFileTranslated(this.readyID, this.readyTypeOut);
              break;

            case 'DEEPL':
              console.log('SELECTEDFILETYPEOUT => ', this.selectedFileTypeOut);
              break;

            default:
              break;
          }
        }
      }, {
        key: "showTranslation",
        value: function showTranslation(requestID) {
          var _this7 = this;

          this.apiSDLService.getTranslation(requestID).subscribe(function (res) {
            console.log('TEXTO TRADUCIDO -> ', res);
            _this7.translation = res.translation;
          });
        }
      }, {
        key: "cleanFiles",
        value: function cleanFiles() {
          this.selectedFile = null;
        }
      }, {
        key: "getDeeplUsage",
        value: function getDeeplUsage() {
          var _this8 = this;

          this.apiDEEPLService.getUsage().subscribe(function (res) {
            _this8.countDeeplUsage = "".concat(res.character_count, " / ").concat(res.character_limit);
          });
        }
      }]);

      return TransFilesComponent;
    }();

    TransFilesComponent.??fac = function TransFilesComponent_Factory(t) {
      return new (t || TransFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_3__["ApiSdlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_deepl_service__WEBPACK_IMPORTED_MODULE_4__["ApiDeeplService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_5__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    TransFilesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TransFilesComponent,
      selectors: [["app-trans-files"]],
      decls: 48,
      vars: 17,
      consts: [[1, "container-fluid"], [3, "formGroup", "ngSubmit"], [1, "row", "d-flex"], [1, "col-5", "my-3", "py-3"], [1, "form-group", "text-center"], [1, "form-group", "row"], ["for", "formSourceLang", 1, "col-6", "col-form-label"], [1, "col-6"], ["name", "translationSourceL", "formControlName", "translationSourceL", "required", "", 1, "form-control", 3, "change"], ["value", "auto", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appNgDropFiles", "", 1, "well", "drop-zone", "mb-3", 3, "selectedFile", "ngClass", "mouseOnArea"], [4, "ngIf"], ["src", "../../../assets/drop-images.png", "alt", ""], ["type", "file", "formControlName", "selectedFile", "required", "", 1, "d-none", 3, "change"], ["fileInput", ""], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-block", 3, "click"], ["class", "table col-12 mt-3", 4, "ngIf"], [1, "col-2", "align-self-center", "mt-5"], ["type", "submit", 1, "btn", "btn-block", "btn-tick", 3, "disabled", "click"], ["class", "fas fa-language mr-2", 4, "ngIf"], ["class", "spinner-grow spinner-grow-sm mr-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "text-center text-secondary d-block", 4, "ngIf"], ["for", "exampleFormControlTextarea1"], ["for", "formTargetLang", 1, "col-6", "col-form-label"], ["name", "translationTargetL", "formControlName", "translationTargetL", "placeholder", "Seleccionar", "required", "", 1, "form-control"], [1, "well", "drop-zone", "mb-3"], ["src", "../../../assets/drop-images.png", "alt", "Image file ready", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-block", "invisible", 3, "click"], ["class", "row d-flex mb-5", 4, "ngIf"], [3, "value"], [1, "table", "col-12", "mt-3"], [1, "fas", "fa-trash-alt", "icon-delete", 3, "click"], [1, "fas", "fa-language", "mr-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm", "mr-2"], [1, "text-center", "text-secondary", "d-block"], ["src", "../../../assets/drop-images.png", "alt", "Image file ready"], ["class", "fas fa-download", 3, "click", 4, "ngIf"], ["class", "main-color", 3, "href", 4, "ngIf"], [1, "fas", "fa-download", 3, "click"], [1, "main-color", 3, "href"], [1, "fas", "fa-download"], [1, "row", "d-flex", "mb-5"], [1, "col-5"], [1, "table", "text-center"], [1, "col-5", "offset-2", "text-center"], [1, "table"]],
      template: function TransFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function TransFilesComponent_Template_form_ngSubmit_2_listener() {
            return ctx.uploadAndTranslate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Archivo a traducir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Idioma de entrada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function TransFilesComponent_Template_select_change_12_listener($event) {
            return ctx.updateTargetLang($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Auto-detectar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, TransFilesComponent_option_15_Template, 3, 4, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mouseOnArea", function TransFilesComponent_Template_div_mouseOnArea_16_listener($event) {
            return ctx.isOverElement = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, TransFilesComponent_h5_17_Template, 2, 0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function TransFilesComponent_Template_input_change_19_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TransFilesComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](20);

            return _r2.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Seleccionar archivo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, TransFilesComponent_table_23_Template, 17, 5, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TransFilesComponent_Template_button_click_25_listener() {
            return ctx.uploadAndTranslate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, TransFilesComponent_i_26_Template, 1, 0, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, TransFilesComponent_span_27_Template, 1, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Traducir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, TransFilesComponent_p_29_Template, 3, 1, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Archivo traducido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Idioma de salida");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, TransFilesComponent_option_39_Template, 3, 4, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, TransFilesComponent_h5_41_Template, 2, 0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, TransFilesComponent_img_42_Template, 1, 0, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TransFilesComponent_Template_button_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](20);

            return _r2.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Seleccionar archivo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, TransFilesComponent_table_45_Template, 13, 3, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, TransFilesComponent_div_46_Template, 35, 6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.fileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.sourceLangs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selectedFile", ctx.selectedFile)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx.isOverElement));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectedFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectedFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.fileForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.translationInProcess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.translationInProcess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.countDeeplUsage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.targetLangs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.statistics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.statistics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.statistics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.statistics && ctx.APIBase === "SDL");
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_9__["NgDropFilesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      pipes: [_pipes_langs_pipe__WEBPACK_IMPORTED_MODULE_11__["LangsPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]],
      styles: [".drop-zone[_ngcontent-%COMP%]{\r\n  border: dotted 3px lightgray;\r\n  opacity: 0.5;\r\n  color: #666;\r\n  text-align: center;\r\n  height: 160px;\r\n}\r\n\r\n.file-over[_ngcontent-%COMP%] {\r\n  border: dotted 3px #1a3b47;\r\n}\r\n\r\n.icon-delete[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFucy1maWxlcy90cmFucy1maWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYW5zLWZpbGVzL3RyYW5zLWZpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC16b25le1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCBsaWdodGdyYXk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4uZmlsZS1vdmVyIHtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggIzFhM2I0NztcclxufVxyXG5cclxuLmljb24tZGVsZXRlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TransFilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-trans-files',
          templateUrl: './trans-files.component.html',
          styleUrls: ['./trans-files.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_3__["ApiSdlService"]
        }, {
          type: src_app_services_api_deepl_service__WEBPACK_IMPORTED_MODULE_4__["ApiDeeplService"]
        }, {
          type: src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_5__["UploadFileService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/trans-texts/trans-texts.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/trans-texts/trans-texts.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TransTextsComponent */

  /***/
  function srcAppComponentsTransTextsTransTextsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransTextsComponent", function () {
      return TransTextsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-sdl.service */
    "./src/app/services/api-sdl.service.ts");
    /* harmony import */


    var src_app_services_api_deepl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api-deepl.service */
    "./src/app/services/api-deepl.service.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _pipes_langs_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/langs-pipe */
    "./src/app/pipes/langs-pipe.ts");

    function TransTextsComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "langsPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var sourceLang_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", sourceLang_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, sourceLang_r7), " ");
      }
    }

    function TransTextsComponent_i_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 25);
      }
    }

    function TransTextsComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 26);
      }
    }

    function TransTextsComponent_p_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.countDeeplUsage);
      }
    }

    function TransTextsComponent_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "langsPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var targetLang_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", targetLang_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, targetLang_r8));
      }
    }

    function TransTextsComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Palabras");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Bytes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "table", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Palabras");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Bytes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.statistics.inputWordCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.statistics.inputCharCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.statistics.inputByteCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.statistics.translationWordCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.statistics.translationCharCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.statistics.translationByteCount);
      }
    }

    var TransTextsComponent = /*#__PURE__*/function () {
      function TransTextsComponent(apiSDLService, apiDEEPLService) {
        _classCallCheck(this, TransTextsComponent);

        this.apiSDLService = apiSDLService;
        this.apiDEEPLService = apiDEEPLService;
        this.textForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          translationSourceL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          translationTargetL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          translationText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          translationTargetText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        }); // private APIBase: string = 'SDL';

        this.APIBase = 'DEEPL';
        this.translationInProcess = false;
        this.textReadyToCopy = true;
        this.sourceLangsFull = [];
        this.targetLangsFull = [];
        this.sourceLangsCode = {
          'Bulgarian': "BG",
          'Czech': "CS",
          'Danish': "DA",
          'German': "DE",
          'Greek': "EL",
          'English': "EN",
          'Spanish': "ES",
          'Estonian': "ET",
          'Finnish': "FI",
          'French': "FR",
          'Hungarian': "HU",
          'Italian': "IT",
          'Japanese': "JA",
          'Lithuanian': "LT",
          'Latvian': "LV",
          'Dutch': "NL",
          'Polish': "PL",
          'Portuguese': "PT",
          'Romanian': "RO",
          'Russian': "RU",
          'Slovak': "SK",
          'Slovenian': "SL",
          'Swedish': "SV",
          'Chinese': "ZH"
        };
        this.targetLangsCode = {
          'Bulgarian': "BG",
          'Czech': "CS",
          'Danish': "DA",
          'German': "DE",
          'Greek': "EL",
          'English': "EN",
          'Spanish': "ES",
          'Estonian': "ET",
          'Finnish': "FI",
          'French': "FR",
          'Hungarian': "HU",
          'Italian': "IT",
          'Japanese': "JA",
          'Lithuanian': "LT",
          'Latvian': "LV",
          'Dutch': "NL",
          'Polish': "PL",
          'Portuguese': "PT",
          'Romanian': "RO",
          'Russian': "RU",
          'Slovak': "SK",
          'Slovenian': "SL",
          'Swedish': "SV",
          'Chinese': "ZH"
        };
        this.sourceLangs = [];
        this.targetLangs = [];
        this.deeplUsage = false;
        this.countDeeplUsage = '';
      }

      _createClass(TransTextsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.statusTranslation = '';

          switch (this.APIBase) {
            case 'SDL':
              this.apiSDLService.getToken().subscribe(function (res) {
                _this9.token = res;
                _this9.apiSDLService.token = _this9.token.accessToken;
              });
              this.apiSDLService.getLanguagePairs().subscribe(function (languages) {
                _this9.extractLanguages(languages.languagePairs);
              });
              this.textForm.valueChanges.subscribe(function (value) {
                console.log(value);
              });
              break;

            case 'DEEPL':
              this.getDeeplUsage();
              this.apiDEEPLService.getLanguagePairs().subscribe(function (languages) {
                _this9.extractLanguages(languages);
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "extractLanguages",
        value: function extractLanguages(languagePairs) {
          switch (this.APIBase) {
            case 'SDL':
              var _iterator3 = _createForOfIteratorHelper(languagePairs),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var lang = _step3.value;
                  this.sourceLangsFull.push(lang.sourceLanguageId);
                  this.targetLangsFull.push(lang.targetLanguageId);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              this.sourceLangs = Array.from(new Set(this.sourceLangsFull)).sort();
              this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
              break;

            case 'DEEPL':
              var _iterator4 = _createForOfIteratorHelper(languagePairs),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _lang2 = _step4.value;
                  this.sourceLangsFull.push(_lang2.name);
                  this.targetLangsFull.push(_lang2.name);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              this.sourceLangs = Array.from(new Set(this.sourceLangsFull)).sort();
              this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
              break;

            default:
              break;
          }
        }
      }, {
        key: "updateTargetLang",
        value: function updateTargetLang(e) {
          var lang = e.target.value;
          var cant = 0;

          switch (this.APIBase) {
            case 'SDL':
              if (lang == 'auto') {
                this.targetLangs = Array.from(new Set(this.targetLangsFull)).sort();
                cant = this.targetLangs.length;
              } else {
                this.targetLangs = [];

                for (var l = 0; l < this.sourceLangsFull.length; l++) {
                  var element = this.sourceLangsFull[l];

                  if (element == lang) {
                    this.targetLangs[cant] = this.targetLangsFull[l];
                    cant++;
                  }
                }
              }

              break;

            default:
              break;
          }
        }
      }, {
        key: "toTranslate",
        value: function toTranslate() {
          var _this10 = this;

          this.requestID = '';
          this.translation = '';
          this.statusTranslation = '';
          this.translationInProcess = true;
          var text = this.textForm.get('translationText').value;
          var sourceL = this.textForm.get('translationSourceL').value;
          var targetL = this.textForm.get('translationTargetL').value;

          if (text) {
            switch (this.APIBase) {
              case 'SDL':
                this.apiSDLService.sendTextToTranslate(text, sourceL, targetL).subscribe(function (res) {
                  _this10.requestID = res.requestId;

                  if (_this10.requestID) {
                    _this10.checkStatus(_this10.requestID);
                  } else {
                    console.log('ERROR en request');
                  }
                });
                break;

              case 'DEEPL':
                this.apiDEEPLService.sendTextToTranslate(text, this.sourceLangsCode[sourceL], this.targetLangsCode[targetL]).subscribe(function (res) {
                  _this10.showTranslation(res.translations[0].text);
                });
                break;

              default:
                break;
            }
          } else {
            alert('El Texto de Entrada NO puede estar vac??o');
          }
        }
      }, {
        key: "checkStatus",
        value: function checkStatus(requestID) {
          var _this11 = this;

          var intervalID;
          this.statusTranslation = '';
          intervalID = setInterval(function () {
            _this11.apiSDLService.checkTranslationStatus(requestID).subscribe(function (res) {
              _this11.statusTranslation = res.translationStatus;

              switch (_this11.statusTranslation) {
                case 'DONE':
                  clearInterval(intervalID);
                  _this11.statistics = res.translationStats;
                  _this11.translationInProcess = false;

                  _this11.showTranslation(requestID);

                  break;

                case 'FAILED':
                  clearInterval(intervalID);
                  var error = res.errors[0];
                  _this11.translationInProcess = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "Error # ".concat(error.code),
                    text: error.description,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  });
                  break;
              }
            });
          }, 500);
        }
      }, {
        key: "showTranslation",
        value: function showTranslation(requestID) {
          var _this12 = this;

          switch (this.APIBase) {
            case 'SDL':
              this.apiSDLService.getTranslation(requestID).subscribe(function (res) {
                _this12.textForm.patchValue({
                  translationTargetText: res.translation
                });
              });
              break;

            case 'DEEPL':
              this.translationInProcess = false;
              this.textReadyToCopy = false;
              this.textForm.patchValue({
                translationTargetText: requestID
              });
              this.getDeeplUsage();
              break;

            default:
              break;
          }
        }
      }, {
        key: "getDeeplUsage",
        value: function getDeeplUsage() {
          var _this13 = this;

          this.apiDEEPLService.getUsage().subscribe(function (res) {
            _this13.countDeeplUsage = "".concat(res.character_count, " / ").concat(res.character_limit);
          });
        }
      }, {
        key: "copyToClipboard",
        value: function copyToClipboard(inputElement) {
          inputElement.select();
          document.execCommand('copy');
          inputElement.setSelectionRange(0, 0);
        }
      }]);

      return TransTextsComponent;
    }();

    TransTextsComponent.??fac = function TransTextsComponent_Factory(t) {
      return new (t || TransTextsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_3__["ApiSdlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_deepl_service__WEBPACK_IMPORTED_MODULE_4__["ApiDeeplService"]));
    };

    TransTextsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TransTextsComponent,
      selectors: [["app-trans-texts"]],
      decls: 38,
      vars: 9,
      consts: [[1, "container-fluid"], [3, "formGroup", "ngSubmit"], [1, "row", "d-flex"], [1, "col-5", "my-3", "py-3"], [1, "form-group", "row"], ["for", "formSourceLang", 1, "col-6", "col-form-label"], [1, "col-6"], ["name", "translationSourceL", "formControlName", "translationSourceL", 1, "form-control", 3, "change"], ["value", "auto", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], ["name", "translationText", "formControlName", "translationText", "rows", "10", 1, "form-control"], [1, "col-2", "align-self-center", "mt-5"], ["type", "submit", 1, "btn", "btn-block", "btn-tick", 3, "disabled", "click"], ["class", "fas fa-language mr-2", 4, "ngIf"], ["class", "spinner-grow spinner-grow-sm mr-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "text-center text-secondary d-block", 4, "ngIf"], ["for", "formTargetLang", 1, "col-6", "col-form-label"], ["name", "translationTargetL", "formControlName", "translationTargetL", "placeholder", "Seleccionar", "required", "", 1, "form-control"], ["name", "translationTargetText", "formControlName", "translationTargetText", "rows", "10", "readonly", "", 1, "form-control"], ["translatedTextInput", ""], ["type", "button", 1, "btn", "btn-block", "btn-tick", 3, "disabled", "click"], [1, "fas", "fa-clone", "mr-2"], ["class", "row d-flex", 4, "ngIf"], [3, "value"], [1, "fas", "fa-language", "mr-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm", "mr-2"], [1, "text-center", "text-secondary", "d-block"], [1, "col-5"], [1, "table", "text-center"], [1, "col-5", "offset-2", "text-center"], [1, "table"]],
      template: function TransTextsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function TransTextsComponent_Template_form_ngSubmit_2_listener() {
            return ctx.toTranslate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Idioma de entrada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function TransTextsComponent_Template_select_change_9_listener($event) {
            return ctx.updateTargetLang($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Auto-detectar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, TransTextsComponent_option_12_Template, 3, 4, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TransTextsComponent_Template_button_click_17_listener() {
            return ctx.toTranslate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, TransTextsComponent_i_18_Template, 1, 0, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, TransTextsComponent_span_19_Template, 1, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Traducir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, TransTextsComponent_p_21_Template, 3, 1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Idioma de salida");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, TransTextsComponent_option_28_Template, 3, 4, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "textarea", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TransTextsComponent_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);

            return ctx.copyToClipboard(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Copiar texto traducido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, TransTextsComponent_div_36_Template, 35, 6, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.textForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.sourceLangs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.textForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.translationInProcess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.translationInProcess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.countDeeplUsage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.targetLangs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.textReadyToCopy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.statistics);
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      pipes: [_pipes_langs_pipe__WEBPACK_IMPORTED_MODULE_8__["LangsPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnMtdGV4dHMvdHJhbnMtdGV4dHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TransTextsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-trans-texts',
          templateUrl: './trans-texts.component.html',
          styleUrls: ['./trans-texts.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_sdl_service__WEBPACK_IMPORTED_MODULE_3__["ApiSdlService"]
        }, {
          type: src_app_services_api_deepl_service__WEBPACK_IMPORTED_MODULE_4__["ApiDeeplService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/ng-drop-files.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/directives/ng-drop-files.directive.ts ***!
    \*******************************************************/

  /*! exports provided: NgDropFilesDirective */

  /***/
  function srcAppDirectivesNgDropFilesDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDropFilesDirective", function () {
      return NgDropFilesDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgDropFilesDirective = /*#__PURE__*/function () {
      function NgDropFilesDirective() {
        _classCallCheck(this, NgDropFilesDirective);

        this.mouseOnArea = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NgDropFilesDirective, [{
        key: "onDragEnter",
        value: function onDragEnter(event) {
          this.mouseOnArea.emit(true);

          this._preventStop(event);
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.mouseOnArea.emit(false);
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          var transfer = this._getTransfer(event);

          if (!transfer) {
            return;
          }

          this._extractFiles(transfer.files);

          this._preventStop(event);

          this.mouseOnArea.emit(false);
        }
      }, {
        key: "_getTransfer",
        value: function _getTransfer(event) {
          return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
        }
      }, {
        key: "_extractFiles",
        value: function _extractFiles(listFiles) {
          for (var properties in Object.getOwnPropertyNames(listFiles)) {
            var tempFile = listFiles[properties];

            if (this._fileCanBeUploaded(tempFile)) {
              this.selectedFile = tempFile;
            }
          }

          console.log(this.selectedFile);
        } // Validaciones

      }, {
        key: "_fileCanBeUploaded",
        value: function _fileCanBeUploaded(file) {
          if (this._fileFormat(file.type)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "_preventStop",
        value: function _preventStop(event) {
          event.preventDefault();
          event.stopPropagation();
        } // esta Validaci??n es s??lo para im??genes, pero no lo voy a utilizar.
        // TO DO - incluir s??lo formatos permisibles.

      }, {
        key: "_fileFormat",
        value: function _fileFormat(typeFile) {
          // return ( typeFile === '' || typeFile === undefined ) ? false : typeFile.startsWith('image');
          return typeFile === '' || typeFile === undefined ? false : true;
        }
      }]);

      return NgDropFilesDirective;
    }();

    NgDropFilesDirective.??fac = function NgDropFilesDirective_Factory(t) {
      return new (t || NgDropFilesDirective)();
    };

    NgDropFilesDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
      type: NgDropFilesDirective,
      selectors: [["", "appNgDropFiles", ""]],
      hostBindings: function NgDropFilesDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragover", function NgDropFilesDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragEnter($event);
          })("dragleave", function NgDropFilesDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          })("drop", function NgDropFilesDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        selectedFile: "selectedFile"
      },
      outputs: {
        mouseOnArea: "mouseOnArea"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgDropFilesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appNgDropFiles]'
        }]
      }], function () {
        return [];
      }, {
        selectedFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mouseOnArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pipes/error-codes.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/error-codes.pipe.ts ***!
    \*******************************************/

  /*! exports provided: ErrorCodesPipe */

  /***/
  function srcAppPipesErrorCodesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorCodesPipe", function () {
      return ErrorCodesPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorCodesPipe = /*#__PURE__*/function () {
      function ErrorCodesPipe() {
        _classCallCheck(this, ErrorCodesPipe);

        this.errorCodes = ['4', '5', '6', '7', '10', '11', '12', '13', '15', '16', '17', '18', '19', '20', '21', '26', '27', '37', '38', '39', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '54', '55', '56', '57', '58', '59', '61', '62', '63', '64', '1000', '1001', '1002', '1003', '1004', '1005', '1006', '1008', '1013', '1015', '1016', '1018', '1019', '1020', '1021', '1022', '1023', '1024', '1025', '1026', '1027', '1029', '1030', '1031'];
        this.errorMessagesEN = ['Service timed out', 'Client timed out', 'Unknown language pair', 'Unsupported input format.', 'Pending Acknowledgement', 'System not ready', 'Empty Translation Result.', 'Timed-out waiting for translation to complete.', 'Invalid request parameters. Verify data with the documentation and try again.', 'Invalid sync parameters. Verify data with the documentation and try again.', 'The filter for the requested format is unavailable at this time.', '{0} parameter is missing or is empty.', '{0} must be between {1} and {2} (was {3})', '{0} parameter is invalid.', 'Input characters number is greater than the maximum allowed for translation request.', 'Xmt translation failed', 'Internal Service Error', 'Failed to filter document', 'Failed to output document', 'Invalid BCM/JSON', 'Language detection failed', 'Invalid requestId {0}', 'Unknown status for requestId {0}', 'Translation not found for requestId {0}', 'Language pair {0} does not exist.', 'No subscription for source language {0} target language {1}', '{0} language is not code 3 format or auto. (was {1})', '{0} language is not code 3 format. (was {1})', 'Source language cannot be detected', 'Language pair for source {0} and target {1} does not exist', 'The request was rejected because its size ({0}) exceeds the configured maximum ({1})', 'The field input exceeds its maximum permitted size of {0} bytes.', 'Unable to generate the access token. Verify your credentials and try again.', 'Invalid access token. The Token has expired.', 'Invalid access token.', 'Invalid or expired access token.', 'Problem accessing content', 'Invalid XML detected', '{0} parameter size must be between {1} and {2}', 'Translation cancelled', 'Cannot cancel translation, status is already: {0}', 'File has copy protection', 'Failed to {0} {1}', '{0} with id {1} already exists', '{0} with id {1} does not exist', 'No account was found', '{0} with email {1} already exists', 'Role: {0} does not exist', 'Email field cannot be updated', 'Action: {0} does not exist', '{0} is required', 'Cannot create api credentials with name {0} for account {1}', 'Api credentials with name <{0}> already exists', 'user {0} not found', 'Error generating report. One of the following parameters must be empty: {0}, {1}', 'Cannot regenerate api credentials secret for clientId: {0} for account {1}', 'Parameter should be a positive integer: {0}', 'Maximum page size exceeded. Maximum page size is: {0}', 'Term already exists: {0}', 'Term not found: {0}', '{0} with name: {1} already exists', 'Domain wildcard {0} already exists', 'Invalid domain wildcard {0}', 'Forbidden to translate on detected source language {0} and given target {1}', '{0} parameter cannot be provided for source auto', 'Please provide just one operation between({0})'];
      }

      _createClass(ErrorCodesPipe, [{
        key: "transform",
        value: function transform(code) {
          var result = this.errorCodes.indexOf(code);

          if (result == -1) {
            // en caso de no encontrar coincidencia con los idiomas aqui almacenados
            return 'Error desconocido';
          } else {
            // si encuentra coincidencia
            return this.errorMessagesEN[result];
          }
        }
      }]);

      return ErrorCodesPipe;
    }();

    ErrorCodesPipe.??fac = function ErrorCodesPipe_Factory(t) {
      return new (t || ErrorCodesPipe)();
    };

    ErrorCodesPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
      name: "errorCodes",
      type: ErrorCodesPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorCodesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'errorCodes'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/langs-pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/langs-pipe.ts ***!
    \*************************************/

  /*! exports provided: LangsPipe */

  /***/
  function srcAppPipesLangsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangsPipe", function () {
      return LangsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LangsPipe = /*#__PURE__*/function () {
      function LangsPipe() {
        _classCallCheck(this, LangsPipe);

        this.langChars = ['afr', 'alb', 'amh', 'ara', 'arz', 'arm', 'aze', 'baq', 'bel', 'ben', 'bih', 'bul', 'cat', 'ceb', 'chr', 'chi', 'cht', 'hrv', 'cze', 'dan', 'fad', 'dut', 'eng', 'est', 'fin', 'fra', 'frc', 'glg', 'lug', 'geo', 'ger', 'gre', 'guj', 'hau', 'heb', 'hin', 'hmn', 'hun', 'ice', 'ind', 'iku', 'gle', 'ita', 'jpn', 'jav', 'kan', 'kin', 'kor', 'lav', 'lif', 'lit', 'mac', 'may', 'mal', 'mlt', 'mar', 'nep', 'nor', 'ori', 'oss', 'pus', 'per', 'pol', 'por', 'ptb', 'ptp', 'rum', 'rus', 'srp', 'slo', 'slv', 'som', 'spa', 'sun', 'swa', 'swe', 'syr', 'tgl', 'tgk', 'tam', 'tel', 'tha', 'tur', 'ukr', 'urd', 'uzb', 'vie', 'wel', 'yid'];
        this.langShort = ['af', 'sq', 'am', 'ar', 'ar-arabizi', 'hy', 'az', 'eu', 'be', 'bn', 'bh', 'bg', 'ca', 'ceb', 'chr', 'zh-Hans', 'zh-Hant', 'hr', 'cs', 'da', 'prs-AF', 'nl', 'en', 'et', 'fi', 'fr', 'fr-CA', 'gl', 'lg', 'ka', 'de', 'el', 'gu', 'ha', 'he', 'hi', 'hmn', 'hu', 'is', 'id', 'iu', 'ga', 'it', 'ja', 'jv', 'kn', 'rw', 'ko', 'lv', 'lif', 'lt', 'mk', 'ms', 'ml', 'mt', 'mr', 'ne', 'no', 'or', 'os', 'ps', 'fa', 'pl', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sr', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'syr', 'tl', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', 'cy', 'yi'];
        this.langLong = ['Africaans', 'Alban??s', 'Am??rico', 'Ar??bica', '??rabe (Arabizi)', 'Armenio', 'Azerbaiyano', 'Vasco', 'Bielorruso', 'Bengal??', 'Bihari', 'B??lgaro', 'Catal??n', 'Cebuano', 'Cherokee', 'Chino simplificado)', 'Chino (tradicional)', 'Croata', 'Checo', 'Dan??s', 'Dari', 'Holand??s', 'Ingl??s', 'Estonio', 'Finland??s', 'Franc??s', 'Franc??s (Canad??)', 'Gallego', 'Ganda', 'Georgiano', 'Alem??n', 'Griego', 'Gujarati', 'Hausa', 'Hebreo', 'Hindi', 'Hmong', 'H??ngaro', 'Island??s', 'Indonesio', 'Inuktitut', 'Irlandesa', 'Italiano', 'Japon??s', 'Javan??s', 'Kannada', 'Kinyarwanda', 'Coreano', 'Let??n', 'Limbu', 'Lituano', 'Maced??nio', 'Malayo', 'Malayalam', 'Malt??s', 'Marathi', 'Nepal??', 'Noruego', 'Oriya', 'Osetio', 'Pashto', 'Persa', 'Polaco', 'Portugu??s', 'Portugu??s (Brasil)', 'Portugu??s (portugal)', 'Rumano', 'Ruso', 'Serbio', 'Eslovaco', 'Esloveno', 'Somal??', 'Espa??ol', 'Sundan??s', 'Swahili', 'Sueco', 'Sir??aco', 'Tagalo', 'Tayiko', 'Tamil', 'Telugu', 'Tailand??s', 'Turco', 'Ucranio', 'Urdu', 'Uzbeko', 'Vietnamita', 'Gal??s', 'Y??dish'];
      }

      _createClass(LangsPipe, [{
        key: "transform",
        value: function transform(value) {
          var result = this.langChars.indexOf(value);

          if (result == -1) {
            // en caso de no encontrar coincidencia con los idiomas aqui almacenados
            return value;
          } else {
            return this.langLong[result];
          }
        }
      }]);

      return LangsPipe;
    }();

    LangsPipe.??fac = function LangsPipe_Factory(t) {
      return new (t || LangsPipe)();
    };

    LangsPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
      name: "langsPipe",
      type: LangsPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LangsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'langsPipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api-deepl.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/api-deepl.service.ts ***!
    \***********************************************/

  /*! exports provided: ApiDeeplService */

  /***/
  function srcAppServicesApiDeeplServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiDeeplService", function () {
      return ApiDeeplService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ApiDeeplService = /*#__PURE__*/function () {
      function ApiDeeplService(http) {
        _classCallCheck(this, ApiDeeplService);

        this.http = http;
        this.authKey = 'c34b7b82-94ce-276c-25a2-23d4f6a14da1:fx';
        this.baseApiUrl = 'https://file.io';
      }

      _createClass(ApiDeeplService, [{
        key: "getLanguagePairs",
        value: function getLanguagePairs() {
          var url = "https://api-free.deepl.com/v2/languages?auth_key=".concat(this.authKey);
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/x-www-form-urlencoded'
            })
          };
          return this.http.get(url, options).pipe( // tap(_ => console.log('LANGUAGES loaded')),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "sendTextToTranslate",
        value: function sendTextToTranslate(text, sourceL, targetL) {
          var url = '';

          if (sourceL) {
            url = "https://api-free.deepl.com/v2/translate?auth_key=".concat(this.authKey, "&text=").concat(text, "&source_lang=").concat(sourceL, "&target_lang=").concat(targetL);
            console.log(url);
          } else {
            url = "https://api-free.deepl.com/v2/translate?auth_key=".concat(this.authKey, "&text=").concat(text, "&target_lang=").concat(targetL);
            console.log(url);
          }

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/x-www-form-urlencoded'
            })
          };
          return this.http.get(url, options).pipe( // tap(_ => console.log('TRANSLATIONS sent')),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "upload",
        value: function upload(file) {
          // Create form data
          var formData = new FormData(); // Store form name as "file" with file data

          formData.append("file", file, file.name); // Make http post request over api
          // with formData as req

          return this.http.post(this.baseApiUrl, formData);
        }
      }, {
        key: "sendFileToTranslate",
        value: function sendFileToTranslate(file, fileType, sourceL, targetL) {
          var url = 'https://api-free.deepl.com/v2/document';
          var fd = new FormData();
          fd.append('file', file, fileType);
          fd.append('auth_key', this.authKey);

          if (sourceL) {
            fd.append('source_lang', sourceL);
          }

          fd.append('target_lang', targetL);
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'multipart/form-data'
            })
          };
          return this.http.post(url, fd, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('UPLOADING file');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "checkTranslationStatus",
        value: function checkTranslationStatus(requestID) {
          var url = "/v4/mt/translations/async/".concat(requestID);
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/json'
            })
          };
          return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('CHECKING STATUS');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "getFileTranslated",
        value: function getFileTranslated(requestID, fileType) {
          console.log('GOING TO DOWNLOAD...');
          var url = "/v4/mt/translations/async/".concat(requestID, "/content");
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](),
            responseType: 'blob'
          };
          this.http.get(url, options).subscribe(function (response) {
            var blob = new Blob([response], {
              type: fileType
            });
            console.log('BLOB -->', blob);
            var url = window.URL.createObjectURL(blob);
            console.log('URL-->', url);
            window.open(url);
          });
        }
      }, {
        key: "getUsage",
        value: function getUsage() {
          var url = "https://api-free.deepl.com/v2/usage?auth_key=".concat(this.authKey);
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
          return this.http.get(url, options).pipe( // tap(_ => console.log('')),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          };
        }
      }]);

      return ApiDeeplService;
    }();

    ApiDeeplService.??fac = function ApiDeeplService_Factory(t) {
      return new (t || ApiDeeplService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiDeeplService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ApiDeeplService,
      factory: ApiDeeplService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiDeeplService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api-sdl.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/api-sdl.service.ts ***!
    \*********************************************/

  /*! exports provided: ApiSdlService */

  /***/
  function srcAppServicesApiSdlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiSdlService", function () {
      return ApiSdlService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ApiSdlService = /*#__PURE__*/function () {
      function ApiSdlService(http) {
        _classCallCheck(this, ApiSdlService);

        this.http = http;
      }

      _createClass(ApiSdlService, [{
        key: "getToken",
        value: function getToken() {
          var url = '/v4/token';
          var params = {
            "clientId": "yEetEs3H3ok319lEvgojwnRvky4XnY2Y",
            "clientSecret": "qKTK4KLYjpHyxup9JkiLs2lJimy0CKToItPtkmY_ZZ3v0cfRVQwGZj0ZKPedTtZT"
          };
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/json'
            })
          };
          return this.http.post(url, params, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('TOKEN loaded');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "getLanguagePairs",
        value: function getLanguagePairs() {
          var url = '/v4/accounts/38529/subscriptions/language-pairs';
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/json',
              'Authorization': "Bearer ".concat(this.token)
            })
          };
          return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('LANGUAGES loaded');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "sendTextToTranslate",
        value: function sendTextToTranslate(text, sourceL, targetL) {
          var url = '/v4/mt/translations/async';
          var params = {
            "sourceLanguageId": sourceL,
            "targetLanguageId": targetL,
            "model": "Generic",
            "submissionType": "text",
            "inputFormat": "PLAIN",
            "translationMode": "quality",
            "input": [text]
          };
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/json',
              'Authorization': "Bearer ".concat(this.token)
            })
          };
          return this.http.post(url, params, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('TRANSLATIONS sent');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "sendFileToTranslate",
        value: function sendFileToTranslate(file, fileType, sourceL, targetL) {
          console.log('FILEEEEEEE', file);
          var url = '/v4/mt/translations/async';
          var fd = new FormData();
          fd.append('sourceLanguageId', sourceL);
          fd.append('targetLanguageId', targetL);
          fd.append('model', 'Generic');
          fd.append('translationMode', 'quality');
          fd.append('input', file);
          fd.append('inputFormat', fileType);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.token)),
            params: params,
            reportProgress: true,
            withCredentials: true
          };
          return this.http.post(url, fd, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('UPLOADING file');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "checkTranslationStatus",
        value: function checkTranslationStatus(requestID) {
          var url = "/v4/mt/translations/async/".concat(requestID);
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/json',
              'Authorization': "Bearer ".concat(this.token)
            })
          };
          return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('CHECKING STATUS');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "getFileTranslated",
        value: function getFileTranslated(requestID, fileType) {
          console.log('GOING TO DOWNLOAD...');
          var url = "/v4/mt/translations/async/".concat(requestID, "/content");
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.token)),
            responseType: 'blob'
          };
          this.http.get(url, options).subscribe(function (response) {
            var blob = new Blob([response], {
              type: fileType
            });
            console.log('BLOB -->', blob);
            var url = window.URL.createObjectURL(blob);
            console.log('URL-->', url);
            window.open(url);
          });
        }
      }, {
        key: "getTranslation",
        value: function getTranslation(requestID) {
          var url = "/v4/mt/translations/async/".concat(requestID, "/content");
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/json',
              'Authorization': "Bearer ".concat(this.token)
            })
          };
          return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return console.log('TRANSLATION done');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Error = ', [])));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          };
        }
      }]);

      return ApiSdlService;
    }();

    ApiSdlService.??fac = function ApiSdlService_Factory(t) {
      return new (t || ApiSdlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiSdlService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ApiSdlService,
      factory: ApiSdlService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiSdlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, router) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.router = router;
        this.errorLogin = false;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.afAuth.signInWithEmailAndPassword(email, password);

                  case 3:
                    result = _context3.sent;
                    console.log('LOGIN -->', result);
                    return _context3.abrupt("return", result);

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](0);
                    console.log('ERROR -->', _context3.t0);
                    return _context3.abrupt("return", _context3.t0);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 8]]);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.afAuth.signOut();

                  case 3:
                    this.router.navigate(['/login']);
                    _context4.next = 9;
                    break;

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](0);
                    console.log(_context4.t0);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 6]]);
          }));
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise();
        }
      }]);

      return AuthService;
    }();

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/upload-file.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/upload-file.service.ts ***!
    \*************************************************/

  /*! exports provided: UploadFileService */

  /***/
  function srcAppServicesUploadFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFileService", function () {
      return UploadFileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var UploadFileService = /*#__PURE__*/function () {
      function UploadFileService(db) {
        _classCallCheck(this, UploadFileService);

        this.db = db;
        this.FILE_FOLDER = 'Files';
      }

      _createClass(UploadFileService, [{
        key: "saveFiles",
        value: function saveFiles(file) {
          this.db.collection("/".concat(this.FILE_FOLDER)).add(file);
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles(files) {
          var _this14 = this;

          var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();

          var _iterator5 = _createForOfIteratorHelper(files),
              _step5;

          try {
            var _loop = function _loop() {
              var item = _step5.value;
              item.isUploading = true;

              if (item.progress >= 100) {
                return "continue";
              }

              var uploadTask = storageRef.child("".concat(_this14.FILE_FOLDER, "/").concat(item.nameSourceFile)).put(item.sourceFile);
              uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                return item.progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              }, function (error) {
                return console.error('Error uploading ', error);
              }, function () {
                console.log('File upload successfully!');
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                  console.log('El archivo est?? en... ', downloadURL);
                  item.urlSourceFile = downloadURL;
                  item.isUploading = false;
                  console.log(item);

                  _this14.saveFiles({
                    nameFile: item.nameSourceFile,
                    url: item.urlSourceFile
                  });
                });
              });
            };

            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }]);

      return UploadFileService;
    }();

    UploadFileService.??fac = function UploadFileService_Factory(t) {
      return new (t || UploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    UploadFileService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: UploadFileService,
      factory: UploadFileService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UploadFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\erasmo\Desktop\TEST\API Tick\SDL\tick-api-sdl\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map