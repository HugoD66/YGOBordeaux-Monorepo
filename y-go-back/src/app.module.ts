import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { BarModule } from "./bar/bar.module"
import {User} from "./users/entities/user.entity";
import {Bar} from "./bar/entities/bar.entity";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
    UsersModule,
    BarModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbConfig = {
          type: 'postgres' as const,
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [User, Bar],
          synchronize: true,
        };
        console.log(dbConfig);
        return dbConfig;
      },
      inject: [ConfigService],
    }),
    //SeederModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
