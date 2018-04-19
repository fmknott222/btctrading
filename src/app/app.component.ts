import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { TransferPage } from '../pages/transfer/transfer';
import { AddressesPage } from '../pages/addresses/addresses';
import { UtilitiesPage } from '../pages/utilities/utilities';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  menulist:any = [
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

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  selectItem(index) {
    var tmp_val = this.menulist[index].title;
    switch (tmp_val) {
      case "Account":
        this.nav.push(AccountPage);
        break;
      case "Transfer":
        this.nav.push(TransferPage);
        break;
      case "Addresses":
        this.nav.push(AddressesPage);
        break;
      case "Utilities":
        this.nav.push(UtilitiesPage);
        break;
      default:
        break;
    }
  }

  logOut() {
    this.nav.setRoot(HomePage);
  }

}

