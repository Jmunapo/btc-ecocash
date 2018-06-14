import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExchangePage } from '../pages/exchange/exchange';
import { TransactionsPage } from '../pages/transactions/transactions';
import { HomePage } from '../pages/home/home';
import { MarketsPage } from '../pages/markets/markets';
import { TabsPage } from '../pages/tabs/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateItemSliding } from '../directives/animate-item-sliding/animate-item-sliding';
import { WalletsPage } from '../pages/wallets/wallets';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { FbProvider } from '../providers/fb/fb';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/user/login/login';
import { RegisterPage } from '../pages/user/register/register';

var config = {
  apiKey: "AIzaSyB9sbs9b-ImTfO30btKpqmLNGuIBAhFtAs",
  authDomain: "btc-skrill.firebaseapp.com",
  databaseURL: "https://btc-skrill.firebaseio.com",
  projectId: "btc-skrill",
  storageBucket: "btc-skrill.appspot.com",
  messagingSenderId: "801531514143"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    MarketsPage,
    WalletsPage,
    TransactionsPage,
    ExchangePage,
    AnimateItemSliding,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back',
      backButtonText: '',
      pageTransition: 'md-transition',
      activator: 'ripple',
      mode: 'md',
      tabsHideOnSubPages: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    WalletsPage,
    ExchangePage,
    TransactionsPage,
    MarketsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    AngularFireAuth,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FbProvider,
    AuthProvider
  ]
})
export class AppModule {}
