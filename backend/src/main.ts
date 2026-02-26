import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // HABILITAR CORS
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        'http://localhost:5173',
        'https://urban-bike.vercel.app',
      ];

      // Permitir dominios preview de Vercel automáticamente
      const isVercelPreview =
        origin.endsWith('.vercel.app');

      if (
        allowedOrigins.includes(origin) ||
        isVercelPreview
      ) {
        return callback(null, true);
      }

      return callback(
        new Error('Not allowed by CORS'),
        false,
      );
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();