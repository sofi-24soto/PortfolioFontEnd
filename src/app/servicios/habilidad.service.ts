import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url:string = environment.apiURL + '/habilidad/'
  //url = "http://localhost:8080/habilidad/"

  constructor(private httpClient: HttpClient) { }

   // Obtener lista de habilidad
   public list(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  // Ver datos de una habilidad
  public ver(id : number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`);
  }

  // Crear una nueva habilidad
  public create(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad);
  }

  // Editar una habilidad
  public update(id: number,habilidad : Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, habilidad);
  }

  // Borrar una habilidad
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
