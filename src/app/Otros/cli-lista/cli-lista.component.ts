import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-cli-lista',
  templateUrl: './cli-lista.component.html',
  styleUrls: ['./cli-lista.component.css']
})
export class CliListaComponent implements OnInit {

  constructor(private _ac:ActivatedRoute,private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder) { }

  profileForm = this.fb.group({
    rut: ['', Validators.required]
  });
      
  clientes=[]
  headers=["rut","nombre","apellido","correo", "telefono"]

  buscar(){
    if(this.profileForm.valid){
      this.vetService.buscarCliente(this.profileForm.value).then((result:any) =>{
        if(result.length>0){
          this.router.navigate(['/clientes',this.profileForm.value.rut])
        }else{
          alert('Rut Ingresado no existe!')
        }
      })
    }else{
      alert('Debe ingresar un rut')
    }
  }

  buscar2(i){
    var rut=this.clientes[i].rut
    this.router.navigate(['/clientes',rut])

  }


 ngOnInit() {
    this.vetService.listaClientes().then((result:any) =>{
      for(var i =0; i< result.length;i++){
        this.clientes.push(result[i])
      }
    })
    console.log('Lista',this.clientes)
  } 
}
