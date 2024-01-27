"use strict"
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator[`throw`](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, `__esModule`, { value: true })
exports.AuthGuard = void 0
const common_1 = require(`@nestjs/common`)
const constant_1 = require(`./constant`)
const public_decorator_1 = require(`./public.decorator`)
let AuthGuard = class AuthGuard {
  constructor(jwtService, reflector) {
    this.jwtService = jwtService
    this.reflector = reflector
  }
  canActivate(context) {
    return __awaiter(this, void 0, void 0, function* () {
      const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ])
      if (isPublic) {
        return true
      }
      const request = context.switchToHttp().getRequest()
      const token = this.extractTokenFromHeader(request)
      console.log(token)
      if (!token) {
        throw new common_1.UnauthorizedException()
      }
      try {
        const payload = yield this.jwtService.verifyAsync(token, {
          secret: constant_1.jwtConstants.secret,
        })
        request[`user`] = payload
      } catch (_a) {
        throw new common_1.UnauthorizedException()
      }
      return true
    })
  }
  extractTokenFromHeader(request) {
    var _a, _b
    const [type, token] =
      (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(` `)) !== null &&
      _b !== void 0
        ? _b
        : []
    return type === `Bearer` ? token : undefined
  }
}
AuthGuard = __decorate([(0, common_1.Injectable)()], AuthGuard)
exports.AuthGuard = AuthGuard
