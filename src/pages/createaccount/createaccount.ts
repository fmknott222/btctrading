import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the CreateaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html',
})
export class CreateaccountPage {

  public new_email:string = "";
  public confirm_email:string = "";
  public new_pwd:string = "";
  public confirm_pwd:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateaccountPage');
  }

  gotoLogin() {
    this.navCtrl.pop();
  }

  registerUser() {
    if(this.new_email == "") {
      alert("Please input email");
      return;
    }

    if(this.new_email != this.confirm_email) {
      alert("Email does not match");
      return;
    }

    if(this.new_pwd == "") {
      alert("Please input password");
      return;
    }

    if(this.new_pwd != this.confirm_pwd) {
      alert("Password does not match");
      return;
    }

    if(this.validateEmailForm(this.new_email)) {
      if(this.passwordValidation(this.new_pwd)) {
        this.navCtrl.push(AccountPage);
      } else {
        return;
      }
    } else {
      return;
    }
  }
  
  // Email validate
  validateEmailForm(str_email:string) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!regExp.test(str_email)) {
      alert("Email form is invalid. Please try again.");
      return false;
    } else {
      return true;
    }
  }

  // Password validate
  passwordValidation(str_pwd: string) {
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}$/;

    if(!regExp.test(str_pwd)) {
      alert("Password form is invalid, Please try again.");
      return false;
    } else {
      return true;
    }
  }

}
