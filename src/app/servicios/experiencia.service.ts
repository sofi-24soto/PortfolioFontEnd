import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url:string = environment.apiURL + '/experiencia/'
 //url = "http://localhost:8080/experiencia/"
 
  constructor(private httpClient: HttpClient) { }

  // Obtener lista de experiencia
  public list(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  // Ver datos de una experiencia
  public ver(id : number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }

  // Crear una nueva experiencia
  public create(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  // Editar una experiencia
  public update(id:number,experiencia : Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, experiencia);
  }

  // Borrar una experiencia
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
