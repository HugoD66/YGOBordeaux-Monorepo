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
exports.BarsController = void 0;
const common_1 = require(`@nestjs/common`);
const public_decorator_1 = require(`../users/auth/public.decorator`);
let BarsController = class BarsController {
  constructor(barService) {
    this.barService = barService;
  }
  create(createBarDto) {
    return __awaiter(this, void 0, void 0, function* () {
      const bar = yield this.barService.create(createBarDto);
      return bar;
    });
  }
  findOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const barSelected = yield this.barService.findOne(id);
      if (!barSelected) {
        throw new Error(`Bar with id ${id} not found`);
      }
      return barSelected;
    });
  }
  findAll() {
    return __awaiter(this, void 0, void 0, function* () {
      const barList = yield this.barService.findAll();
      return barList;
    });
  }
  update(id, updateBarDto) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.barService.update(id, updateBarDto);
    });
  }
  remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const bar = yield this.barService.findOne(id);
      if (!bar) {
        throw new common_1.NotFoundException(`Bar does not exist!`);
      }
      return this.barService.remove(id);
    });
  }
};
__decorate(
  [
    (0, public_decorator_1.Public)(), // TEMP
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
  ],
  BarsController.prototype,
  `create`,
  null,
);
__decorate(
  [
    (0, public_decorator_1.Public)(), // TEMP
    (0, common_1.Get)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
  ],
  BarsController.prototype,
  `findOne`,
  null,
);
__decorate(
  [(0, public_decorator_1.Public)(), (0, common_1.Get)()],
  BarsController.prototype,
  `findAll`,
  null,
);
__decorate(
  [
    (0, common_1.Patch)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
  ],
  BarsController.prototype,
  `update`,
  null,
);
__decorate(
  [(0, common_1.Delete)(`:id`), __param(0, (0, common_1.Param)(`id`))],
  BarsController.prototype,
  `remove`,
  null,
);
BarsController = __decorate([(0, common_1.Controller)(`bars`)], BarsController);
exports.BarsController = BarsController;
