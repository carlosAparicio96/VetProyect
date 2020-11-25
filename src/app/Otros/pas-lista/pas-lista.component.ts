import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pas-lista',
  templateUrl: './pas-lista.component.html',
  styleUrls: ['./pas-lista.component.css']
})
export class PasListaComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  headers=["nombre","especie","raza","ultima_actualizacion"]
  pacientes=[]

  paciente(id){
    console.log("id:",this.pacientes[id].id)
    this.router.navigate(['/pacientes',this.pacientes[id].id])
  }
  crearPaciente(){
    this.router.navigate(['/pas-crear'])
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
