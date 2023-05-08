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
  form:FormGroup;
  url_logoEmpresa : string;
  nombre : string;
  url: string;
  puesto : string;
  descripcion : string;
  fechaInicio: string;
  fechaFin: string;
  constructor(
    private formBuilder: FormBuilder,
    private experienciaService : ExperienciaService, 
    private router: Router,
    private imgExperienciaService: ImageExperienciaService
    ){
      this.form= this.formBuilder.group({
        url_logoEmpresa:[''],
        nombre:['',[Validators.required]],
        url:['',[Validators.required]],
        puesto:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        fechaInicio:['',[Validators.required]],
        fechaFin:['',[Validators.required]],
 
     })
    }

  ngOnInit(): void {}

 
/*   get Imagen(){
    return this.form.get("url_logoEmpresa");
  } */
  get NombreEmpresa(){
    return this.form.get("nombre");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get Puesto(){
    return this.form.get("puesto");
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

      //Para las imagenes
  uploadImgExperiencia ($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
   const experiencia = "Experiencia_" + this.url_logoEmpresa;
    this.imgExperienciaService.uploadImg($event, experiencia)
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
