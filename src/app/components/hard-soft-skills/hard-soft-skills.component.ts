import { Component } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { DatosService } from 'src/app/servicios/datos.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent {
  isLogged : boolean = false;
  habilidad: Habilidad[] = [];

  constructor(private habilidadService: HabilidadService,private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.habilidadService.list().subscribe(data => {this.habilidad=data});
  }

  delete(id:number){
    if(id != undefined){
      this.habilidadService.delete(id).subscribe(
        data =>{
          this.cargarHabilidad();
        }, err =>{
          this.cargarHabilidad();
        })
    }}
}
