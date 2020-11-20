import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';  

@Component({
  selector: 'app-edita-medico',
  templateUrl: './edita-medico.component.html',
  styleUrls: ['./edita-medico.component.css']
})
export class EditaMedicoComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private _location: Location, public dialog: MatDialog,private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  form = this.fb.group({
    rut:['', Validators.required]
  });

  encontrado = this.fb.group({
    rut:['', Validators.required],
    apellido:['', Validators.required],
    nombre:['', Validators.required],
    especialidad:['', Validators.required],
    telefono:['', Validators.required],
    correo: ['', [Validators.required,Validators.email]],
  });
  
}
