webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resetpassword_resetpassword__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.accountid = "";
        this.password = "";
    }
    HomePage.prototype.loginUser = function () {
        if (this.accountid == "") {
            alert("Please input AccountID");
            return;
        }
        if (this.password == "") {
            alert("Please input password");
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.createUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    HomePage.prototype.gotoResetPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4 class="center_text">Wallet Login</h4>\n  <ion-list>\n  \n    <ion-item>\n      <ion-label stacked>AccountID</ion-label>\n      <ion-input type="text" [(ngModel)]="accountid"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <div style="text-align:center;">\n    <button ion-button full (click)="loginUser()">\n      Login\n    </button>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 style="text-align:left;">\n        <button ion-button clear (click)="createUser()">Registration</button>\n      </ion-col>\n      <ion-col col-6 style="text-align:right;">\n        <button ion-button clear (click)="gotoResetPage()">Reset Password</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(50);
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
 * Generated class for the CreateaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CreateaccountPage = /** @class */ (function () {
    function CreateaccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.new_email = "";
        this.confirm_email = "";
        this.new_pwd = "";
        this.confirm_pwd = "";
    }
    CreateaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateaccountPage');
    };
    CreateaccountPage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    CreateaccountPage.prototype.registerUser = function () {
        if (this.new_email == "") {
            alert("Please input email");
            return;
        }
        if (this.new_email != this.confirm_email) {
            alert("Email does not match");
            return;
        }
        if (this.new_pwd == "") {
            alert("Please input password");
            return;
        }
        if (this.new_pwd != this.confirm_pwd) {
            alert("Password does not match");
            return;
        }
        if (this.validateEmailForm(this.new_email)) {
            if (this.passwordValidation(this.new_pwd)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    };
    // Email validate
    CreateaccountPage.prototype.validateEmailForm = function (str_email) {
        var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!regExp.test(str_email)) {
            alert("Email form is invalid. Please try again.");
            return false;
        }
        else {
            return true;
        }
    };
    // Password validate
    CreateaccountPage.prototype.passwordValidation = function (str_pwd) {
        var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}$/;
        if (!regExp.test(str_pwd)) {
            alert("Password form is invalid, Please try again.");
            return false;
        }
        else {
            return true;
        }
    };
    CreateaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createaccount',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/createaccount/createaccount.html"*/'<!--\n  Generated template for the CreateaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4 class="center_text">Create New Account</h4>\n\n  <ion-list>\n  \n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="new_email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Repeat Email</ion-label>\n      <ion-input type="text" [(ngModel)]="confirm_email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="new_pwd"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Repeat Pass</ion-label>\n      <ion-input type="password" [(ngModel)]="confirm_pwd"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 id="register_btn_container">\n        <button ion-button (click)="registerUser()">Register</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <h5>Password Requirements</h5>\n        <p class="grey_content">\n          Your password must be at least 10 characters long and no more than 99 characters long. It should also contain a mixture\n          of numbers and letters.\n        </p>\n      </ion-col>\n\n      <ion-col col-12>\n        <h5>Already Registered?</h5>\n        <p class="grey_content">\n           If you already have an account you may proceed to the <a id="link_goto" (click)="gotoLogin()">login page</a>.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/createaccount/createaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CreateaccountPage);
    return CreateaccountPage;
}());

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the AccountOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AccountOverviewPage = /** @class */ (function () {
    function AccountOverviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountOverviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountOverviewPage');
    };
    AccountOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-overview',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/account-overview/account-overview.html"*/'<!--\n  Generated template for the AccountOverviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n  <h4>Overview</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h5>Wallet</h5>\n        <ion-item>\n          <div>\n            <p>\n               Total balance\n            </p>\n          </div>\n          <div>\n            <p>\n               Available balance\n            </p>\n          </div>\n          <div>\n            <p>\n               Pending balance\n            </p>\n          </div>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <h5>\n          Economy\n        </h5>\n        <ion-item>\n          <div>\n            <p>\n               Coin Supply\n            </p>\n          </div>\n          <div>\n            <p>\n               Unmined Coins\n            </p>\n          </div>\n          <div>\n            <p>\n              Block Reward\n            </p>\n          </div>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <h5>\n          Network\n        </h5>\n        <ion-item>\n          <div>\n            <p>\n              Block Count\n            </p>\n          </div>\n          <div>\n            <p>\n              Difficulty\n            </p>\n          </div>\n          <div>\n            <p>\n              Hash Rate\n            </p>\n          </div>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <h5>Recent Transactions</h5>\n        <ion-item text-wrap>\n          <div>\n            <p>There are no recent transations associated with this account.</p>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/account-overview/account-overview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AccountOverviewPage);
    return AccountOverviewPage;
}());

//# sourceMappingURL=account-overview.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the AccountSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AccountSettingPage = /** @class */ (function () {
    function AccountSettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountSettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountSettingPage');
    };
    AccountSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-setting',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/account-setting/account-setting.html"*/'<!--\n  Generated template for the AccountSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <h4>Account Settings</h4>\n  <ion-item text-wrap>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h5>Account ID</h5>\n        </ion-col>\n        <ion-col col-12>\n          <h5>Email:williamlbennett222@outlook.com(<a>change</a>)</h5>\n        </ion-col>\n        <ion-col col-12>\n          <h5>Password: ********(<a>change</a>)</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/account-setting/account-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AccountSettingPage);
    return AccountSettingPage;
}());

//# sourceMappingURL=account-setting.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpasswordPage');
    };
    ResetpasswordPage.prototype.validateEmailForm = function (str_email) {
        var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!regExp.test(str_email)) {
            alert("Email form is invalid. Please try again");
        }
        else {
            // return false;
            console.log("Valid");
        }
    };
    ResetpasswordPage.prototype.resetPassword = function () {
        this.validateEmailForm(this.email);
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/resetpassword/resetpassword.html"*/'<!--\n  Generated template for the ResetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resetpassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n  <div id="submit_container">\n    <button ion-button (click)="resetPassword()">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/resetpassword/resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer_send_transfer_send__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfer_receive_transfer_receive__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transfer_history_transfer_history__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import pages



/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var TransferPage = /** @class */ (function () {
    function TransferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__transfer_send_transfer_send__["a" /* TransferSendPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__transfer_receive_transfer_receive__["a" /* TransferReceivePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__transfer_history_transfer_history__["a" /* TransferHistoryPage */];
    }
    TransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferPage');
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer/transfer.html"*/'<!--\n  Generated template for the TransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Transfer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab tabTitle="Send" [root]="tab1Root" tabIcon="send"></ion-tab>\n    <ion-tab tabTitle="Receive" [root]="tab2Root" tabIcon="archive"></ion-tab>\n    <ion-tab tabTitle="History" [root]="tab3Root" tabIcon="time"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer/transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferSendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the TransferSendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var TransferSendPage = /** @class */ (function () {
    function TransferSendPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransferSendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferSendPage');
    };
    TransferSendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer-send',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer-send/transfer-send.html"*/'<!--\n  Generated template for the TransferSendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <h4>Send Payment</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12  class="col_end">\n        <a>Advanced Mode</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <p>Destination address(<a>add another</a>)</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-input type="password" placeholder="Password"></ion-input>\n          <button ion-button item-right>\n            <ion-icon name="albums"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-input type="number" placeholder="0.0"></ion-input>\n          <ion-buttons  item-right>\n            <button ion-button>\n              PTC\n            </button>\n            <button ion-button>\n              X\n            </button>\n          </ion-buttons>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-item>\n    <div>\n      <p>Message(optional)</p>\n    </div>\n    <ion-item>\n      <ion-textarea></ion-textarea>\n    </ion-item>\n  </ion-item>\n\n  <ion-item>\n    <p>Miners fee</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-input type="number" placeholder="0.0000001"></ion-input>\n            <button ion-button item-right>\n              PTC\n            </button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button item-right>\n            <font style="font-size: 12pt;">Review Transaction</font>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer-send/transfer-send.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TransferSendPage);
    return TransferSendPage;
}());

//# sourceMappingURL=transfer-send.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the TransferReceivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var TransferReceivePage = /** @class */ (function () {
    function TransferReceivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransferReceivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferReceivePage');
    };
    TransferReceivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer-receive',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer-receive/transfer-receive.html"*/'<!--\n  Generated template for the TransferReceivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <h4>Receive Payment</h4>\n\n  <ion-list>\n    <p>Your receiving addresses</p>\n    <ion-item>\n      <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!" id="select_address">\n        <ion-option value="bacon" selected="true">Bacon</ion-option>\n        <ion-option value="olives">Black Olives</ion-option>\n        <ion-option value="xcheese" selected="true">Extra Cheese</ion-option>\n        <ion-option value="peppers">Green Peppers</ion-option>\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n        <ion-option value="onions">Onions</ion-option>\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n        <ion-option value="pineapple">Pineapple</ion-option>\n        <ion-option value="sausage">Sausage</ion-option>\n        <ion-option value="Spinach">Spinach</ion-option>\n      </ion-select>\n    </ion-item>\n    <p>Amount(optional):</p>\n    <ion-item>\n      <ion-input type="number" placeholder="0.0"></ion-input>\n      <button ion-button item-right>\n        PTC\n      </button>\n    </ion-item>\n\n    <button ion-button full>Create QRcode</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer-receive/transfer-receive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TransferReceivePage);
    return TransferReceivePage;
}());

//# sourceMappingURL=transfer-receive.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the TransferHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var TransferHistoryPage = /** @class */ (function () {
    function TransferHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransferHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferHistoryPage');
    };
    TransferHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer-history',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer-history/transfer-history.html"*/'<!--\n  Generated template for the TransferHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <h4>Transaction History</h4>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/transfer-history/transfer-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TransferHistoryPage);
    return TransferHistoryPage;
}());

//# sourceMappingURL=transfer-history.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addresses_address_book_addresses_address_book__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addresses_import_addresses_import__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addresses_my_address_addresses_my_address__ = __webpack_require__(206);
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
 * Generated class for the AddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AddressesPage = /** @class */ (function () {
    function AddressesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__addresses_my_address_addresses_my_address__["a" /* AddressesMyAddressPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__addresses_address_book_addresses_address_book__["a" /* AddressesAddressBookPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__addresses_import_addresses_import__["a" /* AddressesImportPage */];
    }
    AddressesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressesPage');
    };
    AddressesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addresses',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses/addresses.html"*/'<!--\n  Generated template for the AddressesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Addresses</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  <ion-tabs>\n    <ion-tab tabTitle="My Addresses" [root]="tab1Root" tabIcon="contact"></ion-tab>\n    <ion-tab tabTitle="Address Book" [root]="tab2Root" tabIcon="contacts"></ion-tab>\n    <ion-tab tabTitle="Import/Export" [root]="tab3Root" tabIcon="folder-open"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses/addresses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddressesPage);
    return AddressesPage;
}());

//# sourceMappingURL=addresses.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesAddressBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the AddressesAddressBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AddressesAddressBookPage = /** @class */ (function () {
    function AddressesAddressBookPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddressesAddressBookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressesAddressBookPage');
    };
    AddressesAddressBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addresses-address-book',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses-address-book/addresses-address-book.html"*/'<!--\n  Generated template for the AddressesAddressBookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <h4>Address Book</h4>\n      </ion-col>\n      <ion-col style="text-align: right;">\n        <button ion-button id="new_entry">Add New Entry</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>Address book is still empty.</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses-address-book/addresses-address-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddressesAddressBookPage);
    return AddressesAddressBookPage;
}());

//# sourceMappingURL=addresses-address-book.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesImportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the AddressesImportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AddressesImportPage = /** @class */ (function () {
    function AddressesImportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.active_import = true;
    }
    AddressesImportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressesImportPage');
    };
    AddressesImportPage.prototype.clickImport = function () {
        this.active_import = true;
    };
    AddressesImportPage.prototype.clickExport = function () {
        this.active_import = false;
    };
    AddressesImportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addresses-import',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses-import/addresses-import.html"*/'<!--\n  Generated template for the AddressesImportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <h4 *ngIf="active_import">Import tools</h4>\n        <h4 *ngIf="!active_import">Export tools</h4>\n      </ion-col>\n      <ion-col style="text-align: right;" class="btn_container">\n        <button ion-button [outline]="!active_import" id="btn_import" (click)="clickImport()">Import</button>\n        <button ion-button [outline]="active_import" id="btn_export" (click)="clickExport()">Export</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Import -->\n  <ion-grid *ngIf="active_import">\n    <ion-row>\n      <ion-col>\n        <h6>Import Private Key</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="Input a private key"></ion-input>\n            <button ion-button item-right>Import key</button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <h6>Import JSON wallet</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-textarea></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <button ion-button>Import wallet</button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Export -->\n  <ion-grid *ngIf="!active_import">\n    <ion-row>\n      <ion-col>\n        <h6>Dump Private Key</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-input type="text"></ion-input>\n        <button ion-button item-right>Show Private key</button>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6>Dump All Private Keys</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button>Dump Entire Wallet</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses-import/addresses-import.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddressesImportPage);
    return AddressesImportPage;
}());

//# sourceMappingURL=addresses-import.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesMyAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the AddressesMyAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AddressesMyAddressPage = /** @class */ (function () {
    function AddressesMyAddressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.address_action = "archive_address";
        this.btn_active = true;
        this.btn_archived = false;
    }
    AddressesMyAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressesMyAddressPage');
    };
    AddressesMyAddressPage.prototype.enableActive = function () {
        this.btn_active = true;
        this.btn_archived = false;
    };
    AddressesMyAddressPage.prototype.enableArchive = function () {
        this.btn_active = false;
        this.btn_archived = true;
    };
    AddressesMyAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addresses-my-address',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses-my-address/addresses-my-address.html"*/'<!--\n  Generated template for the AddressesMyAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <h4>My Addresses</h4>\n      </ion-col>\n      <ion-col style="text-align: right;">\n        <button ion-button id="new_address">New Address</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <button ion-button id="btn_active" [outline]="btn_archived" (click)="enableActive()">Active</button>\n      <button ion-button id="btn_archived" [outline]="btn_active" (click)="enableArchive()">Archived</button>\n      <table id="tbl_address">\n        <thead>\n          <tr>\n            <td>\n              Address\n            </td>\n            <td>\n              Balance\n            </td>\n            <td>\n              Withdrawal Limit\n            </td>\n            <td>\n              Actions\n            </td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>CY4tQDS6qrnyHW7zDQFLkhHMWf1WPifKM7</td>\n            <td>0.0000000000 PTC</td>\n            <td> 0.0000000000 PTC</td>\n            <td>\n              <ion-list>\n                <ion-item>\n                  <ion-select [(ngModel)]="address_action">\n                    <ion-option value="archive_address">Archive Address</ion-option>\n                    <ion-option value="change_limit">Change Limit</ion-option>\n                    <ion-option value="show_qr">Show QR Code</ion-option>\n                    <ion-option value="sign_message">Sign Message</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/addresses-my-address/addresses-my-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddressesMyAddressPage);
    return AddressesMyAddressPage;
}());

//# sourceMappingURL=addresses-my-address.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_search_blockchain_utilities_search_blockchain__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_multisig_tools_utilities_multisig_tools__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_sign_verify_utilities_sign_verify__ = __webpack_require__(210);
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
 * Generated class for the UtilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UtilitiesPage = /** @class */ (function () {
    function UtilitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__utilities_search_blockchain_utilities_search_blockchain__["a" /* UtilitiesSearchBlockchainPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__utilities_multisig_tools_utilities_multisig_tools__["a" /* UtilitiesMultisigToolsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__utilities_sign_verify_utilities_sign_verify__["a" /* UtilitiesSignVerifyPage */];
    }
    UtilitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UtilitiesPage');
    };
    UtilitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-utilities',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities/utilities.html"*/'<!--\n  Generated template for the UtilitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Utilities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  <ion-tabs>\n    <ion-tab tabTitle="Search" [root]="tab1Root" tabIcon="search"></ion-tab>\n    <ion-tab tabTitle="Multi-sig tools" [root]="tab2Root" tabIcon="construct"></ion-tab>\n    <ion-tab tabTitle="Verify" [root]="tab3Root" tabIcon="create"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities/utilities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UtilitiesPage);
    return UtilitiesPage;
}());

//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesSearchBlockchainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the UtilitiesSearchBlockchainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UtilitiesSearchBlockchainPage = /** @class */ (function () {
    function UtilitiesSearchBlockchainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UtilitiesSearchBlockchainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UtilitiesSearchBlockchainPage');
    };
    UtilitiesSearchBlockchainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-utilities-search-blockchain',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities-search-blockchain/utilities-search-blockchain.html"*/'<!--\n  Generated template for the UtilitiesSearchBlockchainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <h4>Search Blockchain</h4>\n\n  <ion-grid>\n\n    <!-- Find Address -->\n    <ion-row>\n      <ion-col>\n        <h6>Find Address input valid address</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text"></ion-input>\n          <button ion-button item-right>Search</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Find Transaction -->\n    <ion-row>\n      <ion-col>\n        <h6>Find Transaction input a valid txid</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text"></ion-input>\n          <button ion-button item-right>Search</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Find Block  -->\n    <ion-row>\n      <ion-col>\n        <h6>Find Block input valid block hash</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text"></ion-input>\n          <button ion-button item-right>Search</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities-search-blockchain/utilities-search-blockchain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UtilitiesSearchBlockchainPage);
    return UtilitiesSearchBlockchainPage;
}());

//# sourceMappingURL=utilities-search-blockchain.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesMultisigToolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the UtilitiesMultisigToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UtilitiesMultisigToolsPage = /** @class */ (function () {
    function UtilitiesMultisigToolsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UtilitiesMultisigToolsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UtilitiesMultisigToolsPage');
    };
    UtilitiesMultisigToolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-utilities-multisig-tools',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities-multisig-tools/utilities-multisig-tools.html"*/'<!--\n  Generated template for the UtilitiesMultisigToolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <h4>Create Multi-Sig Address</h4>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n         <h6>List of authorized addresses (1 per line):</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <h6>Signatures required (1 or more):</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text"></ion-input>\n          <button ion-button>Create Address</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities-multisig-tools/utilities-multisig-tools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UtilitiesMultisigToolsPage);
    return UtilitiesMultisigToolsPage;
}());

//# sourceMappingURL=utilities-multisig-tools.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesSignVerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the UtilitiesSignVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UtilitiesSignVerifyPage = /** @class */ (function () {
    function UtilitiesSignVerifyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.active_sign = true;
    }
    UtilitiesSignVerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UtilitiesSignVerifyPage');
    };
    UtilitiesSignVerifyPage.prototype.clickSign = function () {
        this.active_sign = true;
    };
    UtilitiesSignVerifyPage.prototype.clickVerify = function () {
        this.active_sign = false;
    };
    UtilitiesSignVerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-utilities-sign-verify',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities-sign-verify/utilities-sign-verify.html"*/'<!--\n  Generated template for the UtilitiesSignVerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <h4 *ngIf="active_sign">Sign Message</h4>\n        <h4 *ngIf="!active_sign">Verify Message</h4>\n      </ion-col>\n      <ion-col style="text-align: right;" class="btn_container">\n        <button ion-button [outline]="!active_sign" id="btn_sign" (click)="clickSign()">Sign</button>\n        <button ion-button [outline]="active_sign" id="btn_verify" (click)="clickVerify()">Verify</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n\n    <!-- Addresss -->\n    <ion-row>\n      <ion-col>\n        <h6>Address</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Message -->\n    <ion-row>\n      <ion-col>\n        <h6>Message:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Signature -->\n    <ion-row *ngIf="!active_sign">\n      <ion-col>\n        <h6>Signature:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="!active_sign">\n      <ion-col>\n        <ion-item>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Sign button -->\n    <ion-row>\n      <ion-col>\n        <button ion-button *ngIf="active_sign">Sign</button>\n        <button ion-button *ngIf="!active_sign">Verify</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/utilities-sign-verify/utilities-sign-verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UtilitiesSignVerifyPage);
    return UtilitiesSignVerifyPage;
}());

//# sourceMappingURL=utilities-sign-verify.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_createaccount_createaccount__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_resetpassword_resetpassword__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_overview_account_overview__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_setting_account_setting__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transfer_transfer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_transfer_send_transfer_send__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_transfer_receive_transfer_receive__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_transfer_history_transfer_history__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addresses_addresses__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_addresses_address_book_addresses_address_book__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_addresses_import_addresses_import__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addresses_my_address_addresses_my_address__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_utilities_utilities__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_utilities_search_blockchain_utilities_search_blockchain__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_utilities_multisig_tools_utilities_multisig_tools__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_utilities_sign_verify_utilities_sign_verify__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Pages



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_overview_account_overview__["a" /* AccountOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_setting_account_setting__["a" /* AccountSettingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_transfer_send_transfer_send__["a" /* TransferSendPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_transfer_receive_transfer_receive__["a" /* TransferReceivePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transfer_history_transfer_history__["a" /* TransferHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addresses_addresses__["a" /* AddressesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addresses_address_book_addresses_address_book__["a" /* AddressesAddressBookPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_addresses_import_addresses_import__["a" /* AddressesImportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addresses_my_address_addresses_my_address__["a" /* AddressesMyAddressPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_utilities_utilities__["a" /* UtilitiesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_utilities_search_blockchain_utilities_search_blockchain__["a" /* UtilitiesSearchBlockchainPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_utilities_multisig_tools_utilities_multisig_tools__["a" /* UtilitiesMultisigToolsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_utilities_sign_verify_utilities_sign_verify__["a" /* UtilitiesSignVerifyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_overview_account_overview__["a" /* AccountOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_setting_account_setting__["a" /* AccountSettingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_transfer_send_transfer_send__["a" /* TransferSendPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_transfer_receive_transfer_receive__["a" /* TransferReceivePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transfer_history_transfer_history__["a" /* TransferHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addresses_addresses__["a" /* AddressesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addresses_address_book_addresses_address_book__["a" /* AddressesAddressBookPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_addresses_import_addresses_import__["a" /* AddressesImportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addresses_my_address_addresses_my_address__["a" /* AddressesMyAddressPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_utilities_utilities__["a" /* UtilitiesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_utilities_search_blockchain_utilities_search_blockchain__["a" /* UtilitiesSearchBlockchainPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_utilities_multisig_tools_utilities_multisig_tools__["a" /* UtilitiesMultisigToolsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_utilities_sign_verify_utilities_sign_verify__["a" /* UtilitiesSignVerifyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_transfer_transfer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addresses_addresses__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_utilities_utilities__ = __webpack_require__(207);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.menulist = [
            {
                title: "Account"
            },
            {
                title: "Transfer"
            },
            {
                title: "Addresses"
            },
            {
                title: "Utilities"
            }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.selectItem = function (index) {
        var tmp_val = this.menulist[index].title;
        switch (tmp_val) {
            case "Account":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */]);
                break;
            case "Transfer":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_transfer_transfer__["a" /* TransferPage */]);
                break;
            case "Addresses":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_addresses_addresses__["a" /* AddressesPage */]);
                break;
            case "Utilities":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_utilities_utilities__["a" /* UtilitiesPage */]);
                break;
            default:
                break;
        }
    };
    MyApp.prototype.logOut = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/app/app.html"*/'<ion-menu [content]="mycontent" persistent="true">\n    <ion-header>\n        <ion-toolbar color="danger">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-item text-wrap *ngFor="let submenu of menulist; let i=index">\n                <button ion-button full clear (click)="selectItem(i)">{{submenu.title}}</button>\n            </ion-item>\n            <ion-item (click)="logOut()">\n                <button ion-button full clear>Logout</button>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_overview_account_overview__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_setting_account_setting__ = __webpack_require__(197);
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
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__account_overview_account_overview__["a" /* AccountOverviewPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__account_setting_account_setting__["a" /* AccountSettingPage */];
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/account/account.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  <ion-tabs>\n    <ion-tab tabTitle="Overview" [root]="tab1Root" tabIcon="home"></ion-tab>\n    <ion-tab tabTitle="Settings" [root]="tab2Root" tabIcon="information-circle"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Volumes/Data1/Workspace/ionic/btctrading/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map