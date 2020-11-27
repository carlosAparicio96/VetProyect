import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-con-lista',
  templateUrl: './con-lista.component.html',
  styleUrls: ['./con-lista.component.css']
})
export class ConListaComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }
  
  headers=["estado","titulo","fecha_consulta","fecha_respuesta"]
  consultas=[]

  consulta(i){
    var id=this.consultas[i].id
    this.router.navigate(['/consultas',id])
  }

  async ngOnInit(){
    await this.vetService.listaConsultas().then((result:any) => {
      if(result.length>0){
        for(var i =0; i<result.length; i++){
          this.consultas.push(result[i])
        }
      }
      console.log('consultas',this.consultas)
    })
  }

}
