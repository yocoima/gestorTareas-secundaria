import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }

  login(){
  this.auth.login();
  }
}
