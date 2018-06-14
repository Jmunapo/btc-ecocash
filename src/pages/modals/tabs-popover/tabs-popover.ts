import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs-popover',
  templateUrl: 'tabs-popover.html',
})
export class TabsPopoverPage {
  open: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.open = this.navParams.get('open');
    console.log(this.open);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPopoverPage');
  }

  closeWith(option){
    this.viewCtrl.dismiss({
      option
    })
  }

}
