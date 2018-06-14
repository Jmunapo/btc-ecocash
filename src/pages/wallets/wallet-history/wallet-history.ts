import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Wallet } from '../../../app/models/app.models';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-wallet-history',
  templateUrl: 'wallet-history.html',
})
export class WalletHistoryPage {
  wallet: Wallet;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wallet = this.navParams.get('wallet');
    console.log(this.wallet);
    if (!this.wallet) {
      this.navCtrl.setRoot(TabsPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletHistoryPage');
  }

}
