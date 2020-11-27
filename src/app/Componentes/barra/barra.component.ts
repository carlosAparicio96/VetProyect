import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor(private router:Router) { }

  home(){
    this.router.navigate(['consulta-examen'])
  }

  ngOnInit(): void {
  }

}
