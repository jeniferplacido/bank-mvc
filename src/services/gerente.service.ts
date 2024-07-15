import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gerente } from '../models/gerente.model';
import { Cliente } from '../models/cliente.model';
import { ContaService } from './conta.service';

@Injectable()
export class GerenteService {
  constructor(
    @InjectModel(Gerente.name) private gerenteModel: Model<Gerente>,
    private contaService: ContaService
  ) {}

  async create(nomeCompleto: string, identificacao: string): Promise<Gerente> {
    const newGerente = new this.gerenteModel({ nomeCompleto, identificacao, clientes: [] });
    return newGerente.save();
  }

  async addCliente(gerenteId: string, clienteId: string): Promise<Gerente> {
    const gerente = await this.gerenteModel.findById(gerenteId);
    gerente.clientes.push(clienteId);
    return gerente.save();
  }

  async openAccount(gerenteId: string, clienteId: string, tipo: string, saldo: number): Promise<Conta> {
    const cliente = await this.clienteService.findById(clienteId);
    return this.contaService.create(tipo, saldo, cliente);
  }

  async closeAccount(contaId: string): Promise<Conta> {
    return this.contaModel.findByIdAndDelete(contaId);
  }

  async modifyAccountType(contaId: string, novoTipo: string): Promise<Conta> {
    return this.contaService.updateTipo(contaId, novoTipo);
  }

}
