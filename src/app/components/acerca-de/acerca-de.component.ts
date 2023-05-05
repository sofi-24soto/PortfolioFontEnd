import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  persona: Persona;
  isLogged:boolean=false;
  
  constructor(private personaService: PersonaService ,private tokenService : TokenService){}

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona():void{
    this.personaService.ver(1).subscribe(data => {
      this.persona=data
    });
  }

}
