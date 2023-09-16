import { Module } from '@nestjs/common';
import { AuthenticationService } from './jwt.authentication.service';
import { AuthenticationController } from './jwt.authentication.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import {
  Authentication,
  AuthenticationSchema,
} from './entities/jwt.authentication.entity';
import { UsersModule } from 'src/users/users.module';
import  'dotenv/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Authentication.name, schema: AuthenticationSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '60m' },
    }),
    UsersModule
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
