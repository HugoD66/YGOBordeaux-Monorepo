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
exports.UserBarRatingService = void 0;
const common_1 = require("@nestjs/common");
const user_bar_rating_entity_1 = require("./entities/user-bar-rating.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const bars_service_1 = require("../bars/bars.service");
let UserBarRatingService = exports.UserBarRatingService = class UserBarRatingService {
    constructor(rateRepository, usersServices, barsService) {
        this.rateRepository = rateRepository;
        this.usersServices = usersServices;
        this.barsService = barsService;
    }
    async create(createUserBarRatingDto) {
        try {
            const user = await this.usersServices.findOne(createUserBarRatingDto.user.id);
            const bar = await this.barsService.findOnePartial(createUserBarRatingDto.bar.id);
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${createUserBarRatingDto.user.id} not found`);
            }
            if (!bar) {
                throw new common_1.NotFoundException(`Bar with ID ${createUserBarRatingDto.bar.id} not found`);
            }
            const existingRate = await this.rateRepository.findOne({
                where: {
                    user: { id: user.id },
                    bar: { id: bar.id },
                },
            });
            if (existingRate) {
                return this.update(existingRate.id, {
                    rate: createUserBarRatingDto.rate,
                });
            }
            const rate = this.rateRepository.create({
                ...createUserBarRatingDto,
                user,
                bar,
            });
            const savedRate = await this.rateRepository.save(rate);
            await this.updateBarAverageRating(createUserBarRatingDto.bar.id);
            return savedRate;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        return await this.rateRepository.findOne({
            where: { id },
            relations: [`user`, `bar`],
        });
    }
    async findAll() {
        return await this.rateRepository.find({ relations: [`user`, `bar`] });
    }
    async findAllRatesByBarId(barId) {
        return await this.rateRepository.find({
            where: { bar: { id: barId } },
            relations: [`user`, `bar`],
        });
    }
    async update(id, updateUserBarRatingDto) {
        await this.rateRepository.update(id, updateUserBarRatingDto);
        const updatedRate = await this.rateRepository.findOne({
            where: { id },
        });
        await this.updateBarAverageRating(updateUserBarRatingDto.bar.id);
        return updatedRate;
    }
    async updateBarAverageRating(barId) {
        const ratings = await this.rateRepository.find({
            where: { bar: { id: barId } },
        });
        const averageRating = ratings.reduce((acc, rating) => acc + rating.rate, 0) / ratings.length;
        await this.barsService.updateAverageRating(barId, averageRating);
    }
    async countVoters(barId) {
        const ratings = await this.rateRepository.find({
            where: { bar: { id: barId } },
        });
        console.log(ratings);
        return ratings.length;
    }
    async remove(id) {
        await this.rateRepository.delete(id);
    }
};
exports.UserBarRatingService = UserBarRatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_bar_rating_entity_1.UserBarRating)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_service_1.UsersService,
        bars_service_1.BarsService])
], UserBarRatingService);
//# sourceMappingURL=user-bar-rating.service.js.map