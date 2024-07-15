import { Controller, Post, Param, Body } from '@nestjs/common';
import { GerenteService } from '../services/gerente.service';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post()
  async create(@Body() createGerenteDto: { nomeCompleto: string, identificacao: string }) {
    return this.gerenteService.create(createGerenteDto.nomeCompleto, createGerenteDto.identificacao);
  }

  @Post(':id/clientes')
  async addCliente(@Param('id') id: string, @Body() addClienteDto: { clienteId: string }) {
    return this.gerenteService.addCliente(id, addClienteDto.clienteId);
  }

  @Post(':gerenteId/clientes/:clienteId/contas')
  async openAccount(
    @Param('gerenteId') gerenteId: string,
    @Param('clienteId') clienteId: string,
    @Body() body: { tipo: string, saldo: number }
  ) {
    return this.gerenteService.openAccount(gerenteId, clienteId, body.tipo, body.saldo);
  }
}
