webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsBeerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailsBeerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsBeerPage = /** @class */ (function () {
    function DetailsBeerPage(navCtrl, navParams, viewCtrl, restProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.menu = this.navParams.get('itemMenu');
        this.items =
            [
                {
                    "id": "1",
                    "name": "Coca Cola - 1 lt",
                    "price": "07,00"
                },
                {
                    "id": "2",
                    "name": "Coca Cola - 2 lt",
                    "price": "07,00"
                },
                {
                    "id": "3",
                    "name": "Pepsi Cola - 1 lt",
                    "price": "07,00"
                },
                {
                    "id": "4",
                    "name": "Pepsi Cola - 2 lt",
                    "price": "07,00"
                }
            ];
    }
    DetailsBeerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsBeerPage');
    };
    DetailsBeerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailsBeerPage.prototype.check = function (id) {
    };
    //confirmar exclusão de item
    DetailsBeerPage.prototype.dialogRemoveItem = function (item) {
        var alert = this.alertCtrl.create({
            title: 'Atenção',
            message: '<span text-center>Deseja remover o item <br><b>' + item.name + '</b> ? </span>',
            buttons: [{
                    text: 'Sim',
                    handler: function () {
                    }
                },
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        alert.present();
    };
    DetailsBeerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details-beer',template:/*ion-inline-start:"/projects/PizzApp/src/pages/details-beer/details-beer.html"*/'<!--\n  Generated template for the DetailsMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar no-border>\n    <ion-item>\n      <ion-icon name="pint" color=\'yellowgold\' start></ion-icon>\n      {{menu.name}}\n\n\n\n    </ion-item>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="main">\n\n\n  <!-- ITEM QUE SERÁ EXIBIDO NA LISTA DE INGREDIENTES -->\n    <ion-list>\n      <ion-item clear color=\'danger\' *ngFor="let item of items">\n\n\n            <ion-label>{{item.name}}</ion-label>\n\n            <ion-avatar item-end>\n              <img src="https://static.carrefour.com.br/medias/sys_master/images/images/h5d/h1b/h00/h00/9586634391582.jpg"/>\n            </ion-avatar>\n            <h2>Cher</h2>\n            <p>Ugh. As if.</p>\n\n            <ion-input type="number" placeholder="Number Input with no label" item-start></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n<!-- botão de adicionar Removido\n    <ion-fab bottom right>\n       <button ion-fab color=\'yellowgold\'>\n         <ion-icon name="add" color=\'danger\'></ion-icon>\n       </button>\n     </ion-fab>\n-->\n    </ion-content>\n\n     <ion-footer no-border  Color="secondary">\n       <ion-toolbar  Color="primary">\n         <ion-item>\n            <button ion-button clear item-end>\n               <ion-icon name="cart" color="secondary"></ion-icon>\n               Adicionar ao Pedido\n            </button>\n            <button ion-button (click)="dismiss()" clear item-start>\n              <span ion-text>Voltar</span>\n            </button>\n         </ion-item>\n        </ion-toolbar>\n      </ion-footer>\n'/*ion-inline-end:"/projects/PizzApp/src/pages/details-beer/details-beer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailsBeerPage);
    return DetailsBeerPage;
}());

//# sourceMappingURL=details-beer.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsMenuPage = /** @class */ (function () {
    function DetailsMenuPage(navCtrl, navParams, viewCtrl, restProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.menu = this.navParams.get('itemMenu');
        this.items =
            [{
                    "id": "1",
                    "name": "Borda de Catupiry"
                },
                {
                    "id": "2",
                    "name": "Molho de Tomate"
                },
                {
                    "id": "3",
                    "name": "Queijo Mussarela"
                },
                {
                    "id": "4",
                    "name": "Presunto"
                },
                {
                    "id": "5",
                    "name": "Linguiça Calabresa"
                },
                {
                    "id": "6",
                    "name": "Pimenta Calabresa"
                },
                {
                    "id": "7",
                    "name": "Orégano"
                }
            ];
    }
    DetailsMenuPage.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (el) { return el.id !== id; });
    };
    DetailsMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsMenuPage');
    };
    //Botão voltar
    DetailsMenuPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //confirmar exclusão de item
    DetailsMenuPage.prototype.dialogRemoveItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atenção',
            message: '<span text-center>Deseja remover o item <br><b>' + item.name + '</b> ? </span>',
            buttons: [{
                    text: 'Sim',
                    handler: function () {
                        _this.removeItem(item.id);
                    }
                },
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        alert.present();
    };
    DetailsMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details-menu',template:/*ion-inline-start:"/projects/PizzApp/src/pages/details-menu/details-menu.html"*/'<!--\n  Generated template for the DetailsMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar no-border>\n    <ion-item>\n      <ion-icon name="pizza" color=\'danger\' start></ion-icon>\n      {{menu.name}}\n      <ion-badge item-end block color="secondary">\n      <b>  R$ 50,00</b>\n      </ion-badge>\n    <!-- 5 estrelas -->\n\n        <div  class="card-subtitle"  *ngIf="menu.rate==5" item-end>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n        </div>\n        <!-- 4 estrelas -->\n        <div class="card-subtitle" *ngIf="menu.rate==4" item-end>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n        </div>\n\n        <!-- 3 estrelas -->\n        <div class="card-subtitle" *ngIf="menu.rate==3" item-end>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n        </div>\n\n        <!-- 2 estrelas -->\n        <div class="card-subtitle" *ngIf="menu.rate==2" item-end>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="danger"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n        </div>\n\n        <!-- 1 estrelas -->\n        <div class="card-subtitle" *ngIf="menu.rate==1" item-end>\n          <ion-icon name="star" color="danger"></ion-icon>\n        </div>\n\n        <!-- 0 estrelas -->\n        <div class="card-subtitle" *ngIf="menu.rate==0" item-end>\n          <ion-icon name="star" color="light"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n          <ion-icon name="star" color="light"></ion-icon>\n        </div>\n\n    </ion-item>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="main">\n\n\n  <!-- ITEM QUE SERÁ EXIBIDO NA LISTA DE INGREDIENTES -->\n    <ion-list>\n      <ion-item clear color=\'danger\' *ngFor="let item of items" >\n           <ion-checkbox [(ngModel)]="item.id" checked="true"  (ionChange)="dialogRemoveItem(item)"></ion-checkbox>\n\n            <ion-label>{{item.name}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n<!-- botão de adicionar Removido\n    <ion-fab bottom right>\n       <button ion-fab color=\'yellowgold\'>\n         <ion-icon name="add" color=\'danger\'></ion-icon>\n       </button>\n     </ion-fab>\n-->\n    </ion-content>\n\n     <ion-footer no-border  Color="secondary">\n       <ion-toolbar  Color="primary">\n         <ion-item>\n            <button ion-button clear item-end>\n               <ion-icon name="cart" color="secondary"></ion-icon>\n               Adicionar ao Pedido\n            </button>\n            <button ion-button (click)="dismiss()" clear item-start>\n              <span ion-text>Voltar</span>\n            </button>\n         </ion-item>\n        </ion-toolbar>\n      </ion-footer>\n'/*ion-inline-end:"/projects/PizzApp/src/pages/details-menu/details-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailsMenuPage);
    return DetailsMenuPage;
}());

//# sourceMappingURL=details-menu.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListOptionsMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options_menu_tab_options_menu_tab__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options_beer_tab_options_beer_tab__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options_cart_tab_options_cart_tab__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListOptionsMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListOptionsMenuPage = /** @class */ (function () {
    function ListOptionsMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__options_menu_tab_options_menu_tab__["a" /* OptionsMenuTabPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__options_beer_tab_options_beer_tab__["a" /* OptionsBeerTabPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__options_cart_tab_options_cart_tab__["a" /* OptionsCartTabPage */];
    }
    ListOptionsMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListOptionsMenuPage');
    };
    ListOptionsMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-options-menu',template:/*ion-inline-start:"/projects/PizzApp/src/pages/list-options-menu/list-options-menu.html"*/'\n\n<ion-content class="main">\n\n  <ion-tabs tabs-only selectedIndex="0" color="danger">\n    <ion-tab [root]="tab1Root" tabTitle="Cardápio" tabIcon="pizza" ></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Bebidas" tabIcon="pint" ></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Pedidos" tabIcon="cart" tabBadge="2" tabBadgeStyle="danger"></ion-tab>\n  </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/projects/PizzApp/src/pages/list-options-menu/list-options-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListOptionsMenuPage);
    return ListOptionsMenuPage;
}());

//# sourceMappingURL=list-options-menu.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsMenuTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_menu_details_menu__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OptionsMenuTabPage = /** @class */ (function () {
    function OptionsMenuTabPage(navCtrl, navParams, restProvider, loadingCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.descending = true;
        this.column = 'rate';
        this.presentLoading();
        this.getMenus();
        this.sort();
    }
    OptionsMenuTabPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    OptionsMenuTabPage.prototype.presentConfirm = function (menu) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Informação',
            message: 'Aqui você poderá modificar e ver os ingredientes ou somente adicionar este item ao seu pedido! aproveite!',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Adic.Pedido',
                    handler: function () {
                        _this.presentModal(menu);
                    }
                }
            ]
        });
        alert.present();
    };
    OptionsMenuTabPage.prototype.presentModal = function (itemMenu) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__details_menu_details_menu__["a" /* DetailsMenuPage */], itemMenu);
        modal.present();
    };
    OptionsMenuTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsMenuTabPage');
        this.presentLoading();
        this.getMenus();
        this.sort();
    };
    OptionsMenuTabPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
            duration: 3000
        });
        loader.present();
    };
    OptionsMenuTabPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.getMenus();
            refresher.complete();
        }, 2000);
    };
    OptionsMenuTabPage.prototype.getMenus = function () {
        var _this = this;
        this.restProvider.getData('/menus')
            .then(function (data) {
            _this.menus = data;
            console.log(_this.menus);
        });
    };
    OptionsMenuTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-options-menu-tab',template:/*ion-inline-start:"/projects/PizzApp/src/pages/options-menu-tab/options-menu-tab.html"*/'<!-- FUTURAMENTE\nDEVERÁ TER A OPÇÃO DE CONVIDAR SEUS AMIGOS VIA WHATSAPP, ONDE SERÁ ENVIADO\nUM LINK PARA ABRIR O APP, E ENTRAR NO GRUPO DE PIZZA DE AMIGOS, CONFIRMANDO SUA\nPRESENÇA E COM BASE NA QUANTIDADE DE PESSOAS, O APP SUGERIR A QUANTIDADE\nA SER COMPRADA! -->\n\n<ion-header text-center color="danger" >\n  <ion-navbar color="danger">\n\n    <ion-buttons start>\n    <img src="assets/imgs/logo.png" style="width:32px" item-start>\n    </ion-buttons>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-searchbar placeholder="Buscar" [(ngModel)]="terms" [showCancelButton]="shouldShowCancel" item-start small></ion-searchbar>\n\n  </ion-navbar>\n</ion-header>\n\n  <ion-content class="main card-background-page" id="mycontent" >\n     <ion-refresher (ionRefresh)="doRefresh($event)" color="light" >\n       <ion-refresher-content pullingIcon="arrow-dropdown"\n      pullingText="Atualizar"\n      refreshingSpinner="dots"\n      refreshingText="Atualizando..."></ion-refresher-content>\n     </ion-refresher>\n\n    <ion-card *ngFor="let menu of menus | search: terms | sort: {property: column, order: order}"   (click)="presentModal({itemMenu: menu})">\n\n        <img src="{{restProvider.urlServer}}/{{menu.image.path}}"  />\n\n\n      <div class="card-title"> {{menu.name}} </div>\n\n      <!-- 5 estrelas -->\n      <div  class="card-subtitle"  *ngIf="menu.rate==5" item-end>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n      </div>\n      <!-- 4 estrelas -->\n      <div class="card-subtitle" *ngIf="menu.rate==4" item-end>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n      </div>\n\n      <!-- 3 estrelas -->\n      <div class="card-subtitle" *ngIf="menu.rate==3" item-end>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n      </div>\n\n      <!-- 2 estrelas -->\n      <div class="card-subtitle" *ngIf="menu.rate==2" item-end>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="yellow"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n      </div>\n\n      <!-- 1 estrelas -->\n      <div class="card-subtitle" *ngIf="menu.rate==1" item-end>\n        <ion-icon name="star" color="yellow"></ion-icon>\n      </div>\n\n      <!-- 0 estrelas -->\n      <div class="card-subtitle" *ngIf="menu.rate==0" item-end>\n        <ion-icon name="star" color="light"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n        <ion-icon name="star" color="light"></ion-icon>\n      </div>\n\n      <ion-item text-center color=\'yellowgold\'>\n        <b>R$ 50,00</b>\n      </ion-item>\n     </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/projects/PizzApp/src/pages/options-menu-tab/options-menu-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OptionsMenuTabPage);
    return OptionsMenuTabPage;
}());

//# sourceMappingURL=options-menu-tab.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsBeerTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_beer_details_beer__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OptionsBeerTabPage = /** @class */ (function () {
    function OptionsBeerTabPage(navCtrl, navParams, restProvider, loadingCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.descending = true;
        this.column = 'name';
        this.presentLoading();
        this.getMenus();
        this.sort();
    }
    OptionsBeerTabPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    OptionsBeerTabPage.prototype.presentConfirm = function (menu) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Informação',
            message: 'Aqui você poderá modificar e ver os ingredientes ou somente adicionar este item ao seu pedido! aproveite!',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Adic.Pedido',
                    handler: function () {
                        _this.presentModal(menu);
                    }
                }
            ]
        });
        alert.present();
    };
    OptionsBeerTabPage.prototype.presentModal = function (itemMenu) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__details_beer_details_beer__["a" /* DetailsBeerPage */], itemMenu);
        modal.present();
    };
    OptionsBeerTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsMenuTabPage');
    };
    OptionsBeerTabPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
            duration: 3000
        });
        loader.present();
    };
    OptionsBeerTabPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.getMenus();
            refresher.complete();
        }, 2000);
    };
    OptionsBeerTabPage.prototype.getMenus = function () {
        var _this = this;
        this.restProvider.getData('/beers')
            .then(function (data) {
            _this.menus = data;
            console.log(_this.menus);
        });
    };
    OptionsBeerTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-options-beer-tab',template:/*ion-inline-start:"/projects/PizzApp/src/pages/options-beer-tab/options-beer-tab.html"*/'<!-- FUTURAMENTE\nDEVERÁ TER A OPÇÃO DE CONVIDAR SEUS AMIGOS VIA WHATSAPP, ONDE SERÁ ENVIADO\nUM LINK PARA ABRIR O APP, E ENTRAR NO GRUPO DE PIZZA DE AMIGOS, CONFIRMANDO SUA\nPRESENÇA E COM BASE NA QUANTIDADE DE PESSOAS, O APP SUGERIR A QUANTIDADE\nA SER COMPRADA! -->\n\n<ion-header text-center color="danger" >\n  <ion-navbar color="danger">\n\n    <ion-buttons start>\n    <img src="assets/imgs/logo.png" style="width:32px" item-start>\n    </ion-buttons>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-searchbar placeholder="Buscar" [(ngModel)]="terms" [showCancelButton]="shouldShowCancel" item-start small></ion-searchbar>\n\n  </ion-navbar>\n</ion-header>\n\n  <ion-content class="main card-background-page" id="mycontent" >\n     <ion-refresher (ionRefresh)="doRefresh($event)" color="light" >\n       <ion-refresher-content pullingIcon="arrow-dropdown"\n      pullingText="Atualizar"\n      refreshingSpinner="dots"\n      refreshingText="Atualizando..."></ion-refresher-content>\n     </ion-refresher>\n\n    <ion-card *ngFor="let menu of menus | search: terms |  sort: {property: column, order: order}"  (click)="presentModal({itemMenu: menu})">\n\n        <img src="{{restProvider.urlServer}}/{{menu.image.path}}"  />\n\n        <div class="card-title"> {{menu.name}} </div>\n\n      <ion-item text-center color=\'yellowgold\'>\n        <b>R$ 50,00</b>\n      </ion-item>\n     </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/projects/PizzApp/src/pages/options-beer-tab/options-beer-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OptionsBeerTabPage);
    return OptionsBeerTabPage;
}());

//# sourceMappingURL=options-beer-tab.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsCartTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OptionsCartTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionsCartTabPage = /** @class */ (function () {
    function OptionsCartTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OptionsCartTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsCartTabPage');
    };
    OptionsCartTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-options-cart-tab',template:/*ion-inline-start:"/projects/PizzApp/src/pages/options-cart-tab/options-cart-tab.html"*/'<!--\n  Generated template for the OptionsCartTabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="main" padding >\nLista dos itens do pedido\n</ion-content>\n'/*ion-inline-end:"/projects/PizzApp/src/pages/options-cart-tab/options-cart-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OptionsCartTabPage);
    return OptionsCartTabPage;
}());

//# sourceMappingURL=options-cart-tab.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_options_menu_list_options_menu__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.login();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.presentLoading();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "BR",
            facebookNotificationsEnabled: true
        }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_options_menu_list_options_menu__["a" /* ListOptionsMenuPage */]);
            });
        }, function (err) {
            alert(err);
        });
    };
    LoginPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
            duration: 3000
        });
        loader.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/projects/PizzApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding class="main">\n<img src="/assets/imgs/logo.png" padding>\n\n</ion-content>\n'/*ion-inline-end:"/projects/PizzApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details-beer/details-beer.module": [
		287,
		7
	],
	"../pages/details-menu/details-menu.module": [
		288,
		6
	],
	"../pages/home/home.module": [
		289,
		0
	],
	"../pages/list-options-menu/list-options-menu.module": [
		290,
		5
	],
	"../pages/login/login.module": [
		291,
		4
	],
	"../pages/options-beer-tab/options-beer-tab.module": [
		292,
		3
	],
	"../pages/options-cart-tab/options-cart-tab.module": [
		293,
		2
	],
	"../pages/options-menu-tab/options-menu-tab.module": [
		294,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_options_menu_list_options_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_options_menu_tab_options_menu_tab__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_options_beer_tab_options_beer_tab__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_options_cart_tab_options_cart_tab__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_details_menu_details_menu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_details_beer_details_beer__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_search_search__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_sort_sort__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_brmasker_ionic_3__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_rest_rest__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_options_menu_list_options_menu__["a" /* ListOptionsMenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_options_menu_tab_options_menu_tab__["a" /* OptionsMenuTabPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_options_beer_tab_options_beer_tab__["a" /* OptionsBeerTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_options_cart_tab_options_cart_tab__["a" /* OptionsCartTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_details_menu_details_menu__["a" /* DetailsMenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_beer_details_beer__["a" /* DetailsBeerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details-beer/details-beer.module#DetailsBeerPageModule', name: 'DetailsBeerPage', segment: 'details-beer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-menu/details-menu.module#DetailsMenuPageModule', name: 'DetailsMenuPage', segment: 'details-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-options-menu/list-options-menu.module#ListOptionsMenuPageModule', name: 'ListOptionsMenuPage', segment: 'list-options-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options-beer-tab/options-beer-tab.module#OptionsBeerTabPageModule', name: 'OptionsBeerTabPage', segment: 'options-beer-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options-cart-tab/options-cart-tab.module#OptionsCartTabPageModule', name: 'OptionsCartTabPage', segment: 'options-cart-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options-menu-tab/options-menu-tab.module#OptionsMenuTabPageModule', name: 'OptionsMenuTabPage', segment: 'options-menu-tab', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_options_menu_list_options_menu__["a" /* ListOptionsMenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_options_menu_tab_options_menu_tab__["a" /* OptionsMenuTabPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_options_beer_tab_options_beer_tab__["a" /* OptionsBeerTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_options_cart_tab_options_cart_tab__["a" /* OptionsCartTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_details_menu_details_menu__["a" /* DetailsMenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_beer_details_beer__["a" /* DetailsBeerPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //  splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/projects/PizzApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/projects/PizzApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
  
    transform(value: string, ...args) {
      return value.toLowerCase();
    }*/
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.urlServer = "http://10.30.10.14:8000";
        this.apiUrl = this.urlServer + '/api';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getData = function (moduleName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + moduleName)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getUrlServer = function () {
        return this.urlServer;
    };
    RestProvider.prototype.addUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map