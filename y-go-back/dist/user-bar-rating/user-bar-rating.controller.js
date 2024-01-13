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
exports.UserBarRatingController = void 0;
const common_1 = require("@nestjs/common");
const user_bar_rating_service_1 = require("./user-bar-rating.service");
const create_user_bar_rating_dto_1 = require("./dto/create-user-bar-rating.dto");
const update_user_bar_rating_dto_1 = require("./dto/update-user-bar-rating.dto");
const public_decorator_1 = require("../users/auth/public.decorator");
let UserBarRatingController = exports.UserBarRatingController = class UserBarRatingController {
    constructor(userBarRatingService) {
        this.userBarRatingService = userBarRatingService;
    }
    async create(createUserBarRatingDto) {
        const rate = await this.userBarRatingService.create(createUserBarRatingDto);
        return rate;
    }
    async findOne(id) {
        const rate = await this.userBarRatingService.findOne(id);
        return rate;
    }
    async findAll() {
        const rateList = await this.userBarRatingService.findAll();
        return rateList;
    }
    async countAverages(id) {
        return await this.userBarRatingService.countVoters(id);
    }
    async update(id, updateUserBarRatingDto) {
        return await this.userBarRatingService.update(id, updateUserBarRatingDto);
    }
    async remove(id) {
        return this.userBarRatingService.remove(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_bar_rating_dto_1.CreateUserBarRatingDto]),
    __metadata("design:returntype", Promise)
], UserBarRatingController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserBarRatingController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserBarRatingController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(`:id/count-voters`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserBarRatingController.prototype, "countAverages", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_bar_rating_dto_1.UpdateUserBarRatingDto]),
    __metadata("design:returntype", Promise)
], UserBarRatingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserBarRatingController.prototype, "remove", null);
exports.UserBarRatingController = UserBarRatingController = __decorate([
    (0, common_1.Controller)(`user-bar-rating`),
    __metadata("design:paramtypes", [user_bar_rating_service_1.UserBarRatingService])
], UserBarRatingController);
//# sourceMappingURL=user-bar-rating.controller.js.map