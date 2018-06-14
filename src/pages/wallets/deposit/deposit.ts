import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { Wallet } from '../../../app/models/app.models';

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {
  instructions: Array<string> = [];
  showInstruc: boolean = true;
  wallet: Wallet;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
    this.wallet = this.navParams.get('wallet');
    console.log(this.wallet);
    if(!this.wallet){
      this.navCtrl.setRoot(TabsPage);
    }else {
      if (this.wallet.name === 'Ecocash') {
        this.instructions = [
          'Deposit your money to Ecocash Merchant Code. 166469',
          'Enter Last 6 digits of Approval code & Amount in the field below',
          'Click deposit, your balance will appear in your Ecocash Wallet'
        ]
      }
    }
    
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `Processing`,
      duration: 5000
    });
    loading.onDidDismiss(() => {
      alert('Deposit Successfull');
    });
    loading.present();
  }

  loadInstruc(e: any){
    e.complete();
    this.showInstruc = true;
  }

  history(){
    this.navCtrl.push('WalletHistoryPage', {
      wallet: this.wallet,
      type: 'deposit'
    });
  }

}
