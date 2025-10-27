import { Injectable } from '@nestjs/common';

@Injectable()
export class TurnosService {
    
  turnos: any = [];

  constructor() {
    
    const turno1 = {
      id: '1',
      mascota: 'Pepe',
      fecha: '10-11-2025',
      hora: '10:00',
      motivo: 'Vacunación'
    };
    const turno2 = {
      id: '2',
      mascota: 'Branca',
      fecha: '12-11-2025',
      hora: '15:30',
      motivo: 'Control'
    };
    this.turnos.push(turno1, turno2);
  }

  getTurnos() {
    return this.turnos;
  }

  getTurnoId(id: string) {
    for (let i = 0; i < this.turnos.length; i++) {
      if (this.turnos[i].id === id) {
        return this.turnos[i];
      }
    }
    return 'No se encontró el turno';
  }

  ingresarTurno(turno: any) {
    if (!turno) {
      return 'Datos del turno incorrectos';
    }
    this.turnos.push(turno);
    return 'Turno ingresado correctamente';
  } 
}

