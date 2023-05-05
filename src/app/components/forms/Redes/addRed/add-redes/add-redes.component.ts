import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-add-redes',
  templateUrl: './add-redes.component.html',
  styleUrls: ['./add-redes.component.css']
})
export class AddRedesComponent implements OnInit {
  url_redes : string;
  icoFont : string;

  constructor(
    private redesService: RedesService,
    private router : Router
    
  ){}
  ngOnInit(): void {
    
  }

  

  crearRed(): void{
    const redSocial = new Redes(this.url_redes, this.icoFont);
    this.redesService.create(redSocial).subscribe(
      data => {
        //alert("Se agrego una nueva red social correctamente..!!");
        this.router.navigate(['']);
      }, err =>{
        //alert("Se ha producido un error..!! Intente nuevamente");
        this.router.navigate(['']);
      }
    )
  }

  limpiar(): void{
    this.url_redes = "";
    this.icoFont = "";
  }

  

}
