import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressesAddressBookPage } from './addresses-address-book';

@NgModule({
  declarations: [
    AddressesAddressBookPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressesAddressBookPage),
  ],
})
export class AddressesAddressBookPageModule {}
