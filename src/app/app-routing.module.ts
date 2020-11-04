import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarraComponent } from './Componentes/barra/barra.component';
import { ClientesComponent } from './Componentes/clientes/clientes.component';
import { ConsultasComponent } from './Componentes/consultas/consultas.component';
import { ExamenesComponent } from './Componentes/examenes/examenes.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MedicosComponent } from './Componentes/medicos/medicos.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { PacientesComponent } from './Componentes/pacientes/pacientes.component';
import { SesionesComponent } from './Componentes/sesiones/sesiones.component';
import { AddMeComponent } from './Otros/add-me/add-me.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'barra',
    component: BarraComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'medicos',
    component: MedicosComponent
  },
  {
    path:'add-medicos',
    component: AddMeComponent
  },
  {
    path:'pacientes',
    component: PacientesComponent
  },
  {
    path:'clientes',
    component: ClientesComponent
  },
  {
    path:'examenes',
    component: ExamenesComponent
  },
  {
    path:'sesiones',
    component: SesionesComponent
  },
  {
    path:'consultas',
    component: ConsultasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
