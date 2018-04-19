import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressesMyAddressPage } from './addresses-my-address';

@NgModule({
  declarations: [
    AddressesMyAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressesMyAddressPage),
  ],
})
export class AddressesMyAddressPageModule {}
