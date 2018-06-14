import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPopPage } from './login-pop';

@NgModule({
  declarations: [
    LoginPopPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPopPage),
  ],
})
export class LoginPopPageModule {}
