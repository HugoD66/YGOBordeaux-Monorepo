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
exports.CreateBarDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const response_geo_dto_1 = require("../../geo/dto/response-geo.dto");
const response_picture_list_dto_1 = require("../../picture-list/dto/response-picture-list.dto");
const user_response_dto_1 = require("../../users/dto/user-response.dto");
const particularity_enum_1 = require("../entities/types/particularity.enum");
class CreateBarDto {
}
exports.CreateBarDto = CreateBarDto;
__decorate([
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: `Nom bars`, description: `Nom du bars` }),
    __metadata("design:type", String)
], CreateBarDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: `Adresse`, description: `Adresse du bars` }),
    __metadata("design:type", String)
], CreateBarDto.prototype, "adresse", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: `Description`, description: `Description du bars` }),
    __metadata("design:type", String)
], CreateBarDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateBarDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: `Telephone`, description: `Telephone du bars` }),
    __metadata("design:type", String)
], CreateBarDto.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateBarDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", response_picture_list_dto_1.ResponsePictureListDto)
], CreateBarDto.prototype, "pictureList", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", response_geo_dto_1.ResponseGeoDto)
], CreateBarDto.prototype, "geo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", user_response_dto_1.UserResponseDto)
], CreateBarDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(particularity_enum_1.ParticularityEnum, { each: true }),
    (0, swagger_1.ApiProperty)({ example: '[ParticularityEnum.AFTERWORK, ParticularityEnum.THEMEPARTY]', description: 'Liste des particularités du bar', enum: particularity_enum_1.ParticularityEnum, isArray: true }),
    __metadata("design:type", Array)
], CreateBarDto.prototype, "particularities", void 0);
//# sourceMappingURL=create-bar.dto.js.map