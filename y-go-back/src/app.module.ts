import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { GeoModule } from "./geo/geo.module"
import { BarsModule } from "./bars/bars.module"
import { User } from "./users/entities/user.entity"
import { Bar } from "./bars/entities/bar.entity"
import { Geo } from "./geo/entities/geo.entity"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { jwtConstants } from "./users/auth/constant"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { APP_GUARD } from "@nestjs/core"
import { AuthGuard } from "./users/auth/auth.guard"
import { PictureList } from "./picture-list/entities/picture-list.entity"
import { PictureListModule } from "./picture-list/picture-list.module"
import { UserBarRating } from "./user-bar-rating/entities/user-bar-rating.entity"
import { UserBarRatingModule } from "./user-bar-rating/user-bar-rating.module"

@Module({
  imports: [
    UsersModule,
    BarsModule,
    PictureListModule,
    GeoModule,
    UserBarRatingModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule.register({ defaultStrategy: `jwt` }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: `1h` },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbConfig = {
          type: `postgres` as const,
          host: configService.get(`DB_HOST`),
          port: +configService.get<number>(`DB_PORT`),
          username: configService.get(`DB_USERNAME`),
          password: configService.get(`DB_PASSWORD`),
          database: configService.get(`DB_NAME`),
          entities: [User, Bar, PictureList, Geo, UserBarRating],
          synchronize: true,
        }
        console.log(dbConfig)
        return dbConfig
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
