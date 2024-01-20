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
exports.BarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bar_entity_1 = require("./entities/bar.entity");
const picture_list_service_1 = require("../picture-list/picture-list.service");
const geo_service_1 = require("../geo/geo.service");
const users_service_1 = require("../users/users.service");
let BarsService = exports.BarsService = class BarsService {
    constructor(barRepository, pictureListService, geoService, usersService) {
        this.barRepository = barRepository;
        this.pictureListService = pictureListService;
        this.geoService = geoService;
        this.usersService = usersService;
    }
    async create(createBarDto, userId) {
        try {
            let user = await this.usersService.findOne(userId);
            let pictureListEntity = await this.pictureListService.create(createBarDto.pictureList);
            let geoEntity = await this.geoService.create(createBarDto.geo);
            const bar = this.barRepository.create({
                ...createBarDto,
                createdBy: user,
                pictureList: pictureListEntity,
                geo: geoEntity,
            });
            return await this.barRepository.save(bar);
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        const bar = await this.barRepository
            .createQueryBuilder(`bar`)
            .leftJoinAndSelect(`bar.pictureList`, `pictureList`)
            .leftJoinAndSelect(`bar.geo`, `geo`)
            .leftJoinAndSelect(`bar.createdBy`, `createdBy`)
            .where(`bar.id = :id`, { id })
            .getOne();
        if (!bar) {
            throw new common_1.NotFoundException(`Bar with id ${id} not found`);
        }
        return bar;
    }
    async findOnePartial(id) {
        return this.barRepository.findOne({ where: { id } });
    }
    async findAll() {
        const barList = await this.barRepository
            .createQueryBuilder(`bar`)
            .leftJoinAndSelect(`bar.pictureList`, `pictureList`)
            .leftJoinAndSelect(`bar.geo`, `geo`)
            .leftJoinAndSelect(`bar.createdBy`, `createdBy`)
            .getMany();
        return barList;
    }
    async update(id, updateBarDto) {
        await this.barRepository.update(id, updateBarDto);
        const updatedUser = await this.barRepository.findOne({
            where: { id },
        });
        return updatedUser;
    }
    async remove(id) {
        await this.barRepository.delete(id);
    }
    async updateAverageRating(barId, note) {
        await this.barRepository.update(barId, { note });
    }
};
exports.BarsService = BarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bar_entity_1.Bar)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        picture_list_service_1.PictureListService,
        geo_service_1.GeoService,
        users_service_1.UsersService])
], BarsService);
//# sourceMappingURL=bars.service.js.map