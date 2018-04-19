import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressesImportPage } from './addresses-import';

@NgModule({
  declarations: [
    AddressesImportPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressesImportPage),
  ],
})
export class AddressesImportPageModule {}
