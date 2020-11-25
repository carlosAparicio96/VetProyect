import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-cli-crear',
  templateUrl: './cli-crear.component.html',
  styleUrls: ['./cli-crear.component.css']
})
export class CliCrearComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  newCliente = this.fb.group({
    rut:['', Validators.required],
    nombre: ['', Validators.required],
    apellido:['', Validators.required],
    correo:['', [Validators.required,Validators.email]],
    telefono:['', Validators.required],
    direccion:['', Validators.required]
  });

  
  crear(){
    if(this.newCliente.valid){
      this.vetService.newCliente(this.newCliente.value).then(result=>{
        if(result==1){
          alert('Cliente Creado!')
          this._location.back()
        }else{
          alert('Error: el rut ingresado ya existe')
        }
      })
    }else{
      alert('Falta completar algun campo')
    }
  }

  cancelar(){
    this._location.back();
  }

  ngOnInit(): void {
  }

}
