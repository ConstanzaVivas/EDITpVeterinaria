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
  
  //AGREGO COMO DIJO EL CHAT PARA VALIDAR FECHAS FUTURAS
  /*   1) Agregar validación de fecha futura (manteniendo tu formato DD-MM-YYYY + HH:mm)
   Pegá estas 2 funciones privadas dentro de tu AgendaService (debajo del constructor): */
  private parseFechaHora(fecha: string, hora: string): Date | null {
    // fecha: DD-MM-YYYY, hora: HH:mm
    if (!fecha || !hora) return null;
    const f = fecha.split('-'); // [DD, MM, YYYY]
    const h = hora.split(':');  // [HH, mm]
    if (f.length !== 3 || h.length !== 2) return null;

    const DD = parseInt(f[0], 10);
    const MM = parseInt(f[1], 10) - 1; // 0=enero
    const YYYY = parseInt(f[2], 10);
    const HH = parseInt(h[0], 10);
    const mm = parseInt(h[1], 10);
    if (isNaN(DD) || isNaN(MM) || isNaN(YYYY) || isNaN(HH) || isNaN(mm)) return null;

    const d = new Date(YYYY, MM, DD, HH, mm, 0, 0);
    // validar que armó una fecha real (evitar 31-02-2025, etc.)
    if (d.getFullYear() !== YYYY || d.getMonth() !== MM || d.getDate() !== DD) return null;
    return d;
  }

  // Verifica si la fecha y hora dadas son futuras
  private esFuturo(fecha: string, hora: string): boolean {
    const d = this.parseFechaHora(fecha, hora);
    return d !== null && d.getTime() > Date.now();
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
    if (!turno.mascota || !turno.fecha || !turno.hora) {
      return 'Faltan datos obligatorios: mascota, fecha (DD-MM-YYYY) y hora (HH:mm)';
    }
    if (!this.esFuturo(turno.fecha, turno.hora)) {
      return 'La fecha del turno debe ser futura (formato DD-MM-YYYY y HH:mm)';
    }
   
    if (!turno.id) {
      turno.id = (this.turnos.length + 1).toString();
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

  //POCHI
  // (Opcional pero recomendado) “Administrar” = actualizar y borrar
  // Si querés cubrir “administrar” como CRUD completo, 
  //agregá estos dos métodos chiquitos (pegalos abajo del todo):

  actualizarTurno(id: string, data: any) {
    for (let i = 0; i < this.turnos.length; i++) {
      if (this.turnos[i].id === id) {
        // si manda fecha/hora nuevas, validar que sean futuras
        const nuevaFecha = data && data.fecha ? data.fecha : this.turnos[i].fecha;
        const nuevaHora = data && data.hora ? data.hora : this.turnos[i].hora;
        if (!this.esFuturo(nuevaFecha, nuevaHora)) {
          return 'La nueva fecha/hora debe ser futura (DD-MM-YYYY y HH:mm)';
        }
        if (data && data.mascota !== undefined) this.turnos[i].mascota = data.mascota;
        if (data && data.fecha !== undefined) this.turnos[i].fecha = data.fecha;
        if (data && data.hora !== undefined) this.turnos[i].hora = data.hora;
        if (data && data.motivo !== undefined) this.turnos[i].motivo = data.motivo;
        return this.turnos[i];
      }
    }
    return 'No se encontró el turno a actualizar';
  }

  borrarTurno(id: string) {
    for (let i = 0; i < this.turnos.length; i++) {
      if (this.turnos[i].id === id) {
        
        for (let j = i; j < this.turnos.length - 1; j++) {
          this.turnos[j] = this.turnos[j + 1];
        }
        this.turnos.pop();
        return 'Turno eliminado';
      }
    }
    return 'No se encontró el turno a eliminar';
  }

  borrarDiagnostico(id: string) {
  for (let i = 0; i < this.diagnosticos.length; i++) {
    if (this.diagnosticos[i].id === id) {
      
      for (let j = i; j < this.diagnosticos.length - 1; j++) {
        this.diagnosticos[j] = this.diagnosticos[j + 1];
      }
      this.diagnosticos.pop();
      return "Diagnóstico eliminado correctamente";
    }
  }
  return "No se encontró el diagnóstico con ese ID";
}

}




