import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddEducacionComponent } from './components/forms/Educacion/AgregarEducacion/add-educacion/add-educacion.component';
import { EditEducacionComponent } from './components/forms/Educacion/EditarEducacion/edit-educacion/edit-educacion.component';
import { AddExperienciaComponent } from './components/forms/Experiencia/AgregarExperiencia/add-experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './components/forms/Experiencia/EditarExperiencia/edit-experiencia/edit-experiencia.component';
import { AddHabilidadComponent } from './components/forms/Habilidad/AgregarHard&SoftSkill/add-habilidad/add-habilidad.component';
import { EditHabilidadComponent } from './components/forms/Habilidad/EditarHabilidad/edit-habilidad/edit-habilidad.component';
import { AddProyectoComponent } from './components/forms/Proyecto/AgregarProyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/forms/Proyecto/EditarProyecto/edit-proyecto/edit-proyecto.component';
import { EditPortadaComponent } from './components/forms/editarPortada/edit-portada/edit-portada.component';
import { AddRedesComponent } from './components/forms/Redes/addRed/add-redes/add-redes.component';



const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addExperiencia', component: AddExperienciaComponent},
  {path: 'addEducacion', component: AddEducacionComponent},
  {path: 'addHabilidad', component: AddHabilidadComponent},
  {path: 'addProyecto', component: AddProyectoComponent},
  {path: 'addRedes', component: AddRedesComponent},
  {path: 'editHabilidad/:id', component: EditHabilidadComponent},
  {path: 'editEducacion/:id', component: EditEducacionComponent},
  {path: 'editExperiencia/:id', component: EditExperienciaComponent},
  {path: 'editProyecto/:id', component: EditProyectoComponent}, 
  {path: 'editPortada/:id', component: EditPortadaComponent},
 
  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
