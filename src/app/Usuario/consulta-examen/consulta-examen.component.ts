import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-consulta-examen',
  templateUrl: './consulta-examen.component.html',
  styleUrls: ['./consulta-examen.component.css']
})
export class ConsultaExamenComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  buscador={codigo:''}
  examen=[]
  si=0;

  buscar(){
    this.vetService.getExamen(this.buscador).then((result:any) => {
      if(result.length>0){
        this.examen.push(result[0])
        this.si=1
      }else{
        alert('Codigo ingresado no es valido')
      }
    })
  }
  ngOnInit(): void {
  }

  
}
