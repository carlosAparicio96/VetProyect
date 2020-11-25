import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) {  }

  rutMascota = this.fb.group({
    rut_cliente: ['', Validators.required]
  });
  headers=["nombre","especie"]

  lista=0;
  masc=0
  encontrado=[]
  mascotas=[]
  sesiones=[]
  data={id_paciente:''}
  dataS={id:''}
  dataP={id:''}
  dataC={rut:''}

  mascota(id){
    console.log("id:",this.mascotas[id].id)
    this.router.navigate(['/pacientes',this.mascotas[id].id])
  }

  async eliminar(){
    for(var i=0; i<this.mascotas.length;i++){
      this.data.id_paciente=this.mascotas[i].id
      await this.vetService.buscarSesion(this.data).then((result:any) => {
        for(var j=0; j<result.length; j++){
          this.sesiones.push(result[j])
          this.dataS.id=result[j].id
          this.vetService.eliminarSesion(this.dataS).then(result => {
            console.log('eliminar sesion',j,') ',result)
          })
        }
        this.dataP.id=this.mascotas[i].id
        this.vetService.eliminarPacienteSin(this.dataP).then(result =>{
          if(result>0){
            console.log('paciente ',i, 'eliminado')
          }
        })
      })
    }

    this.vetService.eliminarCliente(this.dataC).then(result =>{
      if(result>0){
        alert('Cliente eliminado')
        this._location.back()
      }else{
        alert('No se pudo eliminar')
      }
    })



  }

  eliminarSin(){

  }

  crearPaciente(){
    this.router.navigate(['/pas-crear2',this.encontrado[0].rut])
  }

  async ngOnInit(){
    await this._ac.paramMap.subscribe(params =>{
      var data={rut:params.get('id')}
      this.dataC.rut=params.get('id')
      this.vetService.buscarCliente(data).then(result =>{
        if(result[0]){
          this.encontrado.push(result[0])
          this.rutMascota.value.rut_cliente=data.rut
          this.vetService.mascotasCliente(this.rutMascota.value).then((result2:any)=>{
            if(result2.length>0){
              for(var i=0; i<result2.length; i++){
                this.mascotas.push(result2[i])
              }
              console.log("mascotas",this.mascotas)
              this.masc=1
            }
          })
        }else{
          alert('Rut no existe, vuelva a intentarlo')
          this._location.back()
        }

      })

    })
  }

}
