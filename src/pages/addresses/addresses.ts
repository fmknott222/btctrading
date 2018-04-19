import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressesAddressBookPage } from '../addresses-address-book/addresses-address-book';
import { AddressesImportPage } from '../addresses-import/addresses-import';
import { AddressesMyAddressPage } from '../addresses-my-address/addresses-my-address';

/**
 * Generated class for the AddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-addresses',
  templateUrl: 'addresses.html',
})
export class AddressesPage {

  tab1Root = AddressesMyAddressPage;
  tab2Root = AddressesAddressBookPage;
  tab3Root = AddressesImportPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressesPage');
  }

}
