import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressesImportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-addresses-import',
  templateUrl: 'addresses-import.html',
})
export class AddressesImportPage {

  public active_import:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressesImportPage');
  }

  clickImport() {
    this.active_import = true;
  }

  clickExport() {
    this.active_import = false;
  }

}
