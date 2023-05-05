import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // url = environment.url + 'persona/'
  url = "http://localhost:8080/persona/"

  constructor(private httpClient: HttpClient) { }

   // Obtener lista de persona
   public list(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  // Ver datos de una persona
  public ver(id : number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  // Crear una nueva persona
  public create(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  // Editar una persona
  public update(persona : Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona);
  }

  // Borrar una persona
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }



}
