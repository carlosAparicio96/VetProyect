import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/Otros/dialog/dialog.component';
import { FormBuilder, Validators } from '@angular/forms';  
import { AngularFireStorage } from '@angular/fire/storage'



@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private _location: Location, public dialog: MatDialog,private fb: FormBuilder,private storage: AngularFireStorage) { }

  rutMedicos=[]
  medicos=[]
  sesiones=[]
  headers = ["rut","apellido","nombre", "especialidad", "correo", "telefono"];
  
  //para open dialog()
  rut:string;
  send = {
    rut_medico:''
  } 
  error:number=0;
  error2:number=0;
  error3:number=0;
  busqueda:number=0;
  footer:number=1;
  form = this.fb.group({
    rut:['', Validators.required]
  });
  encontrado =[]

  medico=[];

  async ngOnInit(){
    await this.vetService.listaMedicos().then((result:any) => {
      for(var i =0; i< result.length;i++){
        this.medicos.push(result[i])
        this.rutMedicos.push(result[i].rut)
      }
    }) 

  }

  delete(){
    this.send.rut_medico=this.form.value.rut
    this.vetService.eliminarSesionCliente(this.send).then((result:any) =>{
      this.vetService.borrarMedico(this.form.value).then(result2 => {
        if(result2>0){
          alert("medico eliminado del sistema")
          location.reload();
        }else{
          alert('ocurrio un error')
        }
      })
    })
  }


  async edit(){
    if(this.form.valid){
    await this.vetService.buscarMedico(this.form.value).then((result:any) =>{
      console.log("respuesta",result[0])
        if(result.length>0){
          this.medico[0]=result[0];
          this.busqueda=1
          this.footer=0;
        }else{
          console.log('Rut no existe')
          this.error3=1;
          this.error2=0;
        }
      })
    }else{
      this.error2=1;
      this.error3=0;
    }
  }

  reload(){
    location.reload()
  }

  addMedico(){
    this.router.navigate(['add-medicos'])
  }

  guardar(){
    this.vetService.editarMedico(this.medico[0]).then((result:any) =>{
      if(result>0){
        alert('Médico editado correctamente')
        location.reload()
      }else{
        alert('Ocurrio un error')
      }
    })
  }

  


 /*  async borrar(){
    var token
      await this.vetService.validarToken(token).then(result => {
        
        console.log('respuesta api',result)
        token= result
        if(token.length != 0){
          alert("se inicia sesion")
          localStorage.setItem("usuario", JSON.stringify(token));
          this.router.navigate(['menu'])
        }
        else{
          alert("el correo o contraseña invalido")
        }
      })
    }   */

}
