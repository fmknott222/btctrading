import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountOverviewPage } from '../account-overview/account-overview';
import { AccountSettingPage } from '../account-setting/account-setting';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  tab1Root = AccountOverviewPage;
  tab2Root = AccountSettingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
