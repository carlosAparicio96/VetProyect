import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExEditComponent } from './ex-edit/ex-edit.component';
import { AddMeComponent } from './add-me/add-me.component';
import { EditaMedioComponent } from './edita-medio/edita-medio.component';
import { EditaMedicoComponent } from './edita-medico/edita-medico.component';
import { ListaExamenesComponent } from './lista-examenes/lista-examenes.component';
import { CrearExamenComponent } from './crear-examen/crear-examen.component';



@NgModule({
  declarations: [ExEditComponent,AddMeComponent, EditaMedioComponent, EditaMedicoComponent, ListaExamenesComponent, CrearExamenComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExEditComponent,
    AddMeComponent
  ]
})
export class OtrosModule { }
