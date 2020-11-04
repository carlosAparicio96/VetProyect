import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { FormBuilder, Validators } from '@angular/forms';  
import { Location } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-me',
  templateUrl: './add-me.component.html',
  styleUrls: ['./add-me.component.css']
})
export class AddMeComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private fb: FormBuilder,private _location: Location) { }

  profileForm = this.fb.group({
    rut:['', Validators.required],
    apellido: ['', Validators.required],
    nombre: ['', Validators.required],
    especialidad:['', Validators.required],
    correo: ['', [Validators.required,Validators.email]],
    telefono:['', Validators.required],
  });

  async addMedico(){

    console.log("add-medico",this.profileForm.valid)
    if(this.profileForm.valid){

      await this.vetService.agregarMedico(this.profileForm.value).then(result => {
        console.log('respuesta api',result)

        if(result==1){
          alert("Medico Agregado con exito")
          this._location.back();
        }else{
          alert("El rut ingresado ya existe")
        }
      })
    }
    else{
        alert("Falta rellenar algun campo")
    }

  }

  back(){
    this._location.back();
  }


  ngOnInit(): void {
  }

}
