import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() createClienteDto: { nome: string, cpf: string }) {
    return this.clienteService.create(createClienteDto.nome, createClienteDto.cpf);
  }
}
