import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StatusDocument = HydratedDocument<Status>;

@Schema()
export class Status {
  @Prop()
  status: string[];
}

export const StatusSchema = SchemaFactory.createForClass(Status);
