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
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator[`throw`](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, `__esModule`, { value: true });
exports.UsersController = void 0;
const common_1 = require(`@nestjs/common`);
const create_user_dto_1 = require(`./dto/create-user.dto`);
const swagger_1 = require(`@nestjs/swagger`);
const public_decorator_1 = require(`./auth/public.decorator`);
const login_dto_1 = require(`./dto/login.dto`);
const auth_guard_1 = require(`./auth/auth.guard`);
let UsersController = class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }
  register(createUserDto) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const user = yield this.usersService.create(createUserDto);
        console.log(user);
        return user;
      } catch (error) {
        throw error;
      }
    });
  }
  login(loginDto) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const user = yield this.usersService.login(loginDto);
        return user;
      } catch (error) {
        throw error;
      }
    });
  }
  logout(req) {
    return __awaiter(this, void 0, void 0, function* () {
      return;
    });
  }
  getProfile(req) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const user = yield this.usersService.findOne(req.user.id);
        return user;
      } catch (error) {
        throw error;
      }
    });
  }
  findOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const user = yield this.usersService.findOne(id);
      if (!user) {
        throw new common_1.NotFoundException(`User does not exist!`);
      } else {
        return user;
      }
    });
  }
  findAll() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.usersService.findAll();
    });
  }
  update(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.usersService.update(id, user);
    });
  }
  remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const user = yield this.usersService.findOne(id);
      if (!user) {
        throw new common_1.NotFoundException(`User does not exist!`);
      }
      return this.usersService.remove(id);
    });
  }
};
__decorate(
  [
    (0, public_decorator_1.Public)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: `Register a new user` }),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(`/auth/register`),
    __param(0, (0, common_1.Body)()),
  ],
  UsersController.prototype,
  `register`,
  null,
);
__decorate(
  [
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(`/auth/login`),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: `Login user` }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    __param(0, (0, common_1.Body)()),
  ],
  UsersController.prototype,
  `login`,
  null,
);
__decorate(
  [
    (0, common_1.Post)(`/auth/logout`),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
  ],
  UsersController.prototype,
  `logout`,
  null,
);
__decorate(
  [(0, common_1.Get)(`me`), __param(0, (0, common_1.Req)())],
  UsersController.prototype,
  `getProfile`,
  null,
);
__decorate(
  [
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
  ],
  UsersController.prototype,
  `findOne`,
  null,
);
__decorate(
  [(0, public_decorator_1.Public)(), (0, common_1.Get)()],
  UsersController.prototype,
  `findAll`,
  null,
);
__decorate(
  [
    (0, common_1.Put)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
  ],
  UsersController.prototype,
  `update`,
  null,
);
__decorate(
  [(0, common_1.Delete)(`:id`), __param(0, (0, common_1.Param)(`id`))],
  UsersController.prototype,
  `remove`,
  null,
);
UsersController = __decorate(
  [(0, common_1.Controller)(`users`), (0, swagger_1.ApiTags)(`Users`)],
  UsersController,
);
exports.UsersController = UsersController;
