import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthenticationDocument = HydratedDocument<Authentication>;

@Schema()
export class Authentication {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const AuthenticationSchema =
  SchemaFactory.createForClass(Authentication);
