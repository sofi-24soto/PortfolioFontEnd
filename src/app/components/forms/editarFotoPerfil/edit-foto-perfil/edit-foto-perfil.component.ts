import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-foto-perfil',
  templateUrl: './edit-foto-perfil.component.html',
  styleUrls: ['./edit-foto-perfil.component.css']
})
export class EditFotoPerfilComponent implements OnInit{
  persona: Persona;
  constructor(
    private personaService:PersonaService,  
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imgService : ImageService
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
    this.persona.url_banner = this.imgService.url
    this.personaService.update(id,this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la datos de la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImg($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const portada = "perfil_" + id;
    this.imgService.uploadImg($event, portada)
  }
}
