"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product_product_module_ts"],{

/***/ 4577:
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageRoutingModule": () => (/* binding */ ProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page */ 2102);




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ 5888:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageModule": () => (/* binding */ ProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 4577);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page */ 2102);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ProductPageModule = class ProductPageModule {
};
ProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_1__.ProductPage]
    })
], ProductPageModule);



/***/ }),

/***/ 2102:
/*!***********************************************!*\
  !*** ./src/app/pages/product/product.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page.html?ngResource */ 8493);
/* harmony import */ var _product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page.scss?ngResource */ 6120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var src_app_services_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/list.service */ 7137);








let ProductPage = class ProductPage {
    constructor(auth, db, data, list) {
        this.auth = auth;
        this.db = db;
        this.data = data;
        this.list = list;
        this.product = this.data.getCleanProduct();
        this.userData = this.data.getCleanUser();
        this.productId = this.data.getProductId();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getProductSubscription();
        this.userSubscription();
    }
    getProductSubscription() {
        this.productSubscription = this.db.readDocument('products', this.productId).subscribe((product) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.product = product;
        }));
    }
    userSubscription() {
        this.auth.getUid().then(currentUserId => {
            this.userDataSubscription = this.db.readDocument('users', currentUserId).subscribe(userData => {
                this.userData = userData;
            });
        });
    }
    ionViewWillLeave() {
        this.productSubscription.unsubscribe();
        this.userDataSubscription.unsubscribe();
    }
    addToWishlist(productId) {
        this.list.addToWishlist(productId, this.userData);
    }
    removeFromWishlist(productId) {
        this.list.removeFromWishList(productId, this.userData);
    }
    isInWishlist(productId) {
        return this.list.isInWishlist(this.userData.wishlist, productId);
    }
};
ProductPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_list_service__WEBPACK_IMPORTED_MODULE_5__.ListService }
];
ProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product',
        template: _product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductPage);



/***/ }),

/***/ 7137:
/*!******************************************!*\
  !*** ./src/app/services/list.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListService": () => (/* binding */ ListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.service */ 4382);



let ListService = class ListService {
    constructor(db) {
        this.db = db;
    }
    isInWishlist(wishlist, productId) {
        return wishlist.indexOf(productId) > -1;
    }
    addToWishlist(productId, user) {
        if (!this.isInWishlist(user.wishlist, productId)) {
            user.wishlist.push(productId);
            this.db.updateDocument(user, 'users', user.id);
        }
    }
    removeFromWishList(productId, user) {
        user.wishlist.forEach((value, index) => {
            if (value === productId) {
                user.wishlist.splice(index, 1);
            }
        });
        this.db.updateDocument(user, 'users', user.id);
    }
};
ListService.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService }
];
ListService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ListService);



/***/ }),

/***/ 6120:
/*!************************************************************!*\
  !*** ./src/app/pages/product/product.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8493:
/*!************************************************************!*\
  !*** ./src/app/pages/product/product.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-header-with-arrow [title]=\"product.name\"></app-header-with-arrow>\n\n<ion-content>\n    <ion-card>\n        <img src=\"{{product.imageUrl}}\">\n        <ion-card-header>{{ product.name }}</ion-card-header>\n        <ion-card-subtitle>{{ product.price }}€</ion-card-subtitle>\n        <ion-card-content *ngIf=\"product.discount > 0\" id=\"discount\">\n          <ion-text id=\"oldPrice\">{{ product.priceWithoutTax }}€</ion-text>\n          <ion-text id=\"discountPercentage\">{{ product.discount }}%</ion-text>\n        </ion-card-content>\n      </ion-card>\n      <ion-item *ngIf=\"!isInWishlist(product.id)\" (click)=\"addToWishlist(product.id)\">\n        <ion-icon name=\"star-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Añadir a la lista de deseos</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"isInWishlist(product.id)\" (click)=\"removeFromWishlist(product.id)\">\n        <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n        <ion-label>Eliminar de la lista de deseos</ion-label>\n      </ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_product_module_ts.js.map