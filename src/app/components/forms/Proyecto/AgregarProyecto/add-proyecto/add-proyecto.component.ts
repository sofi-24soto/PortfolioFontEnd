import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageProyectoService } from 'src/app/servicios/image-proyecto.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  url_imgProyecto : string  ;
  tituloProyecto : string;
  url_proyecto : string;
  descripcion : string;
  fechaInicio : string;
  fechaFin: string;
  constructor(
               private proyectoService : ProyectoService, 
               private router : Router,
               private imgProyectoService: ImageProyectoService){}

  ngOnInit(): void {}


  crearProyecto(): void{
    const pro = new Proyecto(this.url_imgProyecto = this.imgProyectoService.urlProyecto,this.tituloProyecto,
      this.url_proyecto,this.descripcion,this.fechaInicio,this.fechaFin);
    this.proyectoService.create(pro).subscribe(
      data =>{
        //alert("Se agrego una nuevo proyecto correctamente..!!");
        this.router.navigate(['']);
      }, err =>{
        //alert("Se ha producido un error..!! Intente nuevamente");
        this.router.navigate(['']);  
      }
    )
    
  }

  limpiar(){
    this.url_imgProyecto = "";
    this.tituloProyecto = "";
    this.url_proyecto = "";
    this.descripcion = "";
    this.fechaInicio = "";
    this.fechaFin = "";
  }

  //Para las imagenes
  uploadImgProyecto($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
   const proye = "Proyecto_" + this.url_imgProyecto;
    this.imgProyectoService.uploadImg($event, proye)
   }

}
