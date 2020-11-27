import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  sesion=[]
  edit=[]
  paciente=[]

  eliminiar(){
    this.vetService.eliminarSesion(this.sesion[0]).then(result=>{
      if(result==1){
        alert('Sesion eliminada')
        this._location.back();
      }else{
        alert('Ocurrio un error')
      }
    })
  }

  editar(){
    this.vetService.editarSesion(this.edit[0]).then(result => {
      if(result==1){
        alert('Sesion editada correctamente!!')
        location.reload()
      }else{
        alert('Ocurrio un error')
      }
    })
  }
  cancelar(){
    this._location.back()
  }


  async ngOnInit(){
    await this._ac.paramMap.subscribe(params =>{
      var data={id:params.get('id')}
      console.log('data',data)
      this.vetService.traerSesion(data).then((result:any) =>{
        if(result.length>0){
          this.sesion.push(result[0])
          var id_paciente={id:result[0].id_paciente}
        }
        this.vetService.buscarPaciente(id_paciente).then((result2: any) => {
          if(result2.length>0){
            this.paciente.push(result2[0])
          }
        })
      })

      this.vetService.traerSesion(data).then((result3:any) =>{
        this.edit.push(result3[0])
      })

    })
  }

}
