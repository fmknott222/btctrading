import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UtilitiesSearchBlockchainPage } from '../utilities-search-blockchain/utilities-search-blockchain';
import { UtilitiesMultisigToolsPage } from '../utilities-multisig-tools/utilities-multisig-tools';
import { UtilitiesSignVerifyPage } from '../utilities-sign-verify/utilities-sign-verify';
/**
 * Generated class for the UtilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-utilities',
  templateUrl: 'utilities.html',
})
export class UtilitiesPage {


  tab1Root = UtilitiesSearchBlockchainPage;
  tab2Root = UtilitiesMultisigToolsPage;
  tab3Root = UtilitiesSignVerifyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilitiesPage');
  }

}
