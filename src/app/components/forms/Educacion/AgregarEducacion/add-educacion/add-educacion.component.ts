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
  form:FormGroup;
  url_logoEstudio : string;
  nombre : string;
  estudio : string;
  url_Estudio : string;
  descripcion : string;
  fechaInicio : string;
  fechaFin : string;

  constructor(
    private formBuilder: FormBuilder,
    private educacionService: EducacionService, 
    private router : Router,
    public imgEducacionService : ImageEducacionService) {

      this.form= this.formBuilder.group({
        url_logoEstudio:[''],
        nombre:['',[Validators.required]],
        estudio:['',[Validators.required]],
        url_Estudio:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        fechaInicio:['',[Validators.required]],
        fechaFin:['',[Validators.required]],
 
     })
    }

  ngOnInit(): void {}

  /*   get Imagen(){
    return this.form.get("url_logoEmpresa");
  } */
  get NombreEducacion(){
    return this.form.get("nombre");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get Titulo(){
    return this.form.get("estudio");
  }
  get FechaI(){
    return this.form.get("fechaInicio");
  } 
  get FechaF(){
    return this.form.get("fechaFin");
  }
  get Link(){
    return this.form.get("url");
  }
 
  onCreate(): void{
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

    //Para las imagenes
    uploadImgEducacion($event:any){
      //const id = this.activatedRouter.snapshot.params['id'];
     const educacion = "Educacion_" + this.url_logoEstudio;
      this.imgEducacionService.uploadImg($event, educacion)
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
