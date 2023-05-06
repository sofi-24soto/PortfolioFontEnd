import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string = environment.apiURL + 'educacion/'
  //url:string = "http://localhost:8080/educacion/"

  constructor(private httpClient: HttpClient) { }

   // Obtener lista de educacion
   public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  // Ver datos de una educacion
  public ver(id_educacion : number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `ver/${id_educacion}`);
  }

  // Crear una nueva educacion
  public create(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }

  // Editar una educacion
  public update(educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', educacion);
  }

  // Borrar una educacion
  public delete(id_educacion: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id_educacion}`);
  }
}
