(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 6566);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 207)).then(m => m.RegisterPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 8558)).then(m => m.ProfilePageModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard]
    },
    {
        path: 'product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/product.module */ 5888)).then(m => m.ProductPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/database */ 6139);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/functions */ 8833);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/messaging */ 798);
/* harmony import */ var _angular_fire_performance__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/performance */ 2494);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/remote-config */ 7586);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/analytics */ 2591);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ 5642);







// Angular Fire imports















// Components

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuthModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestoreModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_10__.AngularFireStorageModule,
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.getAuth)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.getStorage)()),
            (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_13__.provideDatabase)(() => (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_13__.getDatabase)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.getFirestore)()),
            (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_15__.provideFunctions)(() => (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_15__.getFunctions)()),
            (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_16__.provideMessaging)(() => (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_16__.getMessaging)()),
            (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__.provideAnalytics)(() => (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__.getAnalytics)()),
            (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_18__.providePerformance)(() => (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_18__.getPerformance)()),
            (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_19__.provideRemoteConfig)(() => (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_19__.getRemoteConfig)()),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_20__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy,
            },
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__.UserTrackingService,
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_17__.ScreenTrackingService,
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
        ],
    })
], AppModule);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3646);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 5819);
/* harmony import */ var _header_with_arrow_header_with_arrow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-with-arrow/header-with-arrow.component */ 4695);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/login/login.page */ 6552);
/* harmony import */ var _product_loader_product_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-loader/product-loader.component */ 7885);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ 3995);











const routes = [
    {
        path: '',
        component: _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage
    }
];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _header_with_arrow_header_with_arrow_component__WEBPACK_IMPORTED_MODULE_2__.HeaderWithArrowComponent,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
            _product_loader_product_loader_component__WEBPACK_IMPORTED_MODULE_4__.ProductLoaderComponent,
            _product_product_component__WEBPACK_IMPORTED_MODULE_5__.ProductComponent
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
            _header_with_arrow_header_with_arrow_component__WEBPACK_IMPORTED_MODULE_2__.HeaderWithArrowComponent,
            _product_loader_product_loader_component__WEBPACK_IMPORTED_MODULE_4__.ProductLoaderComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)]
        ],
    })
], ComponentsModule);



/***/ }),

/***/ 4695:
/*!*****************************************************************************!*\
  !*** ./src/app/components/header-with-arrow/header-with-arrow.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderWithArrowComponent": () => (/* binding */ HeaderWithArrowComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_with_arrow_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-with-arrow.component.html?ngResource */ 4769);
/* harmony import */ var _header_with_arrow_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-with-arrow.component.scss?ngResource */ 7476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let HeaderWithArrowComponent = class HeaderWithArrowComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderWithArrowComponent.ctorParameters = () => [];
HeaderWithArrowComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderWithArrowComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header-with-arrow',
        template: _header_with_arrow_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_with_arrow_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderWithArrowComponent);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 5819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 2574);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 1346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/interaction.service */ 3602);







let MenuComponent = class MenuComponent {
    constructor(auth, router, interaction) {
        this.auth = auth;
        this.router = router;
        this.interaction = interaction;
    }
    ngOnInit() {
        this.userStateObserver = this.auth.userState();
        this.userStateSubscription = this.userStateObserver.subscribe(res => {
            this.isLoggedIn = !!res;
        });
    }
    logOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.auth.logout().catch(error => {
                alert('Parece haber habido un problema. Inténtelo de nuevo.');
            });
            this.interaction.presentToast('Sesión cerrada con éxito');
            this.router.navigate(['/home']);
        });
    }
    ionViewDidLeave() {
        this.userStateSubscription.unsubscribe();
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_3__.InteractionService }
];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menu',
        template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 7885:
/*!***********************************************************************!*\
  !*** ./src/app/components/product-loader/product-loader.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductLoaderComponent": () => (/* binding */ ProductLoaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-loader.component.html?ngResource */ 5985);
/* harmony import */ var _product_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-loader.component.scss?ngResource */ 1721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 4382);






let ProductLoaderComponent = class ProductLoaderComponent {
    constructor(data, db) {
        this.data = data;
        this.db = db;
        this.whatToLoad = 'all';
        this.minPrice = 0;
        this.maxPrice = 1000000;
        this.products = [];
    }
    ngOnInit() {
        this.productCollectionSubscription = this.db.readCollection('products').subscribe((elements) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.products = elements;
        }));
    }
    ngOnDestroy() {
        this.productCollectionSubscription.unsubscribe();
    }
};
ProductLoaderComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService }
];
ProductLoaderComponent.propDecorators = {
    whatToLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    minPrice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    maxPrice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ProductLoaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product-loader',
        template: _product_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductLoaderComponent);



/***/ }),

/***/ 3995:
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component.html?ngResource */ 7747);
/* harmony import */ var _product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component.scss?ngResource */ 2179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 4382);






let ProductComponent = class ProductComponent {
    constructor(data, db) {
        this.data = data;
        this.db = db;
        this.productId = '';
        this.product = this.data.getCleanProduct();
    }
    ngOnInit() {
        this.productSubscription = this.db.readDocument('products', this.productId).subscribe((productInfo) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.product = productInfo;
        }));
    }
    ngOnDestroy() {
        this.productSubscription.unsubscribe();
    }
    setId(id) {
        this.data.setProductId(id);
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService }
];
ProductComponent.propDecorators = {
    productId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ProductComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product',
        template: _product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductComponent);



/***/ }),

/***/ 6552:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/interaction.service */ 3602);








let LoginPage = class LoginPage {
    constructor(router, fb, auth, interaction) {
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.interaction = interaction;
        this.credentials = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.interaction.presentLoading('Iniciando sesión...');
            const res = yield this.auth.login(this.credentials.value.email, this.credentials.value.password)
                .catch(error => {
                this.interaction.dismissLoading();
                this.interaction.presentToast('Nombre de usuario o contraseña incorrecto');
            });
            if (res) {
                this.interaction.dismissLoading();
                this.interaction.presentToast('¡Sesión iniciada correctamente!');
                yield this.router.navigate(['/home']);
            }
        });
    }
    ionViewWillLeave() {
        this.credentials.reset();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_3__.InteractionService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);



let AuthService = class AuthService {
    constructor(authFirebase) {
        this.authFirebase = authFirebase;
        this.adminUid = '1QpnBzjOCYe6y4mAxU1I2yP47kl1';
    }
    register(data) {
        return this.authFirebase.createUserWithEmailAndPassword(data.email, data.password);
    }
    login(email, password) {
        return this.authFirebase.signInWithEmailAndPassword(email, password);
    }
    logout() {
        return this.authFirebase.signOut();
    }
    userState() {
        return this.authFirebase.authState;
    }
    getUid() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.authFirebase.currentUser;
            if (user) {
                return user.uid;
            }
            else {
                return null;
            }
        });
    }
    isAdmin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const currentUid = yield this.getUid();
            return currentUid === this.adminUid;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let DataService = class DataService {
    constructor() { }
    getCleanUser() {
        return {
            email: '',
            password: '',
            name: '',
            surname: '',
            bio: '',
            id: '',
            profile: 'regular',
            photoURL: '',
            wishlist: []
        };
    }
    getCleanProduct() {
        return {
            id: '',
            name: '',
            extendedName: '',
            description: '',
            price: 0,
            priceWithoutTax: 0,
            brand: '',
            imageUrl: '',
            category: '',
            discount: 0,
        };
    }
    setProductId(id) {
        this.productId = id;
    }
    getProductId() {
        return this.productId;
    }
    setCategory(category) {
        this.category = category;
    }
    getCategory() {
        return this.category;
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);



let DatabaseService = class DatabaseService {
    constructor(db) {
        this.db = db;
    }
    createDocument(data, path, id) {
        const collection = this.db.collection(path);
        return collection.doc(id).set(data);
    }
    readDocument(path, id) {
        const collection = this.db.collection(path);
        return collection.doc(id).valueChanges();
    }
    updateDocument(data, path, id) {
        const collection = this.db.collection(path);
        return collection.doc(id).update(data);
    }
    deleteDocument(path, id) {
        const collection = this.db.collection(path);
        return collection.doc(id).delete();
    }
    readCollection(path) {
        const collection = this.db.collection(path);
        return collection.valueChanges();
    }
    createId() {
        return this.db.createId();
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 3602:
/*!*************************************************!*\
  !*** ./src/app/services/interaction.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionService": () => (/* binding */ InteractionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let InteractionService = class InteractionService {
    constructor(toastController, loadingController) {
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    presentLoading(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: message,
            });
            yield this.loading.present();
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
};
InteractionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
InteractionService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], InteractionService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'pwm-sprint3-angular',
        appId: '1:727022632361:web:b207130f9b275c965758b8',
        storageBucket: 'pwm-sprint3-angular.appspot.com',
        apiKey: 'AIzaSyArd9Wqq2aNpP7N42AFRdQbjnEoOAL7WfA',
        authDomain: 'pwm-sprint3-angular.firebaseapp.com',
        messagingSenderId: '727022632361',
        measurementId: 'G-ZG7SE4JYZ6',
    },
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7476:
/*!******************************************************************************************!*\
  !*** ./src/app/components/header-with-arrow/header-with-arrow.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-toolbar {\n  --background: #EEA10C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci13aXRoLWFycm93LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcMyUyMC0lMjBUZXJjZXJvXFwyJTIwU2VndW5kbyUyMFNlbWVzdHJlXFw0MDk3OCUyMC0lMjBQV01cXFBXTSUyMC0lMjAlMjBTcHJpbnQlMjA0XFw0MDk3OC1QV00tU3ByaW50LTQtSW9uaWMtQW5ndWxhclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlci13aXRoLWFycm93XFxoZWFkZXItd2l0aC1hcnJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoiaGVhZGVyLXdpdGgtYXJyb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFRUExMEM7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNFRUExMEM7XG59Il19 */";

/***/ }),

/***/ 5413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1346:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1721:
/*!************************************************************************************!*\
  !*** ./src/app/components/product-loader/product-loader.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2179:
/*!**********************************************************************!*\
  !*** ./src/app/components/product/product.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#centeredMessage {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXDMlMjAtJTIwVGVyY2Vyb1xcMiUyMFNlZ3VuZG8lMjBTZW1lc3RyZVxcNDA5NzglMjAtJTIwUFdNXFxQV00lMjAtJTIwJTIwU3ByaW50JTIwNFxcNDA5NzgtUFdNLVNwcmludC00LUlvbmljLUFuZ3VsYXJcXHNyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NlbnRlcmVkTWVzc2FnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSIsIiNjZW50ZXJlZE1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <app-menu></app-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 4769:
/*!******************************************************************************************!*\
  !*** ./src/app/components/header-with-arrow/header-with-arrow.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ title }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main\">\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n";

/***/ }),

/***/ 2574:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu side=\"start\" menuId=\"main\" contentId=\"main\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item [routerLink]=\"['/']\">\r\n        <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n        <ion-label>Pagina principal</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item [routerLink]=\"['/login']\"\r\n                *ngIf=\"!isLoggedIn\">\r\n        <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\r\n        <ion-label>Iniciar Sesion</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item [routerLink]=\"['/register']\"\r\n                *ngIf=\"!isLoggedIn\">\r\n        <ion-icon name=\"person-add\" slot=\"start\"></ion-icon>\r\n        <ion-label>Registrarse</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item [routerLink]=\"['/profile']\"\r\n                *ngIf=\"isLoggedIn\">\r\n        <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n        <ion-label>Perfil</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"logOut()\"\r\n                *ngIf=\"isLoggedIn\">\r\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\r\n        <ion-label>Cerrar sesión</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>";

/***/ }),

/***/ 5985:
/*!************************************************************************************!*\
  !*** ./src/app/components/product-loader/product-loader.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"productContainer\">\n  <ng-container *ngFor=\"let product of products\">\n    <ng-container *ngIf=\"product.price >= minPrice && product.price <= maxPrice\">\n\n      <div *ngIf=\"product.category === whatToLoad\">\n        <app-product [productId]=\"product.id\"></app-product>\n      </div>\n\n      <div *ngIf=\"whatToLoad === 'all'\">\n        <app-product [productId]=\"product.id\"></app-product>\n      </div>\n\n      <div *ngIf=\"whatToLoad === 'discount' &&\n                product.discount > 10\">\n        <app-product [productId]=\"product.id\"></app-product>\n      </div>\n\n      <div *ngIf=\"whatToLoad === 'promotion' &&\n                product.discount > 30\">\n        <app-product [productId]=\"product.id\"></app-product>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>";

/***/ }),

/***/ 7747:
/*!**********************************************************************!*\
  !*** ./src/app/components/product/product.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card [routerLink]=\"['/product']\" (click)=\"setId(productId)\">\n  <img src=\"{{product.imageUrl}}\">\n  <ion-card-header>{{ product.name }}</ion-card-header>\n  <ion-card-subtitle>{{ product.price }}€</ion-card-subtitle>\n  <ion-card-content *ngIf=\"product.discount > 0\" id=\"discount\">\n    <ion-text id=\"oldPrice\">{{ product.priceWithoutTax }}€</ion-text>\n    <ion-text id=\"discountPercentage\">{{ product.discount }}%</ion-text>\n  </ion-card-content>\n</ion-card>";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-header-with-arrow [title]=\"'Iniciar sesión'\"></app-header-with-arrow>\r\n<ion-content>\r\n  <form [formGroup]=\"credentials\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\"> Correo eléctronico</ion-label>\r\n      <ion-input type=\"text\" class=\"form-control\" placeholder=\"Correo Electrónico\" formControlName=\"email\"></ion-input>\r\n      <ion-item\r\n        *ngIf=\"credentials.get('email')!.invalid && (credentials.get('email')!.dirty || credentials.get('email')!.touched)\">\r\n        <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"credentials.get('email')!.errors?.['required']\">\r\n          Campo Obligatorio\r\n        </ion-text>\r\n        <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"credentials.get('email')!.errors?.['email']\">\r\n          Debe introducir una dirección de correo electrónico\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\"> Contraseña </ion-label>\r\n      <ion-input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" formControlName=\"password\"></ion-input>\r\n      <ion-item\r\n        *ngIf=\"credentials.get('password')!.invalid && (credentials.get('password')!.dirty || credentials.get('password')!.touched)\">\r\n        <ion-text color=\"danger\" *ngIf=\"credentials.get('password')!.errors?.['required']\">\r\n          Campo Obligatorio\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" expand=\"block\">Iniciar sesión</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <hr>\r\n      <hr>\r\n      <hr>\r\n      <hr>\r\n      <ion-item>\r\n        <ion-label id=\"centeredMessage\">¿Eres nuevo?</ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button [routerLink]=\"['/register']\" expand=\"block\" color=\"danger\">\r\n        <ion-icon name=\"person-add\" slot=\"start\"></ion-icon>\r\n        <ion-label>Regístrate</ion-label>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map