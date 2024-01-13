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
Object.defineProperty(exports, '__esModule', { value: true });
exports.PictureListModule = void 0;
const common_1 = require('@nestjs/common');
const picture_list_service_1 = require('./picture-list.service');
const picture_list_controller_1 = require('./picture-list.controller');
const typeorm_1 = require('@nestjs/typeorm');
const picture_list_entity_1 = require('./entities/picture-list.entity');
let PictureListModule =
  (exports.PictureListModule = class PictureListModule {});
exports.PictureListModule = PictureListModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        typeorm_1.TypeOrmModule.forFeature([picture_list_entity_1.PictureList]),
      ],
      controllers: [picture_list_controller_1.PictureListController],
      providers: [picture_list_service_1.PictureListService],
      exports: [picture_list_service_1.PictureListService],
    }),
  ],
  PictureListModule,
);
//# sourceMappingURL=picture-list.module.js.map
