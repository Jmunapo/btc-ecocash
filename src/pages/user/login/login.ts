import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthProvider } from '../../../providers/auth/auth';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private auth1: AuthProvider) {
      console.log(this.auth1)
  }

  ionViewDidLoad() {

  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword('jmags40@gmail.com', 'newuser.password').then(done => {
      console.log(done);
      console.log(this.afAuth.user);
      this.afAuth.auth.signOut();
    }).catch(error => {
      console.log(error)
    })
  }

  open(what: string){
    if (what === 'Register'){
      this.navCtrl.push(RegisterPage);
    }else if(what === 'Home'){
      this.navCtrl.setRoot(TabsPage);
    }else {
      alert('Coming soon');
    }
  }

}
