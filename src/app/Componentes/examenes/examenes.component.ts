import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterLink } from '@angular/router';
import { VetService } from '../../Service/vet.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';  
import { AngularFireStorage } from '@angular/fire/storage'
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  constructor(private router: Router, private vetService: VetService, private _location: Location, private fb: FormBuilder, private af:AngularFireStorage) { 
    this.respuesta=0;
  }

  profileForm = this.fb.group({
    codigo:['', Validators.required]
  });

  fecha = this.fb.group({
    day:['', Validators.required],
    month:['', Validators.required],
    year:['', Validators.required]
  });

  formFecha = this.fb.group({
    day:['', Validators.required],
    month:['', Validators.required],
    year:['', Validators.required]
  });
  chao={
    codigo:'',
    estado:'2',
    link: ''
  }
  examen=[];
  fechaTM:number=0;
  fechaRS:number=0;
  fechaRM:number=0;
  tomaMuestra:number=0;
  recepcionMuestra:number=0;
  dia:string;
  estado;
  date=[{
    fecha_tomaMuestra:'',
    codigo:''
  }];
  date2=[{
    fecha_recepcionMuestra:'',
    codigo:''
  }];
  archivo=0;
  respuesta:number;
  fm:number=0;
  rm:number=0;
  terminar=0;
  lista=0;

  buscar(){
    this.vetService.getExamen(this.profileForm.value).then((result:any) =>{
      console.log("respuesta",result)
      if(result.length>0){
        console.log("IF",result)
        this.examen.push(result[0])
        console.log('examen',this.examen)
        this.respuesta=1
        this.estado=result[0].estado
        this.lista=1
        console.log("estado",this.estado)
        if(result[0].fecha_tomaMuestra){
          this.fechaTM=1;
          this.archivo=this.archivo+1;
        }
        if(result[0].fecha_recepcionSolicitud){
          this.fechaRS=1;
        }
        if(result[0].fecha_recepcionMuestra){
          this.fechaRM=1;
          this.archivo=this.archivo+1;
        }
        

      }else{
        console.log("CODIGO NO EXISTE")
      }

    })
  }  

  toma(){this.tomaMuestra=1}
  recepcion(){this.recepcionMuestra=1}

  addFMuestra(){
    if(this.fecha.value){
      this.date[0].fecha_tomaMuestra=this.fecha.value.year.concat('/',this.fecha.value.month,'/',this.fecha.value.day)
      this.date[0].codigo=this.profileForm.value.codigo
      this.vetService.addFM(this.date[0]).then((result:any) =>{
        if(result==1){
          this.fm=1;
          this.tomaMuestra=0;
          this.fechaTM=2;
          this.archivo=this.archivo+1;
        }
      })
    }else{
      console.log("falta rellenar un campo")
    }
  }

  addFRM(){
    if(this.formFecha.value){
      this.date2[0].fecha_recepcionMuestra=this.formFecha.value.year.concat('/',this.formFecha.value.month,'/',this.formFecha.value.day)
      this.date2[0].codigo=this.profileForm.value.codigo
      this.vetService.addFRM(this.date2[0]).then((result:any) =>{
        if(result==1){
          this.rm=1;
          this.recepcionMuestra=0;
          this.fechaRM=2;
          this.archivo=this.archivo+1;
        }
      })
    }else{
      console.log("falta rellenar un campo")
    }
  }
  cancelar(){
    this.respuesta=0;
    location.reload();
  }

  path:File
  picture:string
  uploadValue=0;
  
  upload($event){
    this.path = $event.target.files[0]
  }

  uploadImage(){
    console.log(this.path)
    this.af.upload("/files"+Math.random()+this.path,this.path)
    const storageRef = firebase.storage().ref(`/files/${this.path.name}`);
    const task = storageRef.put(this.path);
    task.on('state_changed',snapshot => {
      let porcentaje = (snapshot.bytesTransferred/snapshot.totalBytes)*100
      this.uploadValue = porcentaje;
    }, error =>{console.log(error.message)},
      () =>{this.uploadValue=100;
      
        //dowload URL
        task.snapshot.ref.getDownloadURL().then((url)=> {
          this.picture=url;
          console.log('Link',this.picture)
          this.terminar=1
        });

      }
    )

  }
  finalizar(){
    this.chao.link=this.picture
    this.chao.codigo=this.profileForm.value.codigo
    console.log('Finalizado',this.chao)
    this.vetService.finExamen(this.chao).then((result:any) =>{
      if(result==1){
        this.vetService.mailFinExamen(this.examen[0]).then(result =>{
          console.log('Correo enviado',result)
        })
        location.reload()
      }else{
        console.log("NO")
      }
    })
  }
  crearExamen(){
    this.router.navigate(['ex-crear'])
  }


  ngOnInit(): void {
  }

}
