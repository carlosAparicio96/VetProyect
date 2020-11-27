import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pas-crear2',
  templateUrl: './pas-crear2.component.html',
  styleUrls: ['./pas-crear2.component.css']
})
export class PasCrear2Component implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  newPaciente = this.fb.group({
    nombre:['', Validators.required],
    especie: ['', Validators.required],
    raza:['', Validators.required],
    edad:['', Validators.required],
    Sexo:['', Validators.required],
    peso:['', Validators.required],
    enfermedades:['', Validators.required],
    tratamientos:['', Validators.required]
  });

  data={rut:''}
  cliente=[]

  crear(){
    this.newPaciente.value.rut_cliente=this.data.rut
    this.vetService.crearPaciente(this.newPaciente.value).then(result => {
      if(result==1){
        alert('Paciente creado!!')
        this._location.back()
      }else{
        alert('ocurrio un error')
      }
    })
  }

  cancelar(){
    this._location.back()
  }

  async ngOnInit(){
    await this._ac.paramMap.subscribe(params =>{
      this.data.rut=params.get('id')
      this.vetService.buscarCliente(this.data).then((result:any) => {
        this.cliente.push(result[0])
      })
    })
  }

}
