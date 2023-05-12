import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageProyectoService } from 'src/app/servicios/image-proyecto.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
 proyecto: Proyecto;

 constructor(
  private proyectoService : ProyectoService, 
  private activatedRouter: ActivatedRoute, 
  private router: Router,
  private imgProyectoService : ImageProyectoService){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.ver(id).subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }
  editarProyecto(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.url_imgProyecto = this.imgProyectoService.urlProyecto
    this.proyectoService.update(id,this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        //alert("Error al modificar los datos de proyecto");
        this.router.navigate(['']);
      }
    )
  }

  //Para las imagenes
  uploadImgProyecto($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const proyecto = "Proyecto_" + id;
     this.imgProyectoService.uploadImg($event, proyecto)
    } 

}
