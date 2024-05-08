import { NestFactory } from '@nestjs/core';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { BarFixtures } from './fixtures/bar.fixtures';
import { RateFixtures } from './fixtures/rate.fixtures';
import { UserFixtures } from './fixtures/user.fixtures';
import { PostFixtures } from './fixtures/post.fixtures';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Configuration CORS

  const corsOptions: CorsOptions = {
    origin: `http://localhost:4200`,
    methods: `GET,HEAD,PUT,PATCH,POST,DELETE`,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle(`Swagger`)
    .addBearerAuth()
    .setDescription(`The API description`)
    .setVersion(`1.0`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`api`, app, document);

  // Création des fixtures

  const userFixtures: UserFixtures = app.get(UserFixtures);
  const barFixtures: BarFixtures = app.get(BarFixtures);
  const rateFixtures: RateFixtures = app.get(RateFixtures);
  const postFixtures: PostFixtures = app.get(PostFixtures);
  await userFixtures.seedUsers();
  await barFixtures.seedBars();
  await rateFixtures.seedRates();
  await postFixtures.seedPosts();

  // Augmentation taille requetes JSON (pictures)
  app.use(express.json({ limit: `50mb` }));
  // app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // Renvoi des photos
  app.use(`/uploads`, express.static(`uploads`));

  // Écoute sur un port
  await app.listen(3000);
}

bootstrap();
