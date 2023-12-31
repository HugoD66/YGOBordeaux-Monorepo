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
exports.Bar = void 0;
const typeorm_1 = require("typeorm");
const picture_list_entity_1 = require("../../picture-list/entities/picture-list.entity");
const geo_entity_1 = require("../../geo/entities/geo.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Bar = exports.Bar = class Bar {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], Bar.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Bar.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Bar.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bar.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Bar.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Bar.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Bar.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Bar.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => picture_list_entity_1.PictureList, pictureList => pictureList.bar, {
        cascade: ['insert', 'update', 'remove'],
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", picture_list_entity_1.PictureList)
], Bar.prototype, "pictureList", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => geo_entity_1.Geo, geo => geo.bar, {
        cascade: ['insert', 'update', 'remove'],
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", geo_entity_1.Geo)
], Bar.prototype, "geo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createBars),
    (0, typeorm_1.JoinColumn)({ name: 'createdById' }),
    __metadata("design:type", user_entity_1.User)
], Bar.prototype, "createdBy", void 0);
exports.Bar = Bar = __decorate([
    (0, typeorm_1.Entity)()
], Bar);
//# sourceMappingURL=bar.entity.js.map