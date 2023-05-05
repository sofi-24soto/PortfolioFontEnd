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
  habilidad: Habilidad = null;

  constructor(
    private habilidadService: HabilidadService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

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

  editarHabilidad(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.update(this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error...!! vuelva a intentarlo nuevamente");
        this.router.navigate(['']);
      }
    )
  }

}
