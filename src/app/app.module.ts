import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HeaderComponent } from './components/header/header.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { AddEducacionComponent } from './components/forms/Educacion/AgregarEducacion/add-educacion/add-educacion.component';
import { EditEducacionComponent } from './components/forms/Educacion/EditarEducacion/edit-educacion/edit-educacion.component';
import { AddExperienciaComponent } from './components/forms/Experiencia/AgregarExperiencia/add-experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './components/forms/Experiencia/EditarExperiencia/edit-experiencia/edit-experiencia.component';
import { AddHabilidadComponent } from './components/forms/Habilidad/AgregarHard&SoftSkill/add-habilidad/add-habilidad.component';
import { EditHabilidadComponent } from './components/forms/Habilidad/EditarHabilidad/edit-habilidad/edit-habilidad.component';
import { AddProyectoComponent } from './components/forms/Proyecto/AgregarProyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/forms/Proyecto/EditarProyecto/edit-proyecto/edit-proyecto.component';
import { EditPortadaComponent } from './components/forms/editarPortada/edit-portada/edit-portada.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AddRedesComponent } from './components/forms/Redes/addRed/add-redes/add-redes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EducacionComponent,
    LoginComponent,
    RedesSocialesComponent,
    RegistroComponent,
    FooterComponent,
    MenuComponent,
    HardSoftSkillsComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HeaderComponent,
    AddEducacionComponent,
    EditEducacionComponent,
    AddExperienciaComponent,
    EditExperienciaComponent,
    AddHabilidadComponent,
    EditHabilidadComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    EditPortadaComponent,
    AddRedesComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideStorage(() => getStorage()),
    
  
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
