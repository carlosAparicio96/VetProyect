import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtrosModule } from '../Otros/otros.module';
import { MedicosComponent } from './medicos/medicos.component';



@NgModule({
  declarations: [MedicosComponent],
  imports: [
    CommonModule,
    OtrosModule
  ]
})
export class ComponentesModule { }
