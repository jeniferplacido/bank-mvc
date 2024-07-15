import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from './models/cliente.model';
import { ContaModule } from './models/conta.model';
import { GerenteModule } from './models/gerente.model';
import { ClienteService } from './services/cliente.service';
import { ContaService } from './services/conta.service';
import { GerenteService } from './services/gerente.service';
import { ClienteController } from './controllers/cliente.controller';
import { ContaController } from './controllers/conta.controller';
import { GerenteController } from './controllers/gerente.controller';

@Module({
  imports: [
    MongooseModule.forRoot('MONGO_URL'),
    ClienteModule,
    ContaModule,
    GerenteModule
  ],
  controllers: [
    ClienteController,
    ContaController,
    GerenteController
  ],
  providers: [
    ClienteService,
    ContaService,
    GerenteService
  ]
})
export class AppModule {}
