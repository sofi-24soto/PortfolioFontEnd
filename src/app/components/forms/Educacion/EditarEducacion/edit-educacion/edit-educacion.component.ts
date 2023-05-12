import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageEducacionService } from 'src/app/servicios/image-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion: Educacion;

  constructor( 
    private educacionService:EducacionService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    private imgEducacionService: ImageEducacionService ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.ver(id).subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  editarEducacion(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.url_logoEstudio = this.imgEducacionService.urlEducacion
    this.educacionService.update(id,this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        //alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }



   //Para las imagenes
   uploadImgEducacion($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const educacion = "Educacion_" + id;
     this.imgEducacionService.uploadImg($event, educacion)
    } 

}
