import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import validator from 'validator';
import * as passwordValidator from 'password-validator';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  dom: any = {
      type: 'password',
      icon: 'eye'
    };
  trials: number = 0;
  register: any = {
    email: '',
    referral: '',
    password: ''
  };
  valid: any = {
    password: false,
    email: false
  };
  schema = new passwordValidator();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public loadingCtrl: LoadingController) {
      
    this.schema.is().min(8).is().max(100).has().uppercase()
    .has().lowercase().has().digits()
    .is().not().oneOf(['Passw0rd', 'Password123']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  view(){
    if(this.dom.icon === 'eye'){
      this.dom.icon = 'eye-off'
      this.dom.type = 'text'
    }else {
      this.dom.icon = 'eye'
      this.dom.type = 'password'
    }
    document.getElementById('pwd-field').querySelector('input').focus();
  }

  doRegister(){
    let valid = this.validateEntries();
    if(valid){
      this.afAuth.auth
      .createUserWithEmailAndPassword(this.register.email, this.register.password)
        .then(data => {
          //this.afAuth.auth.currentUser.sendEmailVerification().then(() => {})
          
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  validateEntries(): boolean{
    let validEmail = validator.isEmail(this.register.email);
    let strongPwd = this.schema.validate(this.register.password);
    if (!strongPwd) {
      if (validator.isEmpty(this.register.password)){
        document.getElementById('regPass').innerText = 'Password cannot be empty';
        }else{
          this.trials++;
          if (this.trials === 3) {
            this.trials = 0;
            this.passPopOver();
          }
          document.getElementById('regPass').innerText = 'Password is not strong';
        }
        this.valid.password = true;
      }

    if (!validEmail) {
      if (validator.isEmpty(this.register.email)) {
        document.getElementById('regEmail').innerText = 'Email cannot be empty';
        } else {
          document.getElementById('regEmail').innerText = 'Enter valid email';
        }
       this.valid.email = true;
      }

    if (validEmail && strongPwd){
        return true
      }else{
        return false;
      }
  }

  toLogin(){
    this.navCtrl.pop();
  }

  passPopOver(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
        Password must be at least 8 characters long,
        contains ONE UPPERCASE, one lowercase & 1 digit
      </div>`,
      duration: 7000
    });
    loading.present();
  }

}
