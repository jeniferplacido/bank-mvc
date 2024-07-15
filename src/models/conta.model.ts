import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Cliente } from './cliente.model';

@Schema()
export class Conta extends Document {
  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  saldo: number;

  @Prop({ type: Types.ObjectId, ref: 'Cliente' })
  cliente: Cliente;
}

export const ContaSchema = SchemaFactory.createForClass(Conta);
