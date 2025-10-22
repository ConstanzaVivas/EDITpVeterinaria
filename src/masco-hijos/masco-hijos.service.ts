import { Injectable } from '@nestjs/common';

@Injectable()
export class MascoHijosService {

 mascotas: any = [];
    constructor(){
        let mascota ={
            "id" : "1",
            "nombre" : "Pepe",

            "especie" : "Perro",
            "raza":"bulldog",
            "edad" : "1",
            "duenio" : "Rodolfo Fernandez",
            "telefono" : "0303456"
        };
        this.mascotas.push(mascota);
        mascota ={
            "id" : "2",
            "nombre" : "Branca",
            "especie" : "Gato",
            "raza":"british",
            "edad" : "2",
            "duenio" : "Ana Loise",
            "telefono" : "0303457"
        };
        this.mascotas.push(mascota);
        mascota ={
            "id" : "3",
            "nombre" : "Beto",
            "especie" : "gato",
            "raza":"esfinge",
            "edad" : "14",
            "duenio" : "Carlos Lop",  
            "telefono" : "0303458"
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

 ingreseMascota(mascota:any){
        if (mascota === null || mascota === undefined){
            return  "Datos de mascota invalidos";

        }
        this.mascotas.push(mascota);
        return "Mascota ingresada correctamente";
        

    }}
    
    
            
