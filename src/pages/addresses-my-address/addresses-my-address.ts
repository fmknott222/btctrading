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

  active_address: any = [
    {
      address: "CY4tQDS6qrnyHW7zDQFLkhHMWf1WPifKM7",
      balance: "0.0000000000",
      withdrawal_limit: "0.0000000000"
    }
  ];

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
    event.stopPropagation();
    this.btn_active = false;
    this.btn_archived = true;
  }

  addNewAddress() {
    this.active_address.push(
      {
        address: "123123123",
        balance: "0.0000000000",
        withdrawal_limit: "0.0000000000"
      }
    )
  }

}
