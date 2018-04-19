import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateaccountPage } from '../createaccount/createaccount';
import { AccountPage } from '../account/account';
import { ResetpasswordPage } from '../resetpassword/resetpassword';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accountid = "";
  password = "";

  constructor(public navCtrl: NavController) {

  }

  loginUser() {
    if(this.accountid == "") {
      alert("Please input AccountID");
      return;
    }
    if(this.password == "") {
      alert("Please input password");
      return;
    }
    this.navCtrl.push(AccountPage);
  }

  createUser() {
    this.navCtrl.push(CreateaccountPage);
  }

  gotoResetPage() {
    this.navCtrl.push(ResetpasswordPage);
  }

}
