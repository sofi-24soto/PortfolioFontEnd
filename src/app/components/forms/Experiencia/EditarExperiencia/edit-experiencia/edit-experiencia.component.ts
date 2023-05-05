import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImageExperienciaService } from 'src/app/servicios/image-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent  implements OnInit{
  experiencia: Experiencia;
  
  constructor(
    private experienciaService: ExperienciaService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    private imgExperienciaService: ImageExperienciaService){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.ver(id).subscribe(
      data =>{
        this.experiencia = data;
      }
    )
  }

  editarExperiencia(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencia.url_logoEmpresa = this.imgExperienciaService.urlExperiencia
    this.experienciaService.update(this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        //alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  limpiar(){}

   //Para las imagenes
   uploadImgExperiencia ($event:any){
   const id = this.activatedRouter.snapshot.params['id'];
   const experiencia = "Experiencia_" + id;
    this.imgExperienciaService.uploadImg($event, experiencia)
   } 

}
