import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  consulta=[]
  respuesta=[]
  cliente=[]
  paciente=[]
  paEliminar={id:''}

  responder(){
    this.respuesta[0].estado=2
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    var fecha= yyyy + '-' + mm + '-'+ dd 
    this.respuesta[0].fecha_respuesta=fecha

    this.vetService.responderConsulta(this.respuesta[0]).then(result => {
      if(result>0){
        this.vetService.mailResputaConsulta(this.respuesta[0])
        alert('Respueta enviada correctamente')
        this._location.back()
      }else{
        alert('ocurrio un error')
      }
    })
  }

  eliminar(){
    this.vetService.eliminarConsulta(this.paEliminar).then(result => {
      if(result==1){
        alert('Consulta eliminada con exito')
        this._location.back()
      }else{
        alert('Ocurrio un error')
      }
    })
  }
  
  async ngOnInit(){
    await this._ac.paramMap.subscribe(params =>{
      var data={id:params.get('id')}
      this.paEliminar.id=params.get('id')
      this.vetService.buscarConsulta(data).then(result => {
        this.consulta.push(result[0])
        var data2={rut:result[0].rut_cliente}
        var data3={id:result[0].id_paciente}
        this.vetService.buscarCliente(data2).then(result2 =>{
          this.cliente.push(result2[0])
          this.vetService.buscarPaciente(data3).then(result3 =>{
            this.paciente.push(result3[0])
          })
        })
      })
      this.vetService.buscarConsulta(data).then(result4 => {
        this.respuesta.push(result4[0])
      })
    })
  }

}
