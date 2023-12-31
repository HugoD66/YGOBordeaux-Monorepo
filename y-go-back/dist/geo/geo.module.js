"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoModule = void 0;
const common_1 = require("@nestjs/common");
const geo_service_1 = require("./geo.service");
const geo_controller_1 = require("./geo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const geo_entity_1 = require("./entities/geo.entity");
const axios_1 = require("@nestjs/axios");
let GeoModule = exports.GeoModule = class GeoModule {
};
exports.GeoModule = GeoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([geo_entity_1.Geo]),
            axios_1.HttpModule.registerAsync({
                useFactory: () => ({
                    timeout: 5000,
                    maxRedirects: 5,
                }),
            })
        ],
        controllers: [geo_controller_1.GeoController],
        providers: [geo_service_1.GeoService],
        exports: [geo_service_1.GeoService],
    })
], GeoModule);
//# sourceMappingURL=geo.module.js.map