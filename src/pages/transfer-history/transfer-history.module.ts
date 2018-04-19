import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferHistoryPage } from './transfer-history';

@NgModule({
  declarations: [
    TransferHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferHistoryPage),
  ],
})
export class TransferHistoryPageModule {}
