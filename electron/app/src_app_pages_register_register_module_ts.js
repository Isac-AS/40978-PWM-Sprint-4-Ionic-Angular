"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 7863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/interaction.service */ 3602);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ 2468);










let RegisterPage = class RegisterPage {
    constructor(router, fb, auth, db, data, interaction) {
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.db = db;
        this.data = data;
        this.interaction = interaction;
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
            alt_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
        this.userData = this.data.getCleanUser();
    }
    ngOnInit() { }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.interaction.presentLoading('Registrando usuario...');
            this.fillUserInfo();
            const res = yield this.auth.register(this.userData).catch(error => {
                this.generateErrorMessage(error);
            });
            if (res) {
                this.userData.id = res.user.uid;
                this.userData.password = 'null';
                yield this.db.createDocument(this.userData, 'users', this.userData.id);
                this.interaction.dismissLoading();
                this.interaction.presentToast('¡Usuario registrado con éxito!');
                yield this.router.navigate(['/home']);
            }
        });
    }
    fillUserInfo() {
        this.userData.name = this.registerForm.value.username;
        this.userData.surname = this.registerForm.value.surname;
        this.userData.email = this.registerForm.value.email;
        this.userData.password = this.registerForm.value.password;
        this.userData.photoURL = "https://firebasestorage.googleapis.com/v0/b/pwm-sprint3-angular.appspot.com/o/user-pic.jpg?alt=media&token=4e4c6102-6a80-449c-ad77-e8d34b70a777";
    }
    generateErrorMessage(error) {
        switch (error.code) {
            case "auth/email-already-in-use":
                this.errorMessage = "Error: El email introducido ya está en uso";
                break;
            case "auth/internal-error":
                this.errorMessage = "Error del sistema. Inténtelo de nuevo";
                break;
            default:
                this.errorMessage = "Error desconocido. Inténtelo de nuevo";
        }
    }
    get password() {
        return this.registerForm.controls['password'];
    }
    get confirm_password() {
        return this.registerForm.controls['alt_password'];
    }
    onPasswordChange() {
        if (this.confirm_password.value === this.password.value) {
            this.confirm_password.setErrors(null);
        }
        else {
            this.confirm_password.setErrors({ mismatch: true });
        }
    }
    ionViewWillLeave() {
        this.registerForm.reset();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_4__.InteractionService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 7863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#centeredMessage {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXDMlMjAtJTIwVGVyY2Vyb1xcMiUyMFNlZ3VuZG8lMjBTZW1lc3RyZVxcNDA5NzglMjAtJTIwUFdNXFxQV00lMjAtJTIwJTIwU3ByaW50JTIwNFxcNDA5NzgtUFdNLVNwcmludC00LUlvbmljLUFuZ3VsYXJcXHNyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NlbnRlcmVkTWVzc2FnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSIsIiNjZW50ZXJlZE1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-header-with-arrow [title]=\"'Página de registro'\"></app-header-with-arrow>\r\n<ion-content>\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n  \r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Correo eléctronico</ion-label>\r\n        <ion-input type=\"text\" class=\"form-control\" placeholder=\"Correo Electrónico\" formControlName=\"email\"></ion-input>\r\n        <ion-item\r\n          *ngIf=\"registerForm.get('email')!.invalid && (registerForm.get('email')!.dirty || registerForm.get('email')!.touched)\">\r\n          <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"registerForm.get('email')!.errors?.['required']\">\r\n            Campo Obligatorio\r\n          </ion-text>\r\n          <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"registerForm.get('email')!.errors?.['email']\">\r\n            Debe introducir una dirección de correo electrónico\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" class=\"form-control\" placeholder=\"Nombre de usuario\" formControlName=\"username\"></ion-input>\r\n        <ion-item\r\n          *ngIf=\"registerForm.get('username')!.invalid && (registerForm.get('username')!.dirty || registerForm.get('username')!.touched)\">\r\n          <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"registerForm.get('username')!.errors?.['required']\">\r\n            Campo Obligatorio\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Apellido(s)</ion-label>\r\n        <ion-input type=\"text\" class=\"form-control\" placeholder=\"Nombre de usuario\" formControlName=\"surname\"></ion-input>\r\n        <ion-item\r\n          *ngIf=\"registerForm.get('surname')!.invalid && (registerForm.get('surname')!.dirty || registerForm.get('surname')!.touched)\">\r\n          <ion-text color=\"danger\" class=\"form-error\" *ngIf=\"registerForm.get('surname')!.errors?.['required']\">\r\n            Campo Obligatorio\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-item>\r\n      \r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" formControlName=\"password\"></ion-input>\r\n        <ion-item\r\n          *ngIf=\"registerForm.get('password')!.invalid && (registerForm.get('password')!.dirty || registerForm.get('password')!.touched)\">\r\n          <ion-text color=\"danger\" *ngIf=\"registerForm.get('password')!.errors?.['required']\">\r\n            Campo Obligatorio\r\n          </ion-text>\r\n          <ion-text color=\"danger\" *ngIf=\"registerForm.get('password')!.errors?.['minlength']\">\r\n            Debe tener una longitud mínima de 6 caracteres\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Repetir contraseña</ion-label>\r\n        <ion-input type=\"password\" class=\"form-control\" placeholder=\"Repetir contraseña\" formControlName=\"alt_password\" (input)=\"onPasswordChange()\"></ion-input>\r\n        <ion-item\r\n          *ngIf=\"registerForm.get('alt_password')!.invalid && (registerForm.get('alt_password')!.dirty || registerForm.get('alt_password')!.touched)\">\r\n          <ion-text color=\"danger\" *ngIf=\"confirm_password.hasError('mismatch')\">\r\n            Las contraseñas deben coincidir\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-item>\r\n  \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" expand=\"block\" color=\"danger\">Registrarse</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  \r\n    <ion-row>\r\n      <ion-col>\r\n        <hr><hr><hr><hr>\r\n        <ion-item>\r\n          <ion-label id=\"centeredMessage\">¿Ya tienes una cuenta?</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/login']\" expand=\"block\" >\r\n          <ion-icon name=\"person-add\" slot=\"start\"></ion-icon>\r\n          <ion-label>Inicia sesión</ion-label>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map