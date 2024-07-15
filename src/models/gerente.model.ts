import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Cliente } from './cliente.model';

@Schema()
export class Gerente extends Document {
  @Prop({ required: true })
  nomeCompleto: string;

  @Prop({ required: true, unique: true })
  identificacao: string;

  @Prop({ type: [Types.ObjectId], ref: 'Cliente' })
  clientes: Cliente[];
}

export const GerenteSchema = SchemaFactory.createForClass(Gerente);
