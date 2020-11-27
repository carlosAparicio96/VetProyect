import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-realizar-consulta',
  templateUrl: './realizar-consulta.component.html',
  styleUrls: ['./realizar-consulta.component.css']
})
export class RealizarConsultaComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  consulta={
    estado:'1',
    titulo:'',
    correo:'',
    consulta:'',
    rut_cliente:'',
    id_paciente:''
  }

  dataC={rut:''}
  dataP={rut_cliente: ''}
  cli=[]
  pas=[]

  noCli=0;
  noPass=0;

  enviar(){
    this.consulta.rut_cliente=this.dataC.rut
    console.log('Consulta',this.consulta)
    this.vetService.nuevaConsulta(this.consulta).then(result => {
      if(result>0){
        this._location.back()
      }
    })
  }

  paciente(){
    this.vetService.obtenerUCliente(this.dataC).then((result: any) => {
      if(result.length>0){
        this.cli.push(result[0])
        this.dataP.rut_cliente=this.dataC.rut
        this.vetService.obtenerUPaciente(this.dataP).then((result2 : any) => {
          if(result2.length>0){
            for(var i=0; i<result2.length; i++){
              this.pas.push(result2[i])
            }
            this.noCli=1
          }else{
            alert('El Cliente no registra ninguna mascota por lo que no puede realizar una consulta')
          }
        })
      }else{
        alert('El rut ingresado no existe')
      }
    })

    console.log('cli',this.cli)
    console.log('pas',this.pas)
  }

  ngOnInit(): void {
  }

}
