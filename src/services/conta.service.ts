import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conta } from '../models/conta.model';
import { Cliente } from '../models/cliente.model';

@Injectable()
export class ContaService {
  constructor(@InjectModel(Conta.name) private contaModel: Model<Conta>) {}

  async create(tipo: string, saldo: number, cliente: Cliente): Promise<Conta> {
    const newConta = new this.contaModel({ tipo, saldo, cliente });
    return newConta.save();
  }

  async updateTipo(contaId: string, novoTipo: string): Promise<Conta> {
    return this.contaModel.findByIdAndUpdate(contaId, { tipo: novoTipo }, { new: true });
  }


}
