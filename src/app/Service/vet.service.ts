import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/usuario/"

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private http: HttpClient) { }

  uploadFile(formData){
    return this.http.post(`${apiUrl}subir`, formData);
  }
  

  iniciarSesion(data) {
    console.log('data del iniciar sesion',data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}login`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }

  validarToken(data){
    console.log('data validarToken',data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}token`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })

  }




//--USUARIO--//
  crearUsuario(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}registro`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }



  obetenerUsuario (data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}getUsuario`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }
  //-----MEDICOS-----//

  listaMedicos () {
      return new Promise((resolve, reject) => {
      this.http.get(
        `${apiUrl}listaMedicos`
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }
  
  borrarMedico (data) {
    console.log("vet service borrar medico",data)
    return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarMedico`,data
    )
      .subscribe(
        (response: any) => {
          try {
            console.log('response', response)
            resolve(response)
          } catch (error) {
            console.log('error1', error)
            reject(error)
          }
        },
        error => {
          console.log('error2', error)
          reject(error)
        }
      )
  })
}

agregarMedico (data) {
  console.log("vet service agregar medico",data)
  return new Promise((resolve, reject) => {
  this.http.post(
    `${apiUrl}medico`,data
  )
    .subscribe(
      (response: any) => {
        try {
          console.log('response', response)
          resolve(response)
        } catch (error) {
          console.log('error1', error)
          reject(error)
        }
      },
      error => {
        console.log('error2', error)
        reject(error)
      }
    )
})
}

buscarMedico(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}buscarMedico`,data
    )
      .subscribe(
        (response: any) => {
          try {
            console.log('response', response)
            resolve(response)
          } catch (error) {
            console.log('error1', error)
            reject(error)
          }
        },
        error => {
          console.log('error2', error)
          reject(error)
        }
      )
  })
}
editarMedico(data){
  console.log('edit medico',data)
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl} `,data
    )
      .subscribe(
        (response: any) => {
          try {
            console.log('response', response)
            resolve(response)
          } catch (error) {
            console.log('error1', error)
            reject(error)
          }
        },
        error => {
          console.log('error2', error)
          reject(error)
        }
      )
  })
}

//-------EXAMEN-------
getExamen (data) {
  console.log("Codigo Examen",data)
  return new Promise((resolve, reject) => {
  this.http.post(
    `${apiUrl}getExamen`,data
  )
    .subscribe(
      (response: any) => {
        try {
          console.log('response', response)
          resolve(response)
        } catch (error) {
          console.log('error1', error)
          reject(error)
        }
      },
      error => {
        console.log('error2', error)
        reject(error)
      }
    )
})
}

addFM(data){
  console.log("form",data)
  return new Promise((resolve, reject) => {
  this.http.put(
    `${apiUrl}fechaTM`,data
  )
    .subscribe(
      (response: any) => {
        try {
          console.log('response', response)
          resolve(response)
        } catch (error) {
          console.log('error1', error)
          reject(error)
        }
      },
      error => {
        console.log('error2', error)
        reject(error)
      }
    )
  })

}
addFRM(data){
  console.log("form",data)
  return new Promise((resolve, reject) => {
  this.http.put(
    `${apiUrl}fechaRM`,data
  )
    .subscribe(
      (response: any) => {
        try {
          console.log('response', response)
          resolve(response)
        } catch (error) {
          console.log('error1', error)
          reject(error)
        }
      },
      error => {
        console.log('error2', error)
        reject(error)
      }
    )
  })
}

finExamen(data){
  return new Promise((resolve, reject) => {
    this.http.put(
      `${apiUrl}finExamen`,data
    )
      .subscribe(
        (response: any) => {
          try {
            console.log('response', response)
            resolve(response)
          } catch (error) {
            console.log('error1', error)
            reject(error)
          }
        },
        error => {
          console.log('error2', error)
          reject(error)
        }
      )
    })

}

listaExamenes(){
  return new Promise((resolve, reject) => {
    this.http.get(
      `${apiUrl}listaExamen`
    )
      .subscribe(
        (response: any) => {
          try {
            console.log('response', response)
            resolve(response)
          } catch (error) {
            console.log('error1', error)
            reject(error)
          }
        },
        error => {
          console.log('error2', error)
          reject(error)
        }
      )
  })

}

  //-----FIN-----//
}