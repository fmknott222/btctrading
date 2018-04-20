import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressesAddressBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-addresses-address-book',
  templateUrl: 'addresses-address-book.html',
})
export class AddressesAddressBookPage {

  entries:any = [];
  entry_action: string = "edit_label";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressesAddressBookPage');
  }

  addNewEntry() {
    this.entries.push(
      {
        address: "123123123",
        label: "testlabel"
      }
    )
  }

}
