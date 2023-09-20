import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/jwt.authentication.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://felipebueno:oJIoWTskH7vuLQT6@bueno.eik19d7.mongodb.net/',
    ),
    // ConfigModule.forRoot(),
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
