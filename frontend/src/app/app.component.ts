import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: firebase.User;

  constructor(public authService: AuthService) {  }

  ngOnInit() {
    this.authService.getUser().subscribe(auth => {
      this.user = auth;
    });
  }

  login() {
    this.authService.loginWithGoogle();
  }
}
