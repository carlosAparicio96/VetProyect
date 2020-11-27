import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { VetService } from './Service/vet.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Componentes/login/login.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { BarraComponent } from './Componentes/barra/barra.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { PacientesComponent } from './Componentes/pacientes/pacientes.component';
import { MedicosComponent } from './Componentes/medicos/medicos.component';
import { ClientesComponent } from './Componentes/clientes/clientes.component';
import { SesionesComponent } from './Componentes/sesiones/sesiones.component';
import { ExamenesComponent } from './Componentes/examenes/examenes.component';
import { ConsultasComponent } from './Componentes/consultas/consultas.component';
import { DialogComponent } from './Otros/dialog/dialog.component';
import { AddMeComponent } from './Otros/add-me/add-me.component';

import { MatButtonModule, } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EditaMedicoComponent } from './Otros/edita-medico/edita-medico.component';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire';
import { ListaExamenesComponent } from './Otros/lista-examenes/lista-examenes.component';
import { ExCrearComponent } from './Otros/ex-crear/ex-crear.component';
import { CliCrearComponent } from './Otros/cli-crear/cli-crear.component';
import { CliListaComponent } from './Otros/cli-lista/cli-lista.component';
import { PasCrearComponent } from './Otros/pas-crear/pas-crear.component';
import { SesCrearComponent } from './Otros/ses-crear/ses-crear.component';
import { PasListaComponent } from './Otros/pas-lista/pas-lista.component';
import { PasCrear2Component } from './Otros/pas-crear2/pas-crear2.component';
import { SesListaComponent } from './Otros/ses-lista/ses-lista.component';
import { SesCrear2Component } from './Otros/ses-crear2/ses-crear2.component';
import { PasBuscadosComponent } from './Otros/pas-buscados/pas-buscados.component';
import { ConListaComponent } from './Otros/con-lista/con-lista.component';
import { ConsultaExamenComponent } from './Usuario/consulta-examen/consulta-examen.component';
import { ExamenEncontradoComponent } from './Usuario/examen-encontrado/examen-encontrado.component';
import { ServiciosComponent } from './Usuario/servicios/servicios.component';
import { ContactoComponent } from './Usuario/contacto/contacto.component';
import { RealizarConsultaComponent } from './Usuario/realizar-consulta/realizar-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    BarraComponent,
    FooterComponent,
    PacientesComponent,
    MedicosComponent,
    ClientesComponent,
    SesionesComponent,
    ExamenesComponent,
    ConsultasComponent,
    DialogComponent,
    AddMeComponent,
    EditaMedicoComponent,
    ListaExamenesComponent,
    ExCrearComponent,
    CliCrearComponent,
    CliListaComponent,
    PasCrearComponent,
    SesCrearComponent,
    PasListaComponent,
    PasCrear2Component,
    SesListaComponent,
    SesCrear2Component,
    PasBuscadosComponent,
    ConListaComponent,
    ConsultaExamenComponent,
    ExamenEncontradoComponent,
    ServiciosComponent,
    ContactoComponent,
    RealizarConsultaComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDRcYqGZcjPkUiIAHh7aY4mzEJWEaTjecw",
      authDomain: "veterinaria-1aa69.firebaseapp.com",
      databaseURL: "https://veterinaria-1aa69.firebaseio.com",
      projectId: "veterinaria-1aa69",
      storageBucket: "veterinaria-1aa69.appspot.com",
      messagingSenderId: "299371967821",
      appId: "1:299371967821:web:300721168a6bf87ffeb304",
      measurementId: "G-T4LX0HSBVB"
    }),
    AngularFireStorageModule
  ],
  providers: [VetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
