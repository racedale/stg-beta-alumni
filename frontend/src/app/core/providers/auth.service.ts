import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
     this.afAuth.auth.signOut();
  }

  getUser() {
    return this.user;
  }
}
