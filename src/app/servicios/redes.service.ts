import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  url:string = environment.apiURL + 'redes/'
  //url = "http://localhost:8080/redes/"

  constructor(private httpClient: HttpClient) { }

   // Obtener lista de redes
   public list(): Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.url + 'lista');
  }

  // Ver datos de una red
  public ver(id : number): Observable<Redes>{
    return this.httpClient.get<Redes>(this.url + `ver/${id}`);
  }

  // Crear una nueva red
  public create(redes: Redes): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', redes);
  }

  // Editar una red
  public update(redes : Redes): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', redes);
  }

  // Borrar una red
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
