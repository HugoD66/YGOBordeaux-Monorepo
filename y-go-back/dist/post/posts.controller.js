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
exports.PostsController = void 0;
const swagger_1 = require('@nestjs/swagger');
const common_1 = require('@nestjs/common');
const public_decorator_1 = require('../users/auth/public.decorator');
const create_post_dto_1 = require('./dto/create-post.dto');
const posts_services_1 = require('./posts.services');
const update_post_dto_1 = require('./dto/update-post.dto');
let PostsController = (exports.PostsController = class PostsController {
  constructor(postsService) {
    this.postsService = postsService;
  }
  async create(createPostDto, req) {
    console.log(createPostDto);
    const post = await this.postsService.create(createPostDto, req.user.sub);
    return post;
  }
  async findOne(id) {
    const postSelected = await this.postsService.findOne(id);
    if (!postSelected) {
      throw new common_1.NotFoundException(`Post with id ${id} not found`);
    }
    return postSelected;
  }
  async findAll() {
    const postList = await this.postsService.findAll();
    if (!postList) {
      throw new common_1.NotFoundException(`PostList not found`);
    }
    return postList;
  }
  async findAllByBar(barId) {
    const postList = await this.postsService.findAllByBar(barId);
    if (!postList) {
      throw new common_1.NotFoundException(`PostList not found`);
    }
    return postList;
  }
  async update(id, updatePostDto) {
    const postUpdated = await this.postsService.update(id, updatePostDto);
    return postUpdated;
  }
  async remove(id) {
    const post = await this.postsService.findOne(id);
    if (!post) {
      throw new common_1.NotFoundException(`Post does not exist!`);
    }
    await this.postsService.remove(id);
  }
});
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [create_post_dto_1.CreatePostDto, Object]),
    __metadata('design:returntype', Promise),
  ],
  PostsController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', Promise),
  ],
  PostsController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  PostsController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('by-bar/:barId'),
    __param(0, (0, common_1.Param)(`barId`)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', Promise),
  ],
  PostsController.prototype,
  'findAllByBar',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, update_post_dto_1.UpdatePostDto]),
    __metadata('design:returntype', Promise),
  ],
  PostsController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', Promise),
  ],
  PostsController.prototype,
  'remove',
  null,
);
exports.PostsController = PostsController = __decorate(
  [
    (0, common_1.Controller)(`posts`),
    (0, swagger_1.ApiTags)(`Posts`),
    __metadata('design:paramtypes', [posts_services_1.PostsService]),
  ],
  PostsController,
);
//# sourceMappingURL=posts.controller.js.map
