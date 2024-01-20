"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoController = void 0;
const common_1 = require("@nestjs/common");
const geo_service_1 = require("./geo.service");
const create_geo_dto_1 = require("./dto/create-geo.dto");
const update_geo_dto_1 = require("./dto/update-geo.dto");
const public_decorator_1 = require("../users/auth/public.decorator");
let GeoController = exports.GeoController = class GeoController {
    constructor(geoService) {
        this.geoService = geoService;
    }
    async create(createGeoDto) {
        const geo = await this.geoService.create(createGeoDto);
        return geo;
    }
    async findAll() {
        const geo = await this.geoService.findAll();
        return geo;
    }
    async findOneByAdress(address) {
        try {
            const coordinates = await this.geoService.getCoordinates(address);
            return coordinates;
        }
        catch (error) {
            throw new Error(`Error fetching coordinates`);
        }
    }
    async findOneByGeo(lat, lng) {
        return this.geoService.getAdress(lat, lng);
    }
    update(id, updateGeoDto) {
        return this.geoService.update(id, updateGeoDto);
    }
    async remove(id) {
        const geo = await this.geoService.findOne(id);
        if (!geo) {
            throw new common_1.NotFoundException(`Geo with id ${id} not found`);
        }
        return this.geoService.remove(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_geo_dto_1.CreateGeoDto]),
    __metadata("design:returntype", Promise)
], GeoController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeoController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(`coordinates`),
    __param(0, (0, common_1.Query)(`address`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeoController.prototype, "findOneByAdress", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(`reverse-geocoding`),
    __param(0, (0, common_1.Query)(`lat`)),
    __param(1, (0, common_1.Query)(`lng`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], GeoController.prototype, "findOneByGeo", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_geo_dto_1.UpdateGeoDto]),
    __metadata("design:returntype", Promise)
], GeoController.prototype, "update", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Delete)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeoController.prototype, "remove", null);
exports.GeoController = GeoController = __decorate([
    (0, common_1.Controller)(`geo`),
    __metadata("design:paramtypes", [geo_service_1.GeoService])
], GeoController);
//# sourceMappingURL=geo.controller.js.map