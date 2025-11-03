import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';


import { AgendaService } from './agenda.service';

@Controller('agenda')
export class AgendaController {
    constructor(private readonly agenda: AgendaService) { }

    @Get('turnos') 
    getTurnos() {
        return this.agenda.getTurnos();
    }

    @Get('turnos/:id') 
    getTurno(@Param('id') id: string) {
        return this.agenda.getTurnoId(id);
    }

    @Post('turnos') 
    crearTurno(@Body() body: any) {
        return this.agenda.ingresarTurno(body);
    }

    @Get('diagnosticos') 
    listarDiagnosticosTodos() {
        return this.agenda.listarDiagnosticos();
    }

    @Get('diagnosticos/:mascota') 
    listarDiagnosticosPorMascota(@Param('mascota') mascota: string) {
        return this.agenda.listarDiagnosticos(mascota);
    }

    @Post('diagnosticos') 
    registrarDiagnostico(@Body() body: any) {
        return this.agenda.registrarDiagnostico(body);
    }
   
    @Delete('diagnosticos/:id')
    borrarDiagnostico(@Param('id') id: string) {
        return this.agenda.borrarDiagnostico(id);
    }
    @Get('vacunas')
    listarVacunasTodas() {
        return this.agenda.listarVacunas();
    }

    @Get('vacunas/:mascota')
    listarVacunasPorMascota(@Param('mascota') mascota: string) {
        return this.agenda.listarVacunas(mascota);
    }

    @Post('vacunas')
    registrarVacuna(@Body() body: any) {
        return this.agenda.registrarVacuna(body);
    }

    @Get('tratamientos')
    listarTratamientosTodos() {
        return this.agenda.listarTratamientos();
    }

    @Get('tratamientos/:mascota')
    listarTratamientosPorMascota(@Param('mascota') mascota: string) {
        return this.agenda.listarTratamientos(mascota);
    }

    @Post('tratamientos')
    registrarTratamiento(@Body() body: any) {
        return this.agenda.registrarTratamiento(body);
    }
   
    @Put('turnos/:id')
    actualizar(@Param('id') id: string, @Body() body: any) {
        return this.agenda.actualizarTurno(id, body);
    }

    @Delete('turnos/:id')
    borrar(@Param('id') id: string) {
        return this.agenda.borrarTurno(id);
    }

}




