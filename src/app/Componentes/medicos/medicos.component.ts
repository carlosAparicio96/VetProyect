import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/Otros/dialog/dialog.component';
/* import { MedicoAddComponent } from 'src/app/Otros/medico-add/medico-add.component'; */


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private _location: Location, public dialog: MatDialog) { }

  medicos=[]
  headers = ["rut","apellido","nombre", "especialidad", "correo", "telefono"];
  
  //para open dialog()
  rut:string;
  send = {
    run:''
  } 
  //para open medico-add()

  async ngOnInit(){
    await this.vetService.listaMedicos().then((result:any) => {
      
      for(var i =0; i< result.length;i++){

        this.medicos.push(result[i])
      }
      console.log("medicos",this.medicos)
    }) 
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {data: {rut:this.rut}});

    dialogRef.afterClosed().subscribe(result => {
      
      console.log(`dialog result: ${result}`);
      this.send.run=result;
      if(result=='false'){
        console.log("es falseque")
      }else{
        this.vetService.borrarMedico(this.send).then((result:any) =>{
          console.log("respuesta",result)
          if(result==1){
            alert("medico eliminado del sistema")
            location.reload();
          }else{
            alert("rut ingresado no coincide")
          }
        })
      }


    })
  }  

  addMedico(){
    this.router.navigate(['add-medicos'])

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
