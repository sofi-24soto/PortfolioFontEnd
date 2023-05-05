import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageEducacionService } from 'src/app/servicios/image-educacion.service';




@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  url_logoEstudio : string;
  nombre : string;
  estudio : string;
  url_Estudio : string;
  descripcion : string;
  fechaInicio : string;
  fechaFin : string;

  constructor(
    private educacionService: EducacionService, 
    private router : Router,
    public imgEducacionService : ImageEducacionService) {}

  ngOnInit(): void {}

 
  crearEducacion(): void{
    const edu = new Educacion(this.url_logoEstudio = this.imgEducacionService.urlEducacion,this.nombre,this.estudio,
      this.url_Estudio,this.descripcion,this.fechaInicio,this.fechaFin)
    this.educacionService.create(edu).subscribe(
      data =>{
        //alert("Se agrego una nueva educacion correctamente..!!");
        this.router.navigate(['']);
      }, err =>{
        //alert("Se ha producido un error..!! Intente nuevamente");
        this.router.navigate(['']);
      }
    )
  }

  limpiar(){
   this.url_logoEstudio = "";
   this.nombre = "";
   this.estudio = "";
   this.url_Estudio = "";
   this.descripcion = "";
   this.fechaInicio = "";
   this.fechaFin = "";
  }

  //Para las imagenes
  uploadImgEducacion($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
   const educacion = "Educacion_" + this.url_logoEstudio;
    this.imgEducacionService.uploadImg($event, educacion)
   } 

 

}
