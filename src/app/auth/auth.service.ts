import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  getUser(): firebase.User {
    return this.auth.auth.currentUser;
  }

  login(email: string, password: string): firebase.Promise<any> {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
}
