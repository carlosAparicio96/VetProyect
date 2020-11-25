import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-ses-crear',
  templateUrl: './ses-crear.component.html',
  styleUrls: ['./ses-crear.component.css']
})
export class SesCrearComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  newSesion = this.fb.group({
    titulo:['', Validators.required],
    observaciones: ['', Validators.required],
    receta:['', Validators.required],
    rut_medico:['', Validators.required],
    id_paciente:['', Validators.required]
  });

  data={
    id:''
  }
  paciente=[]

  crear(){ 
    this.newSesion.value.id_paciente=this.data.id
    this.vetService.crearSesion(this.newSesion.value).then(result => {
      if(result>0){
        alert('Sesión Creada!! ahora puede encontrarla en el perfil del paciente')
        this._location.back()
      }else{
        alert('Rut del médico no existe')
      }
    })
  }

  cancelar(){
    this._location.back()
  }

  async ngOnInit(){
    await this._ac.paramMap.subscribe(params =>{
      this.data.id=params.get('id')
      this.vetService.buscarPaciente(this.data).then((result :any) => {
        this.paciente.push(result[0])
      })
    })
  }

}
