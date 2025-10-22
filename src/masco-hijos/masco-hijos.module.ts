import { Module } from '@nestjs/common';
import { MascoHijosController } from './masco-hijos.controller';
import { MascoHijosService } from './masco-hijos.service';

@Module({
  controllers: [MascoHijosController],
  providers: [MascoHijosService]
})
export class MascoHijosModule {}
