import { Component, ViewChild } from '@angular/core';
import { NavController, PopoverController, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TransactionsPage } from '../transactions/transactions';
import { ExchangePage } from '../exchange/exchange';
import { MarketsPage } from '../markets/markets';
import { WalletsPage } from '../wallets/wallets';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  @ViewChild('mainTabs') tabRef: Tabs;
  homeRoot = HomePage;
  walletsRoot = WalletsPage;
  transactionsRoot = TransactionsPage;
  exchangeRoot = ExchangePage;
  marketsRoot = MarketsPage;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }

  ionViewDidLoad(){
    
  }
  more() {
    let selectedTab = this.tabRef.getSelected().index;
    this.openPopOver(selectedTab);
    
  }

  select(which) {
    var myCollection = document.getElementsByClassName("tab-button-text");
    for (let i = 0; i < myCollection.length; i++) {
      myCollection[i].classList.add('hide-text');
    }
    const lem = document.getElementById(which).children[1];
    lem.classList.remove('hide-text');
  }

  openPopOver(i: number){
    let open;
    if (i === 0) { open = 'home' }
    if (i === 1) { open = 'markets' }
    if (i === 2) { open = 'wallets' }
    if (i === 3) { open = 'exchange' }
    const popover = this.popoverCtrl.create('TabsPopoverPage',{
      open
    });
    popover.present();
    popover.onDidDismiss(data => {
      console.log(data);
    })
  }
}
