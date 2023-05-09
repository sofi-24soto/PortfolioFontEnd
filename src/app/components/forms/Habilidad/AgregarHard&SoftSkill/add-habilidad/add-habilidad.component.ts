import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent implements OnInit{
  form: FormGroup;
  nombre: string;
  porcentaje: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private habilidadService: HabilidadService, 
    private router: Router) {

      this.form= this.formBuilder.group({
        nombre:['',[Validators.required]],  
        porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],  
      })

     }

  ngOnInit(): void {
  }
  
  get Habilidad(){
    return this.form.get("nombre");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  onCreate(): void{
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

  limpiar(){
    this.form.reset();
  }

}
