import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-ses-lista',
  templateUrl: './ses-lista.component.html',
  styleUrls: ['./ses-lista.component.css']
})
export class SesListaComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  headers=["titulo","fecha","rut_medico","id_paciente"]
  sesiones=[]
  medicos=[]
  pacientes=[]

  dataS={id:''}
  dataM={rut:''}
  dataP={id:''}

  crearSesion(){
    this.router.navigate(['/ses-crear2'])
  }

  sesion(i){
    var id=this.sesiones[i].id
    this.router.navigate(['/sesiones',id])
  }

  async ngOnInit(){
    var dataS={id:''}
    var dataM={rut:''}
    var dataP={id:''}

    this.vetService.listaSesiones().then((result:any) => {
      for(var i=0; i<result.length; i++){
        this.sesiones.push(result[i])
        dataM.rut=result[i].rut_medico
        this.vetService.buscarMedico(dataM).then((resultM:any)=>{
          this.medicos.push(resultM[0])
        })
        dataP.id=result[i].id_paciente
        this.vetService.buscarPaciente(dataP).then((resultP: any) => {
          this.pacientes.push(resultP[0])
        })
      }
    })
    console.log('Sesiones',this.sesiones)
    console.log('Medicos',this.medicos)
    console.log('Pacientes',this.pacientes)
  }

}
