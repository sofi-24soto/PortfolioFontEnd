import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent implements OnInit{
  nombre: string;
  porcentaje: number = 0;
  constructor(private habilidadService: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }


 crearHabilidad(): void{
    const habilidad = new Habilidad(this.nombre, this.porcentaje);
    this.habilidadService.create(habilidad).subscribe(
      data => {
        //alert("Se agrego una nuevo habilidad correctamente..!!");
        this.router.navigate(['']);
      }, err =>{
        //alert("Se ha producido un error..!! Intente nuevamente");
        this.router.navigate(['']);
      }
    )
  }

  limpiar(){
    this.nombre = "";
    this.porcentaje = 0;
  }

}
