import { MascoHijosService } from './masco-hijos.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('masco-hijos')
export class MascoHijosController {
       constructor(private readonly mascotasService: MascoHijosService){}
     @Get('pacientes')
        getMascotas(): string {
         return this.mascotasService.getMascotas();
     }
     @Get('pacientes/:id')
        getMascotasId(@Param('id') id:String) : any{ 
            

            return this.mascotasService.getMacotasId(id);
        }
    @Post('ingresar')
    ingresarMascota(@Body() mascota:any)  {

        return this.mascotasService.ingreseMascota(mascota);
    }
}
