import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { 
  }

  paciente=[]
  edit=[]
  sesiones=[]
  si=0;
  headers=["titulo","fecha"]
  data3={id: ''}

  sesion(id){
    console.log("id:",this.sesiones[id].id)
    this.router.navigate(['/sesiones',this.sesiones[id].id])
  }
  eliminar(){
    console.log('data3',this.data3)
    this.vetService.eliminarPaciente(this.data3).then((result:any )=>{
      if(result>0){
        alert('Paciente Eliminado')
        this._location.back()
      }else{
        alert('Ocurrio un error')
      }
    })
  }

  eliminarSin(){
    console.log('data3',this.data3)
    this.vetService.eliminarPacienteSin(this.data3).then((result:any )=>{
      if(result>0){
        alert('Paciente Eliminado')
        this._location.back()
      }else{
        alert('Ocurrio un error')
      }
    }) 

  }
  crearSesion(){
    this.router.navigate(['/ses-crear',this.paciente[0].id])
  }

  editar(){
    this.vetService.editarPaciente(this.edit[0]).then(result => {
      if(result==1){
        alert('Paciente Editado correctamente')
        location.reload()
      }else{
        alert('Ocurrio un error')
      }
    })
  }


  async ngOnInit() {
    await this._ac.paramMap.subscribe(params =>{
      var data={id:params.get('id')}
      var data2={id_paciente:params.get('id')}
      this.data3.id=params.get('id')

      console.log('id paciente:',data)
      this.vetService.buscarPaciente(data).then((result: any) =>{
        this.paciente.push(result[0])
      })
      this.vetService.buscarPaciente(data).then((result3:any) =>{
        this.edit.push(result3[0])
      })

      this.vetService.buscarSesion(data2).then((result2:any)=> {
        console.log('Sesiones',result2)
        if(result2.length>0){
          for(var i=0; i<result2.length; i++){
            this.sesiones.push(result2[i])
          }
          this.si=1;
        }
        console.log('this.si',this.si)
        console.log('this.sesiones',this.sesiones)
      })
    })
  }




}
