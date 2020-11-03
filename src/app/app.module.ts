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
/* import { MedicoAddComponent } from './otros/medico-add/medico-add.component'; */


import { MatButtonModule, } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



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
    /* MedicoAddComponent */
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
    MatSelectModule

  ],
  providers: [VetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
