import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private vetService: VetService, private fb: FormBuilder) { 

    localStorage.clear();
    console.log('inicio login',localStorage.getItem("usuario"));

  }

  profileForm = this.fb.group({
    nombre_usuario: ['', Validators.required],
    contrasena:['', Validators.required]
  });

  async login(){

    console.log("inicio de sesion",this.profileForm.valid)
    if(this.profileForm.valid){

      var token
      await this.vetService.iniciarSesion(this.profileForm.value).then(result => {
        
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
    }
    else{
        alert("Falta rellenar algun campo")
    }

  }


  ngOnInit(): void {

  }
}
