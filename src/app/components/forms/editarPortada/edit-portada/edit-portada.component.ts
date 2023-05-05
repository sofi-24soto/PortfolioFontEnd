import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImagePerfilService } from 'src/app/servicios/image-perfil.service';
import { ImagePortadaService } from 'src/app/servicios/image-portada.service';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-portada',
  templateUrl: './edit-portada.component.html',
  styleUrls: ['./edit-portada.component.css']
})
export class EditPortadaComponent implements OnInit {
  persona: Persona;
  constructor(
    private personaService:PersonaService,  
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imgPortadaService: ImagePortadaService,
    public imgPerfilService: ImagePerfilService
  ){}



  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.ver(id).subscribe(
      data =>{
        this.persona = data;
      }
    )
  }

  editarPersona(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.url_banner = this.imgPortadaService.urlPortada
    this.persona.url_fotoPerfil = this.imgPerfilService.urlPerfil
    this.personaService.update(this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        //alert("Error al modificar la datos de la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImgPortada($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
   const portada = "banner_" + id;
    this.imgPortadaService.uploadImg($event, portada)
   } 

   uploadImgPerfil($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
   const perfil = "perfil_" + id;
    this.imgPerfilService.uploadImg($event, perfil)
   }
   

}
