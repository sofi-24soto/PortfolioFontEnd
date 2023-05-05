import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  isLogged : boolean = false;
  experiencias : Experiencia[] = [];

 

  constructor(private experienciaService : ExperienciaService, private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.experienciaService.list().subscribe(data => {this.experiencias=data});
  }
 
  delete(id:number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err =>{
          this.cargarExperiencia();
        })
    }}
  
}
