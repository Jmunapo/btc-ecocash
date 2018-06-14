import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  constructor(private afireAuth: AngularFireAuth) {
    console.log(this.afireAuth);
    console.log(firebase);
    console.log('Hello AuthProvider Provider');
  }

}
