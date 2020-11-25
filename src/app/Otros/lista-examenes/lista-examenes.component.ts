import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';  

@Component({
  selector: 'app-lista-examenes',
  templateUrl: './lista-examenes.component.html',
  styleUrls: ['./lista-examenes.component.css']
})
export class ListaExamenesComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private _location: Location, public dialog: MatDialog,private fb: FormBuilder) { }

  examenes=[]
  headers=["codigo","nombre_paciente","examen", "fecha_recepcionSolicitud", "estado", "link"]
  estados=[]
  async ngOnInit(){
    await this.vetService.listaExamenes().then((result:any) => { 
      for(var i =0; i< result.length;i++){
        this.examenes.push(result[i])
        this.estados.push(result[i].estado)
      }
      console.log("Examenes",this.examenes)
      console.log("estados",this.estados)
    })

  }
}
