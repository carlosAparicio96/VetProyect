import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pas-buscados',
  templateUrl: './pas-buscados.component.html',
  styleUrls: ['./pas-buscados.component.css']
})
export class PasBuscadosComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  headers=["nombre","especie","raza","ultima_actualizacion"]
  pacientes=[]
  headers2=["nombre","especie","raza","rut_cliente","ultima_actualizacion"]
  entontrados=[]
  lista=0;
  busqueda={rut_cliente:'', nombre:''}

  paciente(id){
    console.log("id:",this.pacientes[id].id)
    this.router.navigate(['/pacientes',this.pacientes[id].id])
  }
  listado(id){
    this.router.navigate(['/pacientes',this.entontrados[id].id])
  }

  crearPaciente(){
    this.router.navigate(['/pas-crear'])
  }

  async buscar(){
    console.log('busqueda',this.busqueda)
    await this.vetService.getPasRutNombre(this.busqueda).then((result:any) => {
      if(result.length>0){
        for(var i=0; i<result.length; i++){
          this.entontrados.push(result[i])
        }
        this.lista=1
      }else{
        alert('No se encontraron coincidencias')
      }
      console.log('encontrados',this.entontrados)
    })
  }


  async ngOnInit(){
    await this.vetService.listaPacientes().then((result:any) => {
      if(result.length>0){
        for(var i =0; i<result.length; i++){
          this.pacientes.push(result[i])
        }
      }
      console.log('pacientes',this.pacientes)
    })
  }


}
