import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferReceivePage } from './transfer-receive';

@NgModule({
  declarations: [
    TransferReceivePage,
  ],
  imports: [
    IonicPageModule.forChild(TransferReceivePage),
  ],
})
export class TransferReceivePageModule {}
