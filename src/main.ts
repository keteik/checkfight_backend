import { ConsoleLogger } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new ConsoleLogger();
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(Number(process.env.APP_PORT));
    logger.log(`Application has started on port ${process.env.APP_PORT}...`);
  } catch(err) {
    logger.error(err.message);
  }
}
bootstrap();
