import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  isLogged:boolean=false;
  proyecto: Proyecto[]=[];

  constructor(private proyectoService : ProyectoService, private tokenService : TokenService){}

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
 }

 cargarProyecto():void{
  this.proyectoService.list().subscribe(
    data => {
      this.proyecto=data;
    })
}

delete(id:number){
  if(id != undefined){
    this.proyectoService.delete(id).subscribe(
      data =>{
        this.cargarProyecto();
      }, err =>{
        this.cargarProyecto();
      })
  }}


}
