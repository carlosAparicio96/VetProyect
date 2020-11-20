import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { FormBuilder, Validators } from '@angular/forms';  
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.css']
})
export class CrearExamenComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private fb: FormBuilder,private _location: Location) { }

  profile = this.fb.group({
    rut:['', Validators.required],
    apellido: ['', Validators.required],
    nombre: ['', Validators.required],
    especialidad:['', Validators.required],
    correo: ['', [Validators.required,Validators.email]],
    telefono:['', Validators.required],
  });

  ngOnInit(): void {
  }

}
