import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { FormBuilder, Validators } from '@angular/forms';  
import { Location } from '@angular/common';

@Component({
  selector: 'app-ex-crear',
  templateUrl: './ex-crear.component.html',
  styleUrls: ['./ex-crear.component.css']
})
export class ExCrearComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private fb: FormBuilder,private _location: Location) { }

  ngOnInit(): void {

  }

  profileForm = this.fb.group({
    codigo:['1', Validators.required],
    estado: ['1', Validators.required],
    clinica_solicitante: ['', Validators.required],
    medico_solicitante:['', Validators.required],
    tipo_examen:['', Validators.required],
    examen:['', Validators.required],
    nombre_paciente:['', Validators.required],
    especie:['', Validators.required],
    raza:['', Validators.required],
    sexo:['', Validators.required],
    edad:['', Validators.required],
    nombre_propietario:['', Validators.required],
    correo_propietario:['', [Validators.required,Validators.email]],
    fono_propietario:['', Validators.required] 
  });

  si=0;
  modal=0;

  crear(){

      //Codigo aleatorio
    var i;
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    var code = "";
    for (i=0; i<6; i++) code +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
    console.log(code)  
    this.profileForm.value.codigo=code
    //Codigo aleatorio
    

    if(this.profileForm.valid){
      this.modal=1;
      this.vetService.crearExamen(this.profileForm.value).then(result => {
        if(result==1){
          this.si=1;
        }else{
          alert('No se pudo crear el examen, vuelva a intentar')
        }
      })
    }else{
      alert('Falta rellenar algun campo')
    }
  }

  finalizar(){
    this.vetService.mailRegistroExamen(this.profileForm.value).then(result => {
      console.log('Correo enviando')
    })
    this.router.navigate(['examenes'])
  }

  cancelar(){
    this._location.back();
  }

}
