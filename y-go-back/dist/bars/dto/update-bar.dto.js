'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateBarDto = void 0;
const mapped_types_1 = require('@nestjs/mapped-types');
const create_bar_dto_1 = require('./create-bar.dto');
const class_validator_1 = require('class-validator');
const user_response_dto_1 = require('../../users/dto/user-response.dto');
const particularity_enum_1 = require('../entities/types/particularity.enum');
class UpdateBarDto extends (0, mapped_types_1.PartialType)(
  create_bar_dto_1.CreateBarDto,
) {}
exports.UpdateBarDto = UpdateBarDto;
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata('design:type', String),
  ],
  UpdateBarDto.prototype,
  'name',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata('design:type', String),
  ],
  UpdateBarDto.prototype,
  'adresse',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata('design:type', String),
  ],
  UpdateBarDto.prototype,
  'description',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata('design:type', String),
  ],
  UpdateBarDto.prototype,
  'telephone',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    __metadata('design:type', user_response_dto_1.UserResponseDto),
  ],
  UpdateBarDto.prototype,
  'createdBy',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata('design:type', String),
  ],
  UpdateBarDto.prototype,
  'picture',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(particularity_enum_1.ParticularityEnum, {
      each: true,
    }),
    __metadata('design:type', Array),
  ],
  UpdateBarDto.prototype,
  'particularities',
  void 0,
);
//# sourceMappingURL=update-bar.dto.js.map
