import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-ses-crear2',
  templateUrl: './ses-crear2.component.html',
  styleUrls: ['./ses-crear2.component.css']
})
export class SesCrear2Component implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  newSesion = this.fb.group({
    titulo:['', Validators.required],
    observaciones: ['', Validators.required],
    receta:['', Validators.required],
    rut_medico:['', Validators.required],
    id_paciente:['', Validators.required]
  });

  crear(){
    if(this.newSesion.valid){
      this.vetService.crearSesion(this.newSesion.value).then(result => {
        if(result>0){
          alert('Sesión Creada!! ahora puede encontrarla en el perfil del paciente')
          this._location.back()
        }else{
          alert('Rut del médico o el ID del paciente no existen')
        }
      })
    }else{
      alert('Falta completar un campo')
    }
  }

  cancelar(){
    this._location.back()
  }

  ngOnInit(): void {
  }

}
