import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl:string = environment.apiURL + 'auth/'
 //authUrl : string = "http://localhost:8080/auth/";

  constructor(private httpClient : HttpClient) { }

  public nuevo(nuevoUsuario : NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario : LoginUsuario): Observable<any>{
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario);
  }
}
