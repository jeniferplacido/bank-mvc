import { Controller, Post, Put, Param, Body } from '@nestjs/common';
import { ContaService } from '../services/conta.service';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Put(':id/tipo')
  async modifyAccountType(@Param('id') id: string, @Body() body: { novoTipo: string }) {
    return this.contaService.updateTipo(id, body.novoTipo);
  }

}
