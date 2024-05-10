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
exports.BarsController = void 0;
const common_1 = require("@nestjs/common");
const bars_service_1 = require("./bars.service");
const create_bar_dto_1 = require("./dto/create-bar.dto");
const update_bar_dto_1 = require("./dto/update-bar.dto");
const public_decorator_1 = require("../users/auth/public.decorator");
const auth_guard_1 = require("../users/auth/auth.guard");
let BarsController = exports.BarsController = class BarsController {
    constructor(barService) {
        this.barService = barService;
    }
    async create(req, createBarDto) {
        const bar = await this.barService.create(createBarDto, req.user.id);
        return bar;
    }
    async findOne(id) {
        const barSelected = await this.barService.findOne(id);
        if (!barSelected) {
            throw new common_1.NotFoundException(`Bar with id ${id} not found`);
        }
        return barSelected;
    }
    async findAll() {
        const barList = await this.barService.findAll();
        if (!barList) {
            throw new common_1.NotFoundException(`BarList not found`);
        }
        return barList;
    }
    async update(id, updateBarDto) {
        const barUpdated = await this.barService.update(id, updateBarDto);
        return barUpdated;
    }
    async remove(id) {
        const bar = await this.barService.findOne(id);
        if (!bar) {
            throw new common_1.NotFoundException(`Bar does not exist!`);
        }
        await this.barService.remove(id);
    }
    async removeAllBars() {
        const bars = await this.barService.findAll();
        bars.forEach((bar) => {
            this.barService.remove(bar.id);
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_bar_dto_1.CreateBarDto]),
    __metadata("design:returntype", Promise)
], BarsController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BarsController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BarsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bar_dto_1.UpdateBarDto]),
    __metadata("design:returntype", Promise)
], BarsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BarsController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BarsController.prototype, "removeAllBars", null);
exports.BarsController = BarsController = __decorate([
    (0, common_1.Controller)(`bars`),
    __metadata("design:paramtypes", [bars_service_1.BarsService])
], BarsController);
//# sourceMappingURL=bars.controller.js.map