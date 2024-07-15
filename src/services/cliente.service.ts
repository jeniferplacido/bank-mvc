import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from '../models/cliente.model';

@Injectable()
export class ClienteService {
  constructor(@InjectModel(Cliente.name) private clienteModel: Model<Cliente>) {}

  async create(nome: string, cpf: string): Promise<Cliente> {
    const newCliente = new this.clienteModel({ nome, cpf, contas: [] });
    return newCliente.save();
  }

}
