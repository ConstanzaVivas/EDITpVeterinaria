import { Injectable } from '@nestjs/common';

@Injectable()
export class MascoHijosService {


 mascotas: any = [];
    constructor(){
        let mascota = {
            "id" : "1",
            "nombre" : "Pepe",
            "especie" : "Perro",
            "raza":"bulldog",
            "edad" : "1",
            "duenio" : "Rodolfo Fernandez",
            "telefono" : "0303456",
             "historial": [
        { tipo: "vacuna", descripcion: "Antirrábica" },
        { tipo: "diagnostico", descripcion: "Resfrío leve" }
      ]

        };
        this.mascotas.push(mascota);

        mascota = {
            "id" : "2",
            "nombre" : "Branca",
            "especie" : "Gato",
            "raza":"british",
            "edad" : "2",
            "duenio" : "Ana Loise",
            "telefono" : "0303457",
            "historial": []
    };
        
        this.mascotas.push(mascota);
    
        mascota = {
            "id" : "3",
            "nombre" : "Beto",
            "especie" : "gato",
            "raza":"esfinge",
            "edad" : "14",
            "duenio" : "Carlos Lop",  
            "telefono" : "0303458",
            "historial": []
        };
        this.mascotas.push(mascota);

         }


    getMascotas(){
        return this.mascotas;
    }
    getMacotasId(id:String){
        for(let i = 0; i < this.mascotas.length; i++){
            if (this.mascotas[i].id == id){
                return this.mascotas[i];
            }  
        } 
        
        return "No se encontran esos datos intente nuevamente";
    }

 ingreseMascota(mascota: any) {
  if (!mascota) {
    return "Datos de mascota inválidos";
  }

  if (!mascota.nombre || !mascota.especie || !mascota.duenio) {
    return "Faltan datos: nombre, especie o dueño.";
  }

  this.mascotas.push(mascota);
  return "Mascota ingresada correctamente";
}

   getHistorialMascota(id: string) {
    for (let i = 0; i < this.mascotas.length; i++) {
      if (this.mascotas[i].id == id) {
       
        if (!this.mascotas[i].historial) {
          return [];
        }
        return this.mascotas[i].historial;
      }
    }
    return "Mascota no encontrada";
  }
 
   getRecordatorios() {
    const pendientes: any[] = [];

    for (let i = 0; i < this.mascotas.length; i++) {
      const m = this.mascotas[i];

      let tieneHistorial = false;
     
      if (m.historial && m.historial.length > 0) {
        
        for (let j = 0; j < m.historial.length; j++) {
          tieneHistorial = true;
          break; 
        }
      }

      if (!tieneHistorial) {
        const item = {
          mascota: m.nombre,
          duenio: m.duenio,
          telefono: m.telefono,
          mensaje: "Debe agendar chequeo o vacuna"
        };
        pendientes.push(item);
      }
    }

    return pendientes;
  }

   getDuenos() {
  const duenos: any[] = [];
  for (let i = 0; i < this.mascotas.length; i++) {
    const m = this.mascotas[i];
    

    let existe = false;
    for (let j = 0; j < duenos.length; j++) {
      if (duenos[j].nombre === m.duenio && duenos[j].telefono === m.telefono) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      duenos.push({ nombre: m.duenio, telefono: m.telefono });
    }
  }
  return duenos;
}


}

    
    
