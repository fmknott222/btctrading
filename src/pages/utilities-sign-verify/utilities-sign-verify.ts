import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UtilitiesSignVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-utilities-sign-verify',
  templateUrl: 'utilities-sign-verify.html',
})
export class UtilitiesSignVerifyPage {

  public active_sign:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilitiesSignVerifyPage');
  }

  clickSign() {
    this.active_sign = true;
  }

  clickVerify() {
    this.active_sign = false;
  }

}
