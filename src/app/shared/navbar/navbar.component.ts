import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionbdService } from '../../servicios/conexionbd.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
public userNombre :string;
public userEmail :string;
public userPicture :string;
public userId :string;
public islogin :string;

  constructor(private conexionbdserice: ConexionbdService,
              private auth: AuthService) {
    // auth.handleAuthentication();
  }

  onLogout(){
    this.auth.logout();
  }

  ngOnInit() {
  }

  // onComprobarUserLogin(){
  //   this.conexionbdserice.getAuht().subscribe( auth =>{
  //     if(auth){
  //       console.log(auth);
  //     }
  //   })
  // }

  // onLogout(){
  //   this.conexionbdserice.logout();
  // }

}
