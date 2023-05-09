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
  form:FormGroup;
  url_imgProyecto : string  ;
  tituloProyecto : string;
  url_proyecto : string;
  descripcion : string;
  fechaInicio : string;
  fechaFin: string;
  constructor(
               private formBuilder: FormBuilder,
               private proyectoService : ProyectoService, 
               private router : Router,
               private imgProyectoService: ImageProyectoService){

                this.form= this.formBuilder.group({
                  url_imgProyecto:[''],
                  tituloProyecto:['',[Validators.required]],
                  url_proyecto:['',[Validators.required]],
                  descripcion:['',[Validators.required]],
                  fechaInicio:['',[Validators.required]],
                  fechaFin:['',[Validators.required]],
           
               })
               }

  ngOnInit(): void {}


  /*   get Imagen(){
    return this.form.get("url_logoEmpresa");
  } */
  get Titulo(){
    return this.form.get("tituloProyecto");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get FechaI(){
    return this.form.get("fechaInicio");
  } 
  get FechaF(){
    return this.form.get("fechaFin");
  }
  get Link(){
    return this.form.get("url_proyecto");
  }

  onCreate(): void{
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

  //Para las imagenes
  uploadImgProyecto($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
   const proye = "Proyecto_" + this.url_imgProyecto;
    this.imgProyectoService.uploadImg($event, proye)
   }

   onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
      this.router.navigate(['']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  limpiar(){
   this.form.reset();
  }

  

}
