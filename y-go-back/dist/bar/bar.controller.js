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
exports.BarController = void 0;
const common_1 = require("@nestjs/common");
const bar_service_1 = require("./bar.service");
const create_bar_dto_1 = require("./dto/create-bar.dto");
const update_bar_dto_1 = require("./dto/update-bar.dto");
let BarController = class BarController {
    constructor(barService) {
        this.barService = barService;
    }
    create(createBarDto) {
        return this.barService.create(createBarDto);
    }
    findAll() {
        return this.barService.findAll();
    }
    findOne(id) {
        return this.barService.findOne(+id);
    }
    update(id, updateBarDto) {
        return this.barService.update(+id, updateBarDto);
    }
    remove(id) {
        return this.barService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bar_dto_1.CreateBarDto]),
    __metadata("design:returntype", void 0)
], BarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bar_dto_1.UpdateBarDto]),
    __metadata("design:returntype", void 0)
], BarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BarController.prototype, "remove", null);
BarController = __decorate([
    (0, common_1.Controller)(`bar`),
    __metadata("design:paramtypes", [bar_service_1.BarService])
], BarController);
exports.BarController = BarController;
//# sourceMappingURL=bar.controller.js.map