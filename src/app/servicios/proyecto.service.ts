import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url:string = environment.apiURL + '/proyecto/'
  //url = "http://localhost:8080/proyecto/"

  constructor(private httpClient: HttpClient) { }

   // Obtener lista de proyecto
   public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  // Ver datos de un proyecto
  public ver(id : number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  // Crear un nueva proyecto
  public create(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }

  // Editar un proyecto
  public update(proyecto : Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', proyecto);
  }

  // Borrar un proyecto
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
