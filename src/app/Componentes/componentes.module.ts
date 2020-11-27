import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtrosModule } from '../Otros/otros.module';
import { MedicosComponent } from './medicos/medicos.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConListaComponent } from './con-lista/con-lista.component';



@NgModule({
  declarations: [MedicosComponent, ConsultaComponent, ConListaComponent],
  imports: [
    CommonModule,
    OtrosModule
  ]
})
export class ComponentesModule { }
