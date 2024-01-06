"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const geo_module_1 = require("./geo/geo.module");
const bars_module_1 = require("./bars/bars.module");
const user_entity_1 = require("./users/entities/user.entity");
const bar_entity_1 = require("./bars/entities/bar.entity");
const geo_entity_1 = require("./geo/entities/geo.entity");
const config_1 = require("@nestjs/config");
const constant_1 = require("./users/auth/constant");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./users/auth/auth.guard");
const picture_list_entity_1 = require("./picture-list/entities/picture-list.entity");
const picture_list_module_1 = require("./picture-list/picture-list.module");
const user_bar_rating_entity_1 = require("./user-bar-rating/entities/user-bar-rating.entity");
const user_bar_rating_module_1 = require("./user-bar-rating/user-bar-rating.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            bars_module_1.BarsModule,
            picture_list_module_1.PictureListModule,
            geo_module_1.GeoModule,
            user_bar_rating_module_1.UserBarRatingModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                global: true,
                secret: constant_1.jwtConstants.secret,
                signOptions: { expiresIn: '1h' },
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => {
                    const dbConfig = {
                        type: 'postgres',
                        host: configService.get('DB_HOST'),
                        port: +configService.get('DB_PORT'),
                        username: configService.get('DB_USERNAME'),
                        password: configService.get('DB_PASSWORD'),
                        database: configService.get('DB_NAME'),
                        entities: [user_entity_1.User, bar_entity_1.Bar, picture_list_entity_1.PictureList, geo_entity_1.Geo, user_bar_rating_entity_1.UserBarRating],
                        synchronize: true,
                    };
                    console.log(dbConfig);
                    return dbConfig;
                },
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
            app_service_1.AppService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map