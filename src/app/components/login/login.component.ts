import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;
   isLogged = false;
   isLogginFail = false;
   loginUsuario! :LoginUsuario;
   nombreUsuario! : string;
   password! : string;
   roles : string[] = [];
   erroMsj! : string;
   
  constructor(
    private formBuilder: FormBuilder,
    private tokenService : TokenService, 
    private authService : AuthService, 
    private router : Router){

      this.form= this.formBuilder.group({
        nombreUsuario:['',[Validators.required]],  
        password:['', [Validators.required, Validators.min(0), Validators.max(8)]],  
      })
    }

  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get Nombre(){
    return this.form.get("nombreUsuario");
  }

  get Contra(){
    return this.form.get("password");
  }


  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.erroMsj = err.error.mensaje;
        console.log(this.erroMsj);
      })
  }


  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onLogin();
      this.router.navigate(['']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
