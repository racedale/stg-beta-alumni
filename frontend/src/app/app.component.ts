import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user: Object;

  constructor(public authService: AuthService) {
    this.user = this.authService.getUser();
  }

  login() {
    this.authService.loginWithGoogle();
  }

}
