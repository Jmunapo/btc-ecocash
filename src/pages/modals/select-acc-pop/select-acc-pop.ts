import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-acc-pop',
  templateUrl: 'select-acc-pop.html',
})
export class SelectAccPopPage {
  accounts: Array<any> = [];
  action: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accounts = this.navParams.get('accounts');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAccPopPage');
  }

}
