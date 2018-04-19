import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { AccountPage } from '../pages/account/account';
import { AccountOverviewPage } from '../pages/account-overview/account-overview';
import { AccountSettingPage } from '../pages/account-setting/account-setting';
import { TransferPage } from '../pages/transfer/transfer';
import { TransferSendPage } from '../pages/transfer-send/transfer-send';
import { TransferReceivePage } from '../pages/transfer-receive/transfer-receive';
import { TransferHistoryPage } from '../pages/transfer-history/transfer-history';
import { AddressesPage } from '../pages/addresses/addresses';
import { AddressesAddressBookPage } from '../pages/addresses-address-book/addresses-address-book';
import { AddressesImportPage } from '../pages/addresses-import/addresses-import';
import { AddressesMyAddressPage } from '../pages/addresses-my-address/addresses-my-address';
import { UtilitiesPage } from '../pages/utilities/utilities';
import { UtilitiesSearchBlockchainPage } from '../pages/utilities-search-blockchain/utilities-search-blockchain';
import { UtilitiesMultisigToolsPage } from '../pages/utilities-multisig-tools/utilities-multisig-tools';
import { UtilitiesSignVerifyPage } from '../pages/utilities-sign-verify/utilities-sign-verify';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateaccountPage,
    ResetpasswordPage,
    AccountPage,
    AccountOverviewPage,
    AccountSettingPage,
    TransferPage,
    TransferSendPage,
    TransferReceivePage,
    TransferHistoryPage,
    AddressesPage,
    AddressesAddressBookPage,
    AddressesImportPage,
    AddressesMyAddressPage,
    UtilitiesPage,
    UtilitiesSearchBlockchainPage,
    UtilitiesMultisigToolsPage,
    UtilitiesSignVerifyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateaccountPage,
    ResetpasswordPage,
    AccountPage,
    AccountOverviewPage,
    AccountSettingPage,
    TransferPage,
    TransferSendPage,
    TransferReceivePage,
    TransferHistoryPage,
    AddressesPage,
    AddressesAddressBookPage,
    AddressesImportPage,
    AddressesMyAddressPage,
    UtilitiesPage,
    UtilitiesSearchBlockchainPage,
    UtilitiesMultisigToolsPage,
    UtilitiesSignVerifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
