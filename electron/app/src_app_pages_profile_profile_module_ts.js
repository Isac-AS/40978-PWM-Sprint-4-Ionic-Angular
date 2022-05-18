"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 7364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 2581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/interaction.service */ 3602);
/* harmony import */ var src_app_services_fire_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fire-storage.service */ 8931);










let ProfilePage = class ProfilePage {
    constructor(fb, auth, db, data, interaction, storageService) {
        this.fb = fb;
        this.auth = auth;
        this.db = db;
        this.data = data;
        this.interaction = interaction;
        this.storageService = storageService;
        this.currentUserData = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
            bio: ['']
        });
        this.userData = this.data.getCleanUser();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.auth.getUid().then(currentUserId => {
            this.userDataSubscription = this.db.readDocument('users', currentUserId).subscribe(userData => {
                this.userData = userData;
            });
        });
    }
    updateUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.interaction.presentLoading('Modificando datos...');
            this.fillUserInfo();
            yield this.db.updateDocument(this.userData, 'users', this.userData.id);
            this.interaction.dismissLoading();
            this.interaction.presentToast('¡Datos de usuarios modificados con éxito!');
        });
    }
    fillUserInfo() {
        this.userData.name = this.currentUserData.value.username;
        this.userData.surname = this.currentUserData.value.surname;
        this.userData.bio = this.currentUserData.value.bio;
    }
    uploadProfilePicture(imageInput) {
        this.storageService.uploadFile(imageInput, 'profilePictures', this.userData.id);
        const ref = this.storageService.getRef('profilePictures/' + this.userData.id);
        ref.getDownloadURL().subscribe((url) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.userData.photoURL = yield url;
            this.db.updateDocument(this.userData, 'users', this.userData.id);
        }));
    }
    ionViewWillLeave() {
        this.currentUserData.reset();
        this.userDataSubscription.unsubscribe();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_5__.InteractionService },
    { type: src_app_services_fire_storage_service__WEBPACK_IMPORTED_MODULE_6__.FireStorageService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 8931:
/*!**************************************************!*\
  !*** ./src/app/services/fire-storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireStorageService": () => (/* binding */ FireStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);



let FireStorageService = class FireStorageService {
    constructor(storage) {
        this.storage = storage;
    }
    uploadFile(event, folder, id) {
        const file = event.target.files[0];
        const filePath = folder + '/' + id;
        const task = this.storage.upload(filePath, file);
        return task;
    }
    getRef(path) {
        return this.storage.ref(path);
    }
};
FireStorageService.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_0__.AngularFireStorage }
];
FireStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FireStorageService);



/***/ }),

/***/ 2581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: #464646;\n}\n\nion-avatar {\n  height: 100px;\n  width: 100px;\n  margin: auto;\n}\n\nion-avatar img {\n  margin-top: 2em;\n  border: 4px solid white;\n}\n\nion-title {\n  text-align: center;\n  margin-top: 10%;\n}\n\n#profilePic {\n  background-color: #EEA10C;\n  min-height: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcMyUyMC0lMjBUZXJjZXJvXFwyJTIwU2VndW5kbyUyMFNlbWVzdHJlXFw0MDk3OCUyMC0lMjBQV01cXFBXTSUyMC0lMjAlMjBTcHJpbnQlMjA0XFw0MDk3OC1QV00tU3ByaW50LTQtSW9uaWMtQW5ndWxhclxcc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUVJLGVBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0NjQ2NDY7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLWF2YXRhciBpbWcge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4jcHJvZmlsZVBpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVBMTBDO1xyXG4gICAgbWluLWhlaWdodDogMjUlO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbiNwcm9maWxlUGljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFQTEwQztcbiAgbWluLWhlaWdodDogMjUlO1xufSJdfQ== */";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-header-with-arrow [title]=\"'Perfil de ' + userData.name\"></app-header-with-arrow>\r\n\r\n<ion-content>\r\n  <div id=\"profilePic\">\r\n    <ion-input type=\"file\" id=\"files\" (change)=\"uploadProfilePicture($event)\" class=\"hidden\"></ion-input>\r\n    <ion-avatar>\r\n      <img [src]=\"userData.photoURL\">\r\n    </ion-avatar>\r\n    <ion-title>{{ userData.name }} {{ userData.surname }}</ion-title>\r\n  </div>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n    <ion-label>{{ userData.email }}</ion-label>\r\n  </ion-item>\r\n\r\n  <form [formGroup]=\"currentUserData\" (ngSubmit)=\"updateUserData()\">\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input  type=\"text\" class=\"form-control\" \r\n                  placeholder=\"Nombre de usuario\" \r\n                  formControlName=\"username\"\r\n                  [value]=\"userData.name\"></ion-input>\r\n      <ion-item\r\n        *ngIf=\"currentUserData.get('username')!.invalid && (currentUserData.get('username')!.dirty || currentUserData.get('username')!.touched)\">\r\n        <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"currentUserData.get('username')!.errors?.['required']\">\r\n          Campo Obligatorio\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Apellido(s)</ion-label>\r\n      <ion-input  type=\"text\" class=\"form-control\" \r\n                  placeholder=\"Apellidos\" \r\n                  formControlName=\"surname\"\r\n                  [value]=\"userData.surname\"></ion-input>\r\n      <ion-item\r\n        *ngIf=\"currentUserData.get('surname')!.invalid && (currentUserData.get('surname')!.dirty || currentUserData.get('surname')!.touched)\">\r\n        <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"currentUserData.get('surname')!.errors?.['required']\">\r\n          Campo Obligatorio\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Biografía</ion-label>\r\n      <ion-textarea  type=\"text\" class=\"form-control\" \r\n                  placeholder=\"Información adicional\" \r\n                  formControlName=\"bio\"\r\n                  [value]=\"userData.bio\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" expand=\"block\">Modificar datos</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map