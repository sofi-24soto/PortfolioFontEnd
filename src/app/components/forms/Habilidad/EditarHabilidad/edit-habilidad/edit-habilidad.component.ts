import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit{
  form: FormGroup;
  habilidad: Habilidad;

  constructor(
    private formBuilder: FormBuilder, 
    private habilidadService: HabilidadService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {

      this.form= this.formBuilder.group({
        nombre:['',[Validators.required]],  
        porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],
          
      })
     }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.ver(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error...!! vuelva a intentarlo nuevamente");
        this.router.navigate(['']);
      }
    )
  }

  get Habilidad(){
    return this.form.get("nombre");
  }
  
  get Porcentaje(){
    return this.form.get("porcentaje");
  }

 onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.update(id,this.form.value).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error...!! vuelva a intentarlo nuevamente");
        this.router.navigate(['']);
      }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      this.router.navigate(['']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
