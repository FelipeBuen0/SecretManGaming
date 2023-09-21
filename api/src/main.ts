import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  app.enableCors({
    origin: ['http://192.168.15.15:3001'],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  });
}
bootstrap();
