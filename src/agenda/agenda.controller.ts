import { Controller, Get } from '@nestjs/common';
import { TurnosService } from './agenda.service';

@Controller('agenda')
export class AgendaController {
    constructor(private readonly agenda: TurnosService){}
   
    @Get('turnos')
    getTurnos(){
        return this.agenda.getTurnos();
    }

}


