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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBarRating = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const bar_entity_1 = require("../../bars/entities/bar.entity");
const class_validator_1 = require("class-validator");
let UserBarRating = exports.UserBarRating = class UserBarRating {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserBarRating.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], UserBarRating.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserBarRating.prototype, "ratedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.userBarRatings),
    __metadata("design:type", user_entity_1.User)
], UserBarRating.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bar_entity_1.Bar, bar => bar.userBarRatings),
    __metadata("design:type", bar_entity_1.Bar)
], UserBarRating.prototype, "bar", void 0);
exports.UserBarRating = UserBarRating = __decorate([
    (0, typeorm_1.Entity)()
], UserBarRating);
//# sourceMappingURL=user-bar-rating.entity.js.map