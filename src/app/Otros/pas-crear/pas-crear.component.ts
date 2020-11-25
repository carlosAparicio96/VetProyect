import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-pas-crear',
  templateUrl: './pas-crear.component.html',
  styleUrls: ['./pas-crear.component.css']
})
export class PasCrearComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }


  newPaciente = this.fb.group({
    nombre:['', Validators.required],
    especie: ['', Validators.required],
    raza:['', Validators.required],
    edad:['', Validators.required],
    Sexo:['', Validators.required],
    peso:['', Validators.required],
    enfermedades:['', Validators.required],
    tratamientos:['', Validators.required],
    rut_cliente:['', Validators.required]
  });


  cancelar(){
    this._location.back()
  }
  crear(){
    if(this.newPaciente.valid){
      this.vetService.crearPaciente(this.newPaciente.value).then(result =>{
        if(result==1){
          alert('Paciente creardo!, ahora puede encontrarlo en la lista de pacientes')
          this._location.back()
        }else{
          alert('Rut de cliente no se encuentra, porfavor ingrese uno existente')
        }
      })
    }else{
      alert('Falta rellenar algun campo')
    }
  }

  ngOnInit(){
    
  }

}
