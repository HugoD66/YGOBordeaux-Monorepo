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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.PictureListService = void 0;
const common_1 = require('@nestjs/common');
const typeorm_1 = require('@nestjs/typeorm');
const picture_list_entity_1 = require('./entities/picture-list.entity');
const typeorm_2 = require('typeorm');
let PictureListService =
  (exports.PictureListService = class PictureListService {
    constructor(pictureListRepository) {
      this.pictureListRepository = pictureListRepository;
    }
    async create(createPictureListDto) {
      try {
        const pictureList =
          this.pictureListRepository.create(createPictureListDto);
        const savedPictureList =
          await this.pictureListRepository.save(pictureList);
        return savedPictureList;
      } catch (error) {
        throw error;
      }
    }
    async findOne(id) {
      const responsePictureList = await this.pictureListRepository.findOne({
        where: { id },
      });
      return responsePictureList;
    }
    async findAll() {
      const pictureList = await this.pictureListRepository.find();
      return pictureList;
    }
    async update(id, updatePictureListDto) {
      await this.pictureListRepository.update(id, updatePictureListDto);
      const updatedPictureList = await this.pictureListRepository.findOne({
        where: { id },
      });
      return updatedPictureList;
    }
    async remove(id) {
      await this.pictureListRepository.delete(id);
    }
  });
exports.PictureListService = PictureListService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(
      0,
      (0, typeorm_1.InjectRepository)(picture_list_entity_1.PictureList),
    ),
    __metadata('design:paramtypes', [typeorm_2.Repository]),
  ],
  PictureListService,
);
//# sourceMappingURL=picture-list.service.js.map
