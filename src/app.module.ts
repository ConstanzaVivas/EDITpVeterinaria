import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascoHijosModule } from './masco-hijos/masco-hijos.module';
import { AgendaModule } from './agenda/agenda.module';
@Module({

  imports: [AgendaModule, MascoHijosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
