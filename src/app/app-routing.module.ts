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
import { CliCrearComponent } from './Otros/cli-crear/cli-crear.component';
import { CliListaComponent } from './Otros/cli-lista/cli-lista.component';
import { ConListaComponent } from './Otros/con-lista/con-lista.component';
import { EditaMedicoComponent } from './Otros/edita-medico/edita-medico.component';
import { ExCrearComponent } from './Otros/ex-crear/ex-crear.component';
import { ListaExamenesComponent } from './Otros/lista-examenes/lista-examenes.component';
import { PasBuscadosComponent } from './Otros/pas-buscados/pas-buscados.component';
import { PasCrearComponent } from './Otros/pas-crear/pas-crear.component';
import { PasCrear2Component } from './Otros/pas-crear2/pas-crear2.component';
import { PasListaComponent } from './Otros/pas-lista/pas-lista.component';
import { SesCrearComponent } from './Otros/ses-crear/ses-crear.component';
import { SesCrear2Component } from './Otros/ses-crear2/ses-crear2.component';
import { SesListaComponent } from './Otros/ses-lista/ses-lista.component';
import { ConsultaClienteComponent } from './Usuario/consulta-cliente/consulta-cliente.component';
import { ConsultaExamenComponent } from './Usuario/consulta-examen/consulta-examen.component';
import { ContactoComponent } from './Usuario/contacto/contacto.component';
import { ExamenEncontradoComponent } from './Usuario/examen-encontrado/examen-encontrado.component';
import { RealizarConsultaComponent } from './Usuario/realizar-consulta/realizar-consulta.component';
import { ServiciosComponent } from './Usuario/servicios/servicios.component';

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
    path:'edita-medico',
    component: EditaMedicoComponent
  },
  {
    path:'pacientes/:id',
    component: PacientesComponent
  },
  {
    path:'pas-crear',
    component: PasCrearComponent
  },
  {
    path:'pas-crear2/:id',
    component: PasCrear2Component
  },
  {
    path:'pas-buscados',
    component: PasBuscadosComponent
  },
  {
    path:'pas-lista',
    component: PasListaComponent
  },
  {
    path:'clientes/:id',
    component: ClientesComponent
  },
  {
    path:'cli-crear',
    component: CliCrearComponent
  },
  {
    path:'cli-lista',
    component: CliListaComponent
  },
  {
    path:'examenes',
    component: ExamenesComponent
  },
  {
    path:'sesiones/:id',
    component: SesionesComponent
  },
  {
    path:'ses-lista',
    component: SesListaComponent
  },
  {
    path:'ses-crear/:id',
    component: SesCrearComponent
  },
  {
    path:'ses-crear2',
    component: SesCrear2Component
  },
  {
    path:'consultas/:id',
    component: ConsultasComponent
  },
  {
    path:'con-lista',
    component: ConListaComponent
  },
  {
    path:'lista-examenes',
    component: ListaExamenesComponent
  },
  {
    path:'ex-crear',
    component: ExCrearComponent
  },

  //USURIO

  {
    path:'consulta-examen',
    component: ConsultaExamenComponent
  },
  {
    path:'servicios',
    component: ServiciosComponent
  },  
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'realizar-consulta',
    component: RealizarConsultaComponent
  },
  {
    path:'examen-encontrado/:id',
    component: ExamenEncontradoComponent
  },
  {
    path:'consulta-cliente',
    component: ConsultaClienteComponent
  },

  {
    path:'',
    redirectTo:'consulta-examen',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
