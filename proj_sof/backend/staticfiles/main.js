(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\COAGI\Documents\Radocc\Projetos\Proj\proj_sof\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1IQR":
/*!*******************************************!*\
  !*** ./src/app/services/perda.service.ts ***!
  \*******************************************/
/*! exports provided: PerdaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerdaService", function() { return PerdaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const baseUrl = 'http://127.0.0.1:8000/api/perdas';
class PerdaService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    get(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    deleteAll() {
        return this.http.delete(baseUrl);
    }
    findByCPF(CPF) {
        return this.http.get(`${baseUrl}?cpf=${CPF}`);
    }
    checaVerac(data) {
        return this.http.post(`${baseUrl}/checaverac`, data);
    }
}
PerdaService.ɵfac = function PerdaService_Factory(t) { return new (t || PerdaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PerdaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PerdaService, factory: PerdaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerdaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8gff":
/*!****************************************************!*\
  !*** ./src/app/maps-utils/maps-utils.component.ts ***!
  \****************************************************/
/*! exports provided: MapsUtilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsUtilsComponent", function() { return MapsUtilsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MapsUtilsComponent {
    constructor() { }
    ngOnInit() {
    }
    initMap(map) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mapOptions = {
                zoom: 13,
                mapTypeId: 'hybrid',
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_LEFT,
                },
                streetViewControl: false
            };
            map.setOptions(mapOptions);
        });
    }
    geraMarker(lat, lng, map) {
        var makerInicio = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
        });
        return makerInicio;
    }
}
MapsUtilsComponent.ɵfac = function MapsUtilsComponent_Factory(t) { return new (t || MapsUtilsComponent)(); };
MapsUtilsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapsUtilsComponent, selectors: [["app-maps-utils"]], decls: 2, vars: 0, template: function MapsUtilsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "maps-utils works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMtdXRpbHMvbWFwcy11dGlscy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsUtilsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-maps-utils',
                templateUrl: './maps-utils.component.html',
                styleUrls: ['./maps-utils.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9BIU":
/*!*************************************************************!*\
  !*** ./src/app/components/add-perda/add-perda.component.ts ***!
  \*************************************************************/
/*! exports provided: AddPerdaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPerdaComponent", function() { return AddPerdaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-error/dialog-error.component */ "9cN5");
/* harmony import */ var _dialog_map_dialog_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog-map/dialog-map.component */ "cxor");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_perda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/perda.service */ "1IQR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















function AddPerdaComponent_div_3_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPerdaComponent_div_3_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.form.controls["nome"].setValue(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entra Inv\u00E1lida! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entra Inv\u00E1lida! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colheitatipo_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", colheitatipo_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", colheitatipo_r18, " ");
} }
function AddPerdaComponent_div_3_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_mat_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evento_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", evento_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", evento_r19, " ");
} }
function AddPerdaComponent_div_3_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo necess\u00E1rio! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPerdaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo Registro de Perda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddPerdaComponent_div_3_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddPerdaComponent_div_3_button_12_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddPerdaComponent_div_3_mat_error_17_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CPF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddPerdaComponent_div_3_mat_error_22_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Data da colheita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddPerdaComponent_div_3_Template_input_blur_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.checaVeracidade(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-datepicker-toggle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-datepicker", 15, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddPerdaComponent_div_3_mat_error_31_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Latitude da Localiza\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddPerdaComponent_div_3_Template_input_blur_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.checaVeracidade(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddPerdaComponent_div_3_mat_error_36_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddPerdaComponent_div_3_mat_error_37_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Longitude da Localiza\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddPerdaComponent_div_3_Template_input_blur_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.checaVeracidade(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddPerdaComponent_div_3_mat_error_42_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddPerdaComponent_div_3_mat_error_43_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tipo Colheita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AddPerdaComponent_div_3_mat_option_49_Template, 2, 2, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AddPerdaComponent_div_3_mat_error_50_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Evento Ocorrido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AddPerdaComponent_div_3_mat_option_55_Template, 2, 2, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AddPerdaComponent_div_3_mat_error_56_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPerdaComponent_div_3_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.newPerda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPerdaComponent_div_3_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.savePerda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Salvar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["nome"].hasError("required") && ctx_r0.form.controls["nome"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["nome"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r0.matcher)("email", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["email"].hasError("required") && ctx_r0.form.controls["email"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["cpf"].hasError("required") && ctx_r0.form.controls["cpf"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["colheitadata"].hasError("required") && ctx_r0.form.controls["colheitadata"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropSpecialCharacters", false)("allowNegativeNumbers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["loclat"].hasError("required") && ctx_r0.form.controls["loclat"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["loclat"].hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropSpecialCharacters", false)("allowNegativeNumbers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["loclng"].hasError("required") && ctx_r0.form.controls["loclng"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["loclng"].hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.colheitaTipos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["colheitatipo"].hasError("required") && ctx_r0.form.controls["colheitatipo"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.eventos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["eventoocorrido"].hasError("required") && ctx_r0.form.controls["eventoocorrido"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.blockRegister);
} }
function AddPerdaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registro Adicionado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPerdaComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.newPerda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Novo Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPerdaComponent_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.routeRegistro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ver Perdas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddPerdaComponent {
    constructor(router, activeRoute, perdaService, formBuilder, dialog, datepipe) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.perdaService = perdaService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.blockRegister = false;
        this.startDate = new Date();
        this.eventos = ['Chuva Excessiva',
            'Geada',
            'Granizo',
            'Seca',
            'Vendaval',
            'Raio',
        ];
        this.colheitaTipos = ['Cebola',
            'Trigo',
            'Soja',
            'Feijão',
            'Arroz',
            'Banana',
            'Tomate',
            'Mandioca',
            'Batata',
            'Milho',
            'Outra',
        ];
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)])],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            cpf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            loclat: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])],
            loclng: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])],
            colheitatipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            colheitadata: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            eventoocorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        let id = this.activeRoute.snapshot.params['id'];
        if (id != null) {
            this.form.controls['id'].setValue(id);
            this.getPerda(id);
        }
        this.form.controls['colheitadata'].valueChanges.subscribe((value) => {
            this.checaVeracidade();
        });
    }
    showOldRegister(id, latConflict, lngConflict, dist) {
        const dialogRef = this.dialog.open(_dialog_map_dialog_map_component__WEBPACK_IMPORTED_MODULE_3__["DialogMapComponent"], {
            data: {
                latCurrent: parseFloat(this.form.controls['loclat'].value),
                lngCurrent: parseFloat(this.form.controls['loclng'].value),
                latConflict: parseFloat(latConflict),
                lngConflict: parseFloat(lngConflict),
                dist: parseFloat(dist),
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.router.navigate(['/perdas'], { relativeTo: this.activeRoute });
            else
                this.blockRegister = true;
        });
    }
    getPerda(id) {
        this.perdaService.get(id).
            subscribe(data => {
            this.populaDados(data);
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    updatePerda(data) {
        this.perdaService.update(data.id, data)
            .subscribe(response => {
            console.log(response);
            console.log('O registro foi atualizado!');
            this.router.navigate(['/perdas'], { relativeTo: this.activeRoute });
            this.submitted = true;
        }, error => {
            console.log(error);
        });
    }
    populaDados(data) {
        this.form.controls['nome'].setValue(data.nome);
        this.form.controls['cpf'].setValue(data.cpf);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['loclat'].setValue(data.loclat);
        this.form.controls['loclng'].setValue(data.loclng);
        this.form.controls['eventoocorrido'].setValue(data.eventoocorrido);
        this.form.controls['colheitadata'].setValue(data.colheitadata);
        this.form.controls['colheitatipo'].setValue(data.colheitatipo);
    }
    checaVeracidade() {
        if ((this.form.controls['colheitadata'].valid) &&
            (this.form.controls['loclat'].valid) &&
            (this.form.controls['loclng'].valid)) {
            console.log('campos');
            const data = {
                colheitadata: this.datepipe.transform(this.form.controls['colheitadata'].value, 'dd/MM/yyyy'),
                loclat: this.form.controls['loclat'].value,
                loclng: this.form.controls['loclng'].value,
                id: this.form.controls['id'].value,
                nome: "",
                cpf: "",
                email: "",
                colheitatipo: "",
                eventoocorrido: "",
            };
            this.perdaService.checaVerac(data).subscribe(response => {
                console.log(response);
                if (response != null) {
                    this.showOldRegister(response.idConfl, response.loclat, response.loclng, response.dist);
                }
                else
                    this.blockRegister = false;
            }, error => {
                console.log(error);
            });
        }
    }
    savePerda() {
        if (this.form.invalid) {
            this.dialog.open(_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_2__["DialogErrorComponent"]);
            // this.showOldRegister();
            return;
        }
        this.form.disable();
        const data = {
            id: this.form.controls['id'].value,
            nome: this.form.controls['nome'].value,
            cpf: this.form.controls['cpf'].value,
            email: this.form.controls['email'].value,
            loclat: this.form.controls['loclat'].value,
            loclng: this.form.controls['loclng'].value,
            colheitatipo: this.form.controls['colheitatipo'].value,
            colheitadata: this.form.controls['colheitadata'].value,
            eventoocorrido: this.form.controls['eventoocorrido'].value,
        };
        if (data.id == null) {
            this.perdaService.create(data).subscribe(response => {
                console.log(response);
                this.submitted = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.updatePerda(data);
        }
    }
    newPerda() {
        // this.submitted = false;
        this.form.disable();
        if (this.form.controls['id'].value != null) {
            this.router.navigate(['/perdas'], { relativeTo: this.activeRoute });
        }
        else
            window.location.reload();
    }
    routeRegistro() {
        this.router.navigate(['/perdas'], { relativeTo: this.activeRoute });
    }
}
AddPerdaComponent.ɵfac = function AddPerdaComponent_Factory(t) { return new (t || AddPerdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_perda_service__WEBPACK_IMPORTED_MODULE_5__["PerdaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"])); };
AddPerdaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPerdaComponent, selectors: [["app-add-perda"]], decls: 5, vars: 3, consts: [[2, "width", "50%", "min-height", "250px", "margin", "auto"], [1, "submit-form", 2, "margin", "auto"], [3, "formGroup"], [4, "ngIf"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-evenly center"], ["fxFlex", "40", 1, "example-form-field"], ["matInput", "", "type", "text", "formControlName", "nome", "required", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutGap", "20px", "fxLayout.xs", "column"], ["type", "email", "formControlName", "email", "matInput", "", "placeholder", "Ex. pat@example.com", "required", "", 3, "errorStateMatcher", "email"], ["fxFlex", "20"], ["matInput", "", "formControlName", "cpf", "mask", "000.000.000-00", "placeholder", "Ex. 789.456.123-07", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "20px", "fxLayout.xs", "column"], ["fxFlex", "35"], ["disabled", "false"], ["matInput", "", "formControlName", "colheitadata", "ui-date-mask", "DD-MM-YYYY", "disabled", "", "required", "", 3, "matDatepicker", "blur"], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxFlex", "25"], ["matInput", "", "type", "text", "formControlName", "loclat", "mask", "separator.6", "thousandSeparator", ",", "placeholder", "Ex. -17.456789", "required", "", 3, "dropSpecialCharacters", "allowNegativeNumbers", "blur"], ["matInput", "", "formControlName", "loclng", "mask", "separator.6", "thousandSeparator", ",", "placeholder", "Ex. 34.784698", "required", "", 3, "dropSpecialCharacters", "allowNegativeNumbers", "blur"], ["fxFlex", "45"], ["formControlName", "colheitatipo", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "eventoocorrido", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "20px", "fxLayout.xs", "column", 2, "margin-right", "20px"], ["mat-button", "", 1, "btn-error", 3, "click"], ["mat-button", "", 1, "btn", 3, "disabled", "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [3, "value"], ["mat-button", "", 2, "background-color", "rgba(9,121,52,0.7287289915966386)", "color", "white", 3, "click"]], template: function AddPerdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPerdaComponent_div_3_Template, 62, 22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddPerdaComponent_div_4_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], ngx_mask__WEBPACK_IMPORTED_MODULE_12__["MaskDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXBlcmRhL2FkZC1wZXJkYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPerdaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-perda',
                templateUrl: './add-perda.component.html',
                styleUrls: ['./add-perda.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_perda_service__WEBPACK_IMPORTED_MODULE_5__["PerdaService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "9cN5":
/*!*******************************************************************!*\
  !*** ./src/app/components/dialog-error/dialog-error.component.ts ***!
  \*******************************************************************/
/*! exports provided: DialogErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogErrorComponent", function() { return DialogErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class DialogErrorComponent {
}
DialogErrorComponent.ɵfac = function DialogErrorComponent_Factory(t) { return new (t || DialogErrorComponent)(); };
DialogErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogErrorComponent, selectors: [["app-dialog-error"]], decls: 8, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayoutAlign", "end"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-error"]], template: function DialogErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registro n\u00E3o salvo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Existem Campos Inv\u00E1lidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fechar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-error',
                templateUrl: './dialog-error.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "C4Lb":
/*!*********************************************************************!*\
  !*** ./src/app/components/dialog-delete/dialog-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: DialogDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteComponent", function() { return DialogDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DialogDeleteComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
DialogDeleteComponent.ɵfac = function DialogDeleteComponent_Factory(t) { return new (t || DialogDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogDeleteComponent, selectors: [["app-dialog-delete"]], decls: 8, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-actions", "", "fxLayoutAlign", "end"], ["mat-button", "", 2, "background-color", "rgba(9,121,52,0.7287289915966386)", "color", "white", 3, "mat-dialog-close"], ["mat-button", "", 1, "btn-error", 3, "mat-dialog-close"]], template: function DialogDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tem certeza que quer apagar o registro?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "N\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nLWRlbGV0ZS9kaWFsb2ctZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-delete',
                templateUrl: './dialog-delete.component.html',
                styleUrls: ['./dialog-delete.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "FStn":
/*!*****************************************************************!*\
  !*** ./src/app/components/perdas-list/perdas-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PerdasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerdasListComponent", function() { return PerdasListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-delete/dialog-delete.component */ "C4Lb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_perda_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/perda.service */ "1IQR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/maps-utils/maps-utils.component */ "8gff");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _cpf_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../cpf.pipe */ "f2iU");

























function PerdasListComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CPF Inv\u00E1lido! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerdasListComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerdasListComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r14.nome, " ");
} }
function PerdasListComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CPF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerdasListComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "CPF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r15.cpf), " ");
} }
function PerdasListComponent_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerdasListComponent_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r16.colheitadata, "dd/MM/yyyy"), " ");
} }
function PerdasListComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tipo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerdasListComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r17.colheitatipo, " ");
} }
function PerdasListComponent_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerdasListComponent_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerdasListComponent_mat_cell_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const row_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.editPerda(row_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerdasListComponent_mat_cell_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const row_r18 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.deletePerda(row_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerdasListComponent_mat_cell_32_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const row_r18 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.viewMarker(row_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerdasListComponent_mat_header_row_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function PerdasListComponent_mat_row_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
function PerdasListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sem dados Compat\u00EDveis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PerdasListComponent {
    constructor(router, activeRoute, perdaService, dialog, formBuilder, mapUtil) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.perdaService = perdaService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.mapUtil = mapUtil;
        this.displayedColumns = ['nome', 'cpf', 'colheitadata', 'colheitatipo', 'actions'];
        this.currentIndex = -1;
        this.lat = 51.678418;
        this.lng = 7.809007;
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.markers = [];
    }
    ngAfterViewInit() {
        this.retrievePerdas();
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            cpf: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
        });
        this.form.controls['cpf'].valueChanges.subscribe((value) => {
            if (value == "")
                this.searchCPF();
        });
    }
    searchCPF() {
        if (this.form.controls['cpf'].invalid)
            return;
        const filterValue = this.form.controls['cpf'].value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    retrievePerdas() {
        this.perdaService.getAll()
            .subscribe(data => {
            this.perdas = data;
            console.log(data);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.perdas);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.geraMarkers(data);
        }, error => {
            console.log(error);
        });
    }
    refreshList() {
        this.retrievePerdas();
        this.currentPerda = null;
        this.currentIndex = -1;
    }
    setActivePerda(perda, index) {
        this.currentPerda = perda;
        this.currentIndex = index;
    }
    removeAllPerdas() {
        this.perdaService.deleteAll()
            .subscribe(response => {
            console.log(response);
            this.retrievePerdas();
        }, error => {
            console.log(error);
        });
        this.currentPerda = null;
        this.currentIndex = -1;
    }
    editPerda(data) {
        this.router.navigate(['/add', { id: data.id }]);
        console.log(data);
    }
    deletePerda(data) {
        const dialogRef = this.dialog.open(_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_2__["DialogDeleteComponent"]);
        // this.router.navigate(['/add', { id: data.id }])
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.perdaService.delete(data.id)
                    .subscribe(response => {
                    console.log(response);
                    window.location.reload();
                    // this.perdas.splice( this.perdas.findIndex(x=> x.id == data.id));
                }, error => {
                    console.log(error);
                });
            }
        });
        console.log(data);
    }
    takeMap(map) {
        this.map = map;
        this.map.setZoom(1);
        // this.teste.initMap();
    }
    geraMarkers(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let i = 0; i < data.length; i++) {
                var marker = yield this.mapUtil.geraMarker(parseFloat(data[1]['loclat']), parseFloat(data[i]['loclng']), this.map);
                this.markers.push(marker);
                this.map.panTo(marker.getPosition());
            }
        });
    }
    viewMarker(data) {
        this.map.panTo(this.markers[this.perdas.indexOf(data)].getPosition());
    }
}
PerdasListComponent.ɵfac = function PerdasListComponent_Factory(t) { return new (t || PerdasListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_perda_service__WEBPACK_IMPORTED_MODULE_8__["PerdaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_10__["MapsUtilsComponent"])); };
PerdasListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerdasListComponent, selectors: [["app-perdas-list"]], viewQuery: function PerdasListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 37, vars: 8, consts: [["fxLayoutAlign", "center start", 1, "card-perdas"], ["id", "map", 3, "latitude", "longitude", "mapReady"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "container-table"], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", 1, "container-busca"], [3, "formGroup"], ["fxFlex", "80", "fxLayout", "column", "fxLayoutGap", "20px", "fxLayout.xs", "column"], ["type", "text", "formControlName", "cpf", "matInput", "", "mask", "000.000.00-00", "placeholder", "Ex. 123.456.79-10"], [4, "ngIf"], [1, "input-group-append"], ["mat-button", "", "color", "primary", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "mat-elevation-z0"], [1, "table-perdas", 3, "dataSource"], ["matColumnDef", "nome"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "cpf"], ["matColumnDef", "colheitadata"], ["matColumnDef", "colheitatipo"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSize"], ["mat-icon-button", "", 2, "color", "rgba(9,121,52,0.7287289915966386)", 3, "click"], ["mat-icon-button", "", "color", "error", 3, "click"], ["mat-icon-button", "", "color", "error", 2, "color", "dodgerblue", 3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function PerdasListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "agm-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapReady", function PerdasListComponent_Template_agm_map_mapReady_1_listener($event) { return ctx.takeMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Registros de Perda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Busca por CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PerdasListComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerdasListComponent_Template_button_click_14_listener() { return ctx.searchCPF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PerdasListComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PerdasListComponent_mat_cell_20_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PerdasListComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PerdasListComponent_mat_cell_23_Template, 3, 3, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PerdasListComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PerdasListComponent_mat_cell_26_Template, 3, 4, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PerdasListComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PerdasListComponent_mat_cell_29_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PerdasListComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, PerdasListComponent_mat_cell_32_Template, 10, 0, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PerdasListComponent_mat_header_row_33_Template, 1, 0, "mat-header-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PerdasListComponent_mat_row_34_Template, 1, 0, "mat-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PerdasListComponent_tr_35_Template, 3, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["cpf"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 5);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmMap"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], ngx_mask__WEBPACK_IMPORTED_MODULE_16__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_cpf_pipe__WEBPACK_IMPORTED_MODULE_20__["CPFPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]], styles: ["agm-map[_ngcontent-%COMP%], #map[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n    width: 500px;\r\n}\r\n\r\n.card-perdas[_ngcontent-%COMP%] {\r\n    width: 1150px;\r\n    margin: auto;\r\n}\r\n\r\n.table-perdas[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    min-height: 300px;\r\n    border: none !important;\r\n}\r\n\r\nmat-table[_ngcontent-%COMP%] {\r\n    table-layout: fixed;\r\n}\r\n\r\nmat-header-cell[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%] {\r\n    padding-right: 7%;\r\n}\r\n\r\nmat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.container-busca[_ngcontent-%COMP%] {\r\n    align-self: flex-end;\r\n}\r\n\r\n.container-busca[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    align-self: flex-end;\r\n    margin-right: 155px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJkYXMtbGlzdC9wZXJkYXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZXJkYXMtbGlzdC9wZXJkYXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCxcclxuI21hcCB7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1wZXJkYXMge1xyXG4gICAgd2lkdGg6IDExNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLXBlcmRhcyB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtdGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3JTtcclxufVxyXG5cclxubWF0LWhlYWRlci1jZWxsLFxyXG5tYXQtY2VsbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJ1c2NhIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJ1c2NhIGgzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTU1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PerdasListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-perdas-list',
                templateUrl: './perdas-list.component.html',
                styleUrls: ['./perdas-list.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: src_app_services_perda_service__WEBPACK_IMPORTED_MODULE_8__["PerdaService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: src_app_maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_10__["MapsUtilsComponent"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [[1, "background"], [1, "bar-top"], ["fxLayoutAlign", "center start", 2, "margin-left", "2%"], [2, "margin-top", "-3px"], [1, "example-spacer"], ["fxLayoutAlign", "center end"], ["mat-button", "", "routerLink", "perdas", 1, "btn-bar-top"], ["mat-button", "", "routerLink", "add", 1, "btn-bar-top"], [1, "container", "mt-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "assessment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comunica\u00E7\u00E3o de Perda - PROAGRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Registros de Perda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Adicionar Perda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["[_ngcontent-%COMP%]:root {\r\n    --primary: hsla(135, 70%, 45%, 0.65);\r\n    --secondary: hsla(0, 0%, 100%, 0.65);\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n    \r\n    \r\n  \r\n  background: linear-gradient(0deg, rgba(0,36,17,1) 0%, rgba(9,121,52,0.2) 35%, rgba(255,255,255,1) 100%), url('img_lavoura.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  --webkit-background-size: cover;\r\n  text-align: center;\r\n  height: 100vh;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.bar-top[_ngcontent-%COMP%]{\r\n  margin-bottom: 50px;\r\n  background-color:rgba(9,121,52,0.7287289915966386);\r\n  color: white;\r\n}\r\n\r\n.btn-bar-top[_ngcontent-%COMP%]{\r\n  \r\n  background-color:rgba(9,121,52,0.75);\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCOzZDQUN5QztFQUMzQyw4QkFBOEI7RUFDOUIsK0hBQWdKO0VBQ2hKLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsWUFBWTtBQUNkOztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0tcHJpbWFyeTogaHNsYSgxMzUsIDcwJSwgNDUlLCAwLjY1KTtcclxuICAgIC0tc2Vjb25kYXJ5OiBoc2xhKDAsIDAlLCAxMDAlLCAwLjY1KTtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgLyogYmFja2dyb3VuZDogICovXHJcbiAgICAvKiBsaW5lYXItZ3JhZGllbnQoIHZhcigtLXByaW1hcnkpLCB2YXIoLS1zZWNvbmRhcnkpKSxcclxuICB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Rlc3RlLmpwZykgOyAqL1xyXG4gIC8qIGJhY2tncm91bmQ6IHJnYigwLDM2LDE3KTsgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDM2LDE3LDEpIDAlLCByZ2JhKDksMTIxLDUyLDAuMikgMzUlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpLCB1cmwoLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19sYXZvdXJhLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmJhci10b3B7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoOSwxMjEsNTIsMC43Mjg3Mjg5OTE1OTY2Mzg2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1iYXItdG9we1xyXG4gIC8qIGJvcmRlcjogMC41cHggc29saWQgd2hpdGU7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDksMTIxLDUyLDAuNzUpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_add_perda_add_perda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-perda/add-perda.component */ "9BIU");
/* harmony import */ var _components_perdas_list_perdas_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/perdas-list/perdas-list.component */ "FStn");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dialog-error/dialog-error.component */ "9cN5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_dialog_map_dialog_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dialog-map/dialog-map.component */ "cxor");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _components_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dialog-delete/dialog-delete.component */ "C4Lb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _components_cpf_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/cpf.pipe */ "f2iU");
/* harmony import */ var _maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./maps-utils/maps-utils.component */ "8gff");




































Object(_angular_common__WEBPACK_IMPORTED_MODULE_18__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_19___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' }, _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_30__["MapsUtilsComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBcWwZUp2n5usm0Ae4_DJfQ30L3sCtBzko'
            })
        ], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_add_perda_add_perda_component__WEBPACK_IMPORTED_MODULE_7__["AddPerdaComponent"],
        _components_perdas_list_perdas_list_component__WEBPACK_IMPORTED_MODULE_8__["PerdasListComponent"],
        _components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_21__["DialogErrorComponent"],
        _components_dialog_map_dialog_map_component__WEBPACK_IMPORTED_MODULE_23__["DialogMapComponent"],
        _components_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_27__["DialogDeleteComponent"],
        _components_cpf_pipe__WEBPACK_IMPORTED_MODULE_29__["CPFPipe"],
        _maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_30__["MapsUtilsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"], _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"]], exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_add_perda_add_perda_component__WEBPACK_IMPORTED_MODULE_7__["AddPerdaComponent"],
                    _components_perdas_list_perdas_list_component__WEBPACK_IMPORTED_MODULE_8__["PerdasListComponent"],
                    _components_dialog_error_dialog_error_component__WEBPACK_IMPORTED_MODULE_21__["DialogErrorComponent"],
                    _components_dialog_map_dialog_map_component__WEBPACK_IMPORTED_MODULE_23__["DialogMapComponent"],
                    _components_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_27__["DialogDeleteComponent"],
                    _components_cpf_pipe__WEBPACK_IMPORTED_MODULE_29__["CPFPipe"],
                    _maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_30__["MapsUtilsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(),
                    _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyBcWwZUp2n5usm0Ae4_DJfQ30L3sCtBzko'
                    })
                ],
                exports: [
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' }, _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _maps_utils_maps_utils_component__WEBPACK_IMPORTED_MODULE_30__["MapsUtilsComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cxor":
/*!***************************************************************!*\
  !*** ./src/app/components/dialog-map/dialog-map.component.ts ***!
  \***************************************************************/
/*! exports provided: DialogMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMapComponent", function() { return DialogMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");








class DialogMapComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ngOnInit() {
        // this.initMap()
    }
    takeMap(map) {
        this.map = map;
        this.initMap();
    }
    readRegistro() {
        window.open(`/add/${this.data.id}`);
    }
    initMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dist = parseFloat(this.data.dist.toFixed(3));
            let mapOptions = {
                zoom: 13,
                mapTypeId: 'hybrid',
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_LEFT,
                },
                streetViewControl: false
            };
            this.map.setOptions(mapOptions);
            this.makerRegistroOld = yield this.geraMarker(this.data.latConflict, this.data.lngConflict);
            // this.makerRegistroOld = await this.geraMarker(51.678418, 7.456789);
            this.makerRegistroOld.setMap(this.map);
            // this.map.panTo(this.makerRegistroOld.getPosition());
            this.poly = yield this.initLinha();
            this.poly.setMap(this.map);
            this.poly.getPath().push(this.makerRegistroOld.getPosition());
            this.makerRegistroCurrent = yield this.geraMarker(this.data.latCurrent, this.data.lngCurrent);
            // this.makerRegistroCurrent = await this.geraMarker(52.456789, 9.478596);
            this.makerRegistroCurrent.setMap(this.map);
            this.makerRegistroCurrent.setOpacity(0.5);
            this.poly.getPath().push(this.makerRegistroCurrent.getPosition());
            // this.map.panTo(this.makerRegistroCurrent.getPosition());
            this.map.panTo(this.retornaCentro(this.poly));
            this.centralizaLinha(this.poly);
        });
    }
    geraMarker(lat, lng) {
        var makerInicio = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.map,
        });
        return makerInicio;
    }
    initLinha() {
        var poly = new google.maps.Polyline({
            strokeColor: '#4285F4',
            strokeWeight: 5,
            strokeOpacity: 1,
            editable: false,
        });
        return poly;
    }
    centralizaLinha(poly) {
        let bounds = new google.maps.LatLngBounds();
        for (let i = 0; i < poly.getPath().getLength(); i++)
            bounds.extend(poly.getPath().getAt(i));
        this.map.fitBounds(bounds);
    }
    retornaCentro(poly) {
        let bounds = new google.maps.LatLngBounds();
        for (let i = 0; i < this.poly.getPath().getLength(); i++)
            bounds.extend(this.poly.getPath().getAt(i));
        return bounds.getCenter();
    }
}
DialogMapComponent.ɵfac = function DialogMapComponent_Factory(t) { return new (t || DialogMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
DialogMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogMapComponent, selectors: [["app-dialog-map"]], decls: 19, vars: 5, consts: [["mat-dialog-title", ""], ["mat-button", "", 1, "read-register", 3, "click"], ["id", "map", 3, "latitude", "longitude", "mapReady"], ["align", "end"], ["fxLayoutAlign", "end", "mat-button", "", 1, "btn-error", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 1, "btn", 3, "mat-dialog-close"]], template: function DialogMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Registro Conflitante");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Existe um registro(em destaque) a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " kms de dist\u00E2ncia da localiza\u00E7\u00E3o inserida nesse novo registro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Voc\u00EA pode cancelar ou alterar os dados desse novo registro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogMapComponent_Template_button_click_11_listener() { return ctx.readRegistro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ver Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "agm-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapReady", function DialogMapComponent_Template_agm_map_mapReady_13_listener($event) { return ctx.takeMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancelar Novo Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Alterar Dados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: ["agm-map[_ngcontent-%COMP%], #map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    width: 500px;\r\n    \r\n}\r\n\r\n.mat-dialog-title[_ngcontent-%COMP%] {\r\n    margin-left: 22px;\r\n}\r\n\r\n.mat-dialog-content[_ngcontent-%COMP%] {\r\n    margin: 0px 0px;\r\n    width: 600px;\r\n    text-align: -webkit-center;\r\n}\r\n\r\n.mat-dialog-actions[align=end][_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  margin-right: 70px;\r\n}\r\n\r\nagm-map-container-inner[_ngcontent-%COMP%] {\r\n    border: 3px solid #707070;\r\n    border-radius: 10px;\r\n}\r\n\r\n.read-register[_ngcontent-%COMP%] {\r\n    margin-left: 23px;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2ctbWFwL2RpYWxvZy1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2ctbWFwL2RpYWxvZy1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAsXHJcbiNtYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxufVxyXG5cclxuLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnNbYWxpZ249ZW5kXSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucmVhZC1yZWdpc3RlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dialog-map',
                templateUrl: './dialog-map.component.html',
                styleUrls: ['./dialog-map.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "f2iU":
/*!****************************************!*\
  !*** ./src/app/components/cpf.pipe.ts ***!
  \****************************************/
/*! exports provided: CPFPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPFPipe", function() { return CPFPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CPFPipe {
    transform(value, ...args) {
        if (value.length === 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
        }
        return 'error';
    }
}
CPFPipe.ɵfac = function CPFPipe_Factory(t) { return new (t || CPFPipe)(); };
CPFPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "CPF", type: CPFPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CPFPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'CPF'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_add_perda_add_perda_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-perda/add-perda.component */ "9BIU");
/* harmony import */ var _components_perdas_list_perdas_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/perdas-list/perdas-list.component */ "FStn");






const routes = [
    { path: '', redirectTo: 'perdas', pathMatch: 'full' },
    { path: 'perdas', component: _components_perdas_list_perdas_list_component__WEBPACK_IMPORTED_MODULE_3__["PerdasListComponent"] },
    { path: 'add', component: _components_add_perda_add_perda_component__WEBPACK_IMPORTED_MODULE_2__["AddPerdaComponent"] },
    { path: 'add/:id', component: _components_add_perda_add_perda_component__WEBPACK_IMPORTED_MODULE_2__["AddPerdaComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map