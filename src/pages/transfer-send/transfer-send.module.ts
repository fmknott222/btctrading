import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferSendPage } from './transfer-send';

@NgModule({
  declarations: [
    TransferSendPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferSendPage),
  ],
})
export class TransferSendPageModule {}
