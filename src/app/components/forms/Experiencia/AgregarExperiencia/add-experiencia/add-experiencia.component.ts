import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImageExperienciaService } from 'src/app/servicios/image-experiencia.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  url_logoEmpresa : string;
  nombre : string;
  url: string;
  puesto : string;
  descripcion : string;
  fechaInicio: string;
  fechaFin: string;
  constructor(
    private experienciaService : ExperienciaService, 
    private router: Router,
    private imgExperienciaService: ImageExperienciaService
    ){
      
    }

  ngOnInit(): void {}

 

  crearExperiencia(): void{
    const exp = new Experiencia(this.url_logoEmpresa = this.imgExperienciaService.urlExperiencia, this.nombre, this.url, this.puesto, this.descripcion,
      this.fechaInicio, this.fechaFin)
    this.experienciaService.create(exp).subscribe( 
      data => { 
        //alert("Se agrego una nueva experiencia correctamente..!!");
        this.router.navigate(['']);
      }, err => {
        //alert("Se ha producido un error..!! Intente nuevamente");
        this.router.navigate(['']);
      })
    }

    limpiar(){
      this.url_logoEmpresa = "";
      this.nombre = "";
      this.descripcion = "";
      this.puesto = "";
      this.fechaInicio = "";
      this.fechaFin = "";
      this.url = ""
    }

  //Para las imagenes
  uploadImgExperiencia ($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
   const experiencia = "Experiencia_" + this.url_logoEmpresa;
    this.imgExperienciaService.uploadImg($event, experiencia)
   } 
 
}
