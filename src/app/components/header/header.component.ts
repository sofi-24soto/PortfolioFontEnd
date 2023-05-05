import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { Persona } from 'src/app/model/persona';
import { Redes } from 'src/app/model/redes';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosService } from 'src/app/servicios/datos.service';
import { RedesService } from 'src/app/servicios/redes.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLogged = false;
  rede: Redes[]=[];
   constructor(private tokenService : TokenService, 
               private router : Router,
               private redService: RedesService){}

   ngOnInit(): void{
    this. cargarRed();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
   }

   onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }


  cargarRed():void{
    this.redService.list().subscribe(
      data => {
        this.rede=data;
      })
  }
}
