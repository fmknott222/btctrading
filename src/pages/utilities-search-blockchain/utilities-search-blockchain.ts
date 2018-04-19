import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UtilitiesSearchBlockchainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-utilities-search-blockchain',
  templateUrl: 'utilities-search-blockchain.html',
})
export class UtilitiesSearchBlockchainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilitiesSearchBlockchainPage');
  }

}
