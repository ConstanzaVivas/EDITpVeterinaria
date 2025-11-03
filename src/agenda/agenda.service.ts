import { Injectable } from '@nestjs/common';


@Injectable()
export class AgendaService {
    
  turnos: any = [];
  diagnosticos: any[] = [];
  vacunas: any[] = [];
  tratamientos: any[] = [];

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
  
listarDiagnosticos(mascota?: string) {
    if (!mascota) return this.diagnosticos;
    const r: any[] = [];
    for (let i = 0; i < this.diagnosticos.length; i++) {
      if (this.diagnosticos[i].mascota === mascota) r.push(this.diagnosticos[i]);
    }
    return r;
  }

  registrarDiagnostico(d: any) {
    if (!d || !d.mascota || !d.fecha || !d.descripcion)
      return 'Datos del diagnóstico incompletos';
    d.id = d.id || (this.diagnosticos.length + 1).toString();
    this.diagnosticos.push(d);
    return 'Diagnóstico registrado';
  }

   listarVacunas(mascota?: string) {
    if (!mascota) return this.vacunas;
    const r: any[] = [];
    for (let i = 0; i < this.vacunas.length; i++) {
      if (this.vacunas[i].mascota === mascota) r.push(this.vacunas[i]);
    }
    return r;
  }

  registrarVacuna(v: any) {
    if (!v || !v.mascota || !v.fecha || !v.vacuna)
      return 'Datos de vacuna incompletos';
    v.id = v.id || (this.vacunas.length + 1).toString();
    this.vacunas.push(v);
    return 'Vacuna registrada';
  }

  listarTratamientos(mascota?: string) {
    if (!mascota) return this.tratamientos;
    const r: any[] = [];
    for (let i = 0; i < this.tratamientos.length; i++) {
      if (this.tratamientos[i].mascota === mascota) r.push(this.tratamientos[i]);
    }
    return r;
  }

  registrarTratamiento(t: any) {
    if (!t || !t.mascota || !t.fecha || !t.medicamento || !t.dosis || t.dias == null)
      return 'Datos de tratamiento incompletos';
    t.id = t.id || (this.tratamientos.length + 1).toString();
    this.tratamientos.push(t);
    return 'Tratamiento registrado';
  }
}




