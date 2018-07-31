import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor( private auth: AuthService) {
    auth.handleAuthentication();
  }

  login(){
  this.auth.login();
  console.log(this.auth)
  }
  onLogout(){
    this.auth.logout();
  }
}
