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
  form: FormGroup;
  url_redes : string;
  icoFont : string;

  constructor(
    private formBuilder: FormBuilder,
    private redesService: RedesService,
    private router : Router
    
  ){

    this.form= this.formBuilder.group({
      url_redes:['',[Validators.required]],  
      icoFont:['', [Validators.required]],  
    })
  }

  ngOnInit(): void {}

  get Link(){
    return this.form.get("url_redes");
  }

  get Icono(){
    return this.form.get("icoFont");
  }

  onCreate(): void{
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

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
      this.router.navigate(['']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }





  limpiar(): void{
   this.form.reset();
  }

  

}
