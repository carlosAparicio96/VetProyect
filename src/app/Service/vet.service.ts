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
      `${apiUrl}editarMedico`,data
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
crearExamen(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}examen`,data
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

mailRegistroExamen(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}send`,data
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

mailFinExamen(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}sendFin`,data
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

eliminarExamen(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarExamen`,data
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

//------Clientes-------
listaClientes(){
  return new Promise((resolve, reject) => {
    this.http.get(
      `${apiUrl}listaClientes`
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

buscarCliente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}buscarCliente`,data
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

newCliente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}cliente`,data
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


eliminarCliente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarCliente`,data
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

mascotasCliente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}mascotasCliente`,data
    )
      .subscribe(
        (response) => {
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

editarCliente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}editarCliente`,data
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

//PACIENTES---------------------------------------------------------------------------------------------
buscarPaciente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}buscarPaciente`,data
    )
      .subscribe(
        (response) => {
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
getPasRutNombre(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}getPasRutNombre`,data
    )
      .subscribe(
        (response) => {
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

listaPacientes(){
  return new Promise((resolve, reject) => {
    this.http.get(
      `${apiUrl}listaPacientes`
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

crearPaciente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}paciente`,data
    )
      .subscribe(
        (response) => {
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

eliminarPaciente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarPaciente`,data
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

eliminarPacienteSin(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarPacienteSin`,data
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

editarPaciente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}editarPaciente`,data
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

//------SESION

listaSesiones(){
  return new Promise((resolve, reject) => {
    this.http.get(
      `${apiUrl}listaSesiones`
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

buscarSesion(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}buscarSesion`,data
    )
      .subscribe(
        (response) => {
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

traerSesion(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}traerSesion`,data
    )
      .subscribe(
        (response) => {
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

eliminarSesion(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarSesion`,data
    )
      .subscribe(
        (response) => {
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

eliminarSesionCliente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarSesionCliente`,data
    )
      .subscribe(
        (response) => {
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

crearSesion(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}sesion`,data
    )
      .subscribe(
        (response) => {
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

editarSesion(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}editarSesion`,data
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

buscarSesionFecha(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}buscarSesionFecha`,data
    )
      .subscribe(
        (response) => {
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

buscarSesionFechaEntre(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}buscarSesionFechaEntre`,data
    )
      .subscribe(
        (response) => {
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

//------CONSULTAS---------- 

listaConsultas(){
  return new Promise((resolve, reject) => {
    this.http.get(
      `${apiUrl}listaConsultas`
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

buscarConsulta(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}buscarConsulta`,data
    )
      .subscribe(
        (response) => {
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
responderConsulta(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}responderConsulta`,data
    )
      .subscribe(
        (response) => {
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

eliminarConsulta(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}eliminarConsulta`,data
    )
      .subscribe(
        (response) => {
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

mailResputaConsulta(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}sendRespuesta`,data
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

nuevaConsulta(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}consulta`,data
    )
      .subscribe(
        (response) => {
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

obtenerUPaciente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}obtenerUPaciente`,data
    )
      .subscribe(
        (response) => {
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

obtenerUCliente(data){
  return new Promise((resolve, reject) => {
    this.http.post(
      `${apiUrl}obtenerUCliente`,data
    )
      .subscribe(
        (response) => {
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