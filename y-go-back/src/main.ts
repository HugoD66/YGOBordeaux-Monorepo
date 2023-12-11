import { NestFactory } from "@nestjs/core";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { seedDatabase } from "./fixtures/seedDatabase";
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Configuration CORS

  const corsOptions: CorsOptions = {
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.enableCors(corsOptions);


  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle("Swagger")
    .addBearerAuth()
    .setDescription("The API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);


  //await seedDatabase();

  // Écoute sur un port
  await app.listen(3000);
}

bootstrap();
