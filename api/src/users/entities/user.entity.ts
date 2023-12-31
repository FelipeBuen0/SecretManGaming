import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  username: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  credit: number;

  @Prop()
  countryId: number;

  @Prop()
  ddd: number;

  @Prop()
  phoneNumber: number;

  @Prop()
  ban: string;

  @Prop()
  signatureDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
