import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import pages
import { TransferSendPage } from '../transfer-send/transfer-send';
import { TransferReceivePage } from '../transfer-receive/transfer-receive';
import { TransferHistoryPage } from '../transfer-history/transfer-history';

/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  tab1Root = TransferSendPage;
  tab2Root = TransferReceivePage;
  tab3Root = TransferHistoryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }

}
