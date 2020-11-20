import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ex-edit',
  templateUrl: './ex-edit.component.html',
  styleUrls: ['./ex-edit.component.css']
})
export class ExEditComponent implements OnInit {

@Input() examen: any;

  constructor() {
    console.log('examen',this.examen)
   }

  ngOnInit(): void {
  }

}
