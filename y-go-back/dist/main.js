"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const bar_fixtures_1 = require("./fixtures/bar.fixtures");
const user_fixtures_1 = require("./fixtures/user.fixtures");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const corsOptions = {
        origin: "http://localhost:4200",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    };
    app.enableCors(corsOptions);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Swagger")
        .addBearerAuth()
        .setDescription("The API description")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    const userFixtures = app.get(user_fixtures_1.UserFixtures);
    const barFixtures = app.get(bar_fixtures_1.BarFixtures);
    await userFixtures.seedUsers();
    await barFixtures.seedBars();
    app.use(express.json({ limit: '50mb' }));
    app.use('/uploads', express.static('uploads'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map