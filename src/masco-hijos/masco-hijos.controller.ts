import { MascoHijosService } from './masco-hijos.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('masco-hijos')
export class MascoHijosController {
    constructor(private readonly mascotasService: MascoHijosService) { }

  
    @Get('pacientes')
    getMascotas(): any {
        return this.mascotasService.getMascotas();
    }

    @Get('pacientes/:id')
    getMascotasId(@Param('id') id: string): any {
        return this.mascotasService.getMacotasId(id);
    }

      @Post('ingresar')
    ingresarMascota(@Body() mascota: any): any {
        return this.mascotasService.ingreseMascota(mascota);
    }

  
    @Get('pacientes/:id/historial')
    historial(@Param('id') id: string): any {
        return this.mascotasService.getHistorialMascota(id);
    }

    @Get('recordatorios/chequeos')
    recordatorios(): any {
        return this.mascotasService.getRecordatorios(); 
    }

    
    @Get('duenos')
    getDuenos(): any {
        return this.mascotasService.getDuenos();
    }

}



