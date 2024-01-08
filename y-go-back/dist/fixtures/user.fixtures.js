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
exports.UserFixtures = void 0;
const common_1 = require('@nestjs/common');
const typeorm_1 = require('@nestjs/typeorm');
const typeorm_2 = require('typeorm');
const user_entity_1 = require('../users/entities/user.entity');
const users_service_1 = require('../users/users.service');
const user_roles_enum_1 = require('../users/entities/types/user.roles.enum');
let UserFixtures = (exports.UserFixtures = class UserFixtures {
  constructor(userRepository, usersService) {
    this.userRepository = userRepository;
    this.usersService = usersService;
  }
  async seedUsers() {
    const users = [
      {
        name: `Administrateur`,
        email: `admin@email.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Admin,
        picture: `./uploads/user/admin.png`,
        phone: `0606060616`,
      },
      {
        name: `John Doe`,
        email: `john1@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userHFixture1.png`,
        phone: `0606060606`,
      },
      {
        name: `Jane Doe`,
        email: `jane1@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userFFixture1.png`,
        phone: `0606060606`,
      },
      {
        name: `Alice Johnson`,
        email: `alice@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userFFixture2.png`,
        phone: `0606060606`,
      },
      {
        name: `Bob Smith`,
        email: `bob@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userHFixture2.png`,
        phone: `0606060606`,
      },
      {
        name: `Carol White`,
        email: `carol@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userFFixture3.png`,
        phone: `0606060606`,
      },
      {
        name: `Dave Brown`,
        email: `dave@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userHFixture3.png`,
        phone: `0606060606`,
      },
      {
        name: `Eve Black`,
        email: `eve@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userFFixture4.png`,
        phone: `0606060606`,
      },
      {
        name: `Frank Green`,
        email: `frank@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Utilisateur,
        picture: `./uploads/user/userHFixture4.png`,
        phone: `0606060606`,
      },
      {
        name: `Grace Blue`,
        email: `grace@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Admin,
        picture: `./uploads/user/userFFixture5.png`,
        phone: `0606060606`,
      },
      {
        name: `Henry Yellow`,
        email: `henry@example.com`,
        password: `Azeaze.66`,
        role: user_roles_enum_1.UserRoleEnum.Admin,
        picture: `./uploads/user/userHFixture5.png`,
        phone: `0606060606`,
      },
    ];
    for (const userData of users) {
      try {
        const existingUser = await this.userRepository.findOne({
          where: { email: userData.email },
        });
        if (!existingUser) {
          const createdUser = await this.usersService.create(userData);
          console.log(`User ${createdUser.email} created.`);
        }
      } catch (error) {
        console.error(`Error creating user ${userData.email}:`, error);
      }
    }
    console.log(`Seeding users complete!`);
  }
});
exports.UserFixtures = UserFixtures = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata('design:paramtypes', [
      typeorm_2.Repository,
      users_service_1.UsersService,
    ]),
  ],
  UserFixtures,
);
//# sourceMappingURL=user.fixtures.js.map
