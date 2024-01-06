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
exports.GeoService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("typeorm");
const geo_entity_1 = require("./entities/geo.entity");
const typeorm_2 = require("@nestjs/typeorm");
let GeoService = exports.GeoService = class GeoService {
    constructor(httpService, configService, geoRepository) {
        this.httpService = httpService;
        this.configService = configService;
        this.geoRepository = geoRepository;
        this.apiKey = this.configService.get('MAPTILER_API_KEY', '1bYmKrc8pg0FSu8GXalV');
        this.geocodingUrl = this.configService.get('MAPTILER_GEOCODING_URL', 'https://api.maptiler.com/geocoding/');
    }
    async create(createGeoDto) {
        try {
            const geo = this.geoRepository.create(createGeoDto);
            const savedGeo = await this.geoRepository.save(geo);
            return savedGeo;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        const responseGeo = await this.geoRepository.findOne({ where: { id } });
        return responseGeo;
    }
    async findAll() {
        const geo = await this.geoRepository.find();
        return geo;
    }
    async getCoordinates(address) {
        const url = `${this.geocodingUrl}${encodeURIComponent(address)}.json?key=${this.apiKey}`;
        console.log(url);
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(url));
        const coordinates = response.data.features[0]?.geometry.coordinates;
        if (!coordinates) {
            throw new Error('No coordinates found for the provided address');
        }
        return { x: coordinates[0], y: coordinates[1] };
    }
    async getAdress(lat, lng) {
        const url = `${this.geocodingUrl}${lat},${lng}.json?key=${this.apiKey}`;
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(url));
        if (!response.data.features[0].place_name) {
            return `Localisation inconnue`;
        }
        return response.data.features[0].place_name;
    }
    async update(id, updateGeoDto) {
        await this.geoRepository.update(id, updateGeoDto);
        const updatedGeo = await this.geoRepository.findOne({ where: { id } });
        return updatedGeo;
    }
    async remove(id) {
        await this.geoRepository.remove(id);
    }
};
exports.GeoService = GeoService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_2.InjectRepository)(geo_entity_1.Geo)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService,
        typeorm_1.Repository])
], GeoService);
//# sourceMappingURL=geo.service.js.map