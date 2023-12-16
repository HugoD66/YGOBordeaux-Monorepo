"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("./entities/user.entity");
const user_roles_enum_1 = require("./entities/types/user.roles.enum");
const errors_1 = require("./errorsRegister/errors");
let UsersService = class UsersService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    create(createUserDto) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield this.usersRepository.findOne({
                    where: { email: createUserDto.email },
                });
                if (existingUser) {
                    throw new errors_1.EmailAlreadyExistsException();
                }
                const salt = yield bcrypt.genSalt();
                const hashedPassword = yield bcrypt.hash(createUserDto.password, salt);
                const user = this.usersRepository.create({
                    name: createUserDto.name,
                    email: createUserDto.email,
                    password: hashedPassword,
                    role: (_a = createUserDto.role) !== null && _a !== void 0 ? _a : user_roles_enum_1.UserRoleEnum.Utilisateur,
                });
                const savedUser = yield this.usersRepository.save(user);
                return {
                    id: savedUser.id,
                    name: savedUser.name,
                    email: savedUser.email,
                    role: savedUser.role,
                };
            }
            catch (error) {
                if (error instanceof errors_1.EmailAlreadyExistsException ||
                    error instanceof errors_1.InvalidEmailFormatException ||
                    error instanceof errors_1.NameTooShortException ||
                    error instanceof errors_1.ServerErrorException ||
                    error instanceof errors_1.InvalidPasswordFormatException) {
                    throw error;
                }
                throw new errors_1.ServerErrorException();
            }
        });
    }
    login(loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.usersRepository.findOne({
                    where: { email: loginDto.email },
                });
                if (!user) {
                    throw new common_1.NotFoundException('User not found');
                }
                console.log('before passwordMatch' + user);
                const passwordMatch = yield bcrypt.compare(loginDto.password, user.password);
                if (!passwordMatch) {
                    throw new common_1.UnauthorizedException('Invalid password');
                }
                const payload = { sub: user.id, email: user.email };
                return Object.assign(Object.assign({}, user), { access_token: yield this.jwtService.signAsync(payload) });
            }
            catch (error) {
                throw error;
            }
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersRepository.findOne({ where: { id } });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersRepository.find();
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usersRepository.update(id, user);
            return this.usersRepository.findOne({ where: { id } });
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usersRepository.delete(id);
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User))
], UsersService);
exports.UsersService = UsersService;
