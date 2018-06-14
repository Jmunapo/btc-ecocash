import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../../tabs/tabs';
import { Wallet } from '../../../app/models/app.models';

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {
  wallet: Wallet;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wallet = this.navParams.get('wallet');
    console.log(this.wallet);
    if (!this.wallet) {
      this.navCtrl.setRoot(TabsPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawPage');
  }
  history() {
    this.navCtrl.push('WalletHistoryPage', {
      wallet: this.wallet,
      type: 'withdraw'
    });
  }

}
