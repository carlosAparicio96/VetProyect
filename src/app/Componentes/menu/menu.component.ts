import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private _location: Location) {
 
   }

   
  ngOnInit(){
/*     var token = JSON.parse(localStorage.getItem("usuario"));
    console.log('inicio menu', token);
    if(token==null){
      alert('Debe iniciar sesión')
      this._location.back();
    } */
  }

}
