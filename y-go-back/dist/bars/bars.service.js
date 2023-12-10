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
let BarsService = class BarsService {
    constructor(barRepository) {
        this.barRepository = barRepository;
    }
    async create(createBarDto) {
        try {
            const bar = this.barRepository.create(createBarDto);
            const savedBar = await this.barRepository.save(bar);
            return savedBar;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        const responseBar = await this.barRepository.findOne({ where: { id } });
        return responseBar;
    }
    async findAll() {
        const barList = await this.barRepository.find();
        return barList;
    }
    async update(id, updateBarDto) {
        await this.barRepository.update(id, updateBarDto);
        const updatedUser = await this.barRepository.findOne({ where: { id } });
        return updatedUser;
    }
    async remove(id) {
        await this.barRepository.delete(id);
    }
};
BarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bar_entity_1.Bar)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BarsService);
exports.BarsService = BarsService;
//# sourceMappingURL=bars.service.js.map