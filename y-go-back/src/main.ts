import { NestFactory } from "@nestjs/core"
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  const corsOptions: CorsOptions = {
    origin: `http://localhost:4200`,
    methods: `GET,HEAD,PUT,PATCH,POST,DELETE`,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }
  app.enableCors(corsOptions)
  await app.listen(3000)
}
bootstrap()
