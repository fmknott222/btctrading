import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressesMyAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-addresses-my-address',
  templateUrl: 'addresses-my-address.html',
})
export class AddressesMyAddressPage {

  address_action: String = "archive_address";

  public btn_active:boolean = true;

  public btn_archived:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressesMyAddressPage');
  }

  enableActive() {
    this.btn_active = true;
    this.btn_archived = false;
  }

  enableArchive() {
    this.btn_active = false;
    this.btn_archived = true;
  }

}
