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
exports.PostsService = void 0;
const common_1 = require('@nestjs/common');
const post_entity_1 = require('./entities/post.entity');
const bars_service_1 = require('../bars/bars.service');
const users_service_1 = require('../users/users.service');
const typeorm_1 = require('typeorm');
const typeorm_2 = require('@nestjs/typeorm');
let PostsService = (exports.PostsService = class PostsService {
  constructor(postRepository, usersService, barsService) {
    this.postRepository = postRepository;
    this.usersService = usersService;
    this.barsService = barsService;
  }
  async create(createPostDto, userId) {
    try {
      console.log(createPostDto);
      console.log('createPostDto BACK');
      const user = await this.usersService.findOne(userId);
      const bar = await this.barsService.findOne(createPostDto.barId);
      const post = this.postRepository.create({
        message: createPostDto.message,
        user: user,
        bar: bar,
      });
      console.log(post);
      return await this.postRepository.save(post);
    } catch (error) {
      throw error;
    }
  }
  async findOne(id) {
    return await this.postRepository.findOne({ where: { id } });
  }
  async findAll() {
    return await this.postRepository.find();
  }
  async findAllByBar(barId) {
    return await this.postRepository.find({ where: { bar: { id: barId } } });
  }
  async update(id, updatePostDto) {
    const post = await this.postRepository.preload({
      id: id,
      ...updatePostDto,
    });
    if (!post) {
      throw new common_1.NotFoundException(`Post with id ${id} not found`);
    }
    return await this.postRepository.save(post);
  }
  async remove(id) {
    const post = await this.findOne(id);
    if (!post) {
      throw new common_1.NotFoundException(`Post with id ${id} not found`);
    }
    await this.postRepository.delete(id);
  }
});
exports.PostsService = PostsService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(post_entity_1.Post)),
    __metadata('design:paramtypes', [
      typeorm_1.Repository,
      users_service_1.UsersService,
      bars_service_1.BarsService,
    ]),
  ],
  PostsService,
);
//# sourceMappingURL=posts.services.js.map
