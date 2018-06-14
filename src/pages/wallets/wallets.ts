import { Component } from '@angular/core';
import { NavParams, PopoverController, NavController, } from 'ionic-angular';
import { Wallet } from '../../app/models/app.models';


@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html',
})
export class WalletsPage {
  user: any = null;
  wallets: Array<Wallet> = [];
  shouldAnimate: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
    this.wallets.push({
      name: 'Ecocash',
      ownerId: '15vg565bg5',
      amount: 50
    });
  }

  ionViewWillEnter() {
    console.log('[1] will enter fired');
    //Login
    if (this.user) {
      const popover = this.popoverCtrl.create('LoginPopPage', {
        open
      });
      popover.present();
      popover.onDidDismiss(data => {
        console.log(data);
      })
    }
  }

  selectWallet(action: string) {
    if (this.wallets.length === 1) {
      this.walletAction(action, this.wallets[0]);
      return;
    }
    const popover = this.popoverCtrl.create('SelectAccPopPage', {
      wallets: this.wallets
    });
    popover.present();
    popover.onDidDismiss(wallet => {
      console.log(wallet);
      if (wallet) {
        this.walletAction(action, wallet);
      }
    })
  }

  walletAction(action: string, wallet: Wallet): void {
    this.navCtrl.push(action + 'Page', {
      wallet
    });
  }
}
