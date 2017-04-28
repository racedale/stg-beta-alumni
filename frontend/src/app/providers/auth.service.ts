import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  user = {
    displayName: '',
    email: ''
  };

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(
      (auth) => {
        if (auth) {
          this.user.displayName = auth.google.displayName;
          this.user.email = auth.google.email;
          console.log(this.user);
          // this.router.navigate(['']);
        } else {
          this.user.displayName = '';
          this.user.email = '';
          // this.router.navigate(['login']);
        }
      }
    );
  }

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }

  getUser() {
    return this.user;
  }
}
