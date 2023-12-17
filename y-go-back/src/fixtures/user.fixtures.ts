import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { UsersService } from "../users/users.service";
import {UserRoleEnum} from "../users/entities/types/user.roles.enum";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UserResponseDto} from "../users/dto/user-response.dto";

@Injectable()
export class UserFixtures {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private usersService: UsersService,
  ) {}

  async seedUsers(): Promise<void> {
    const users: CreateUserDto[] = [
      { name: 'John Doe', email: 'john1@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userHFixture1.png" },
      { name: 'Jane Doe', email: 'jane1@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userFFixture1.png" },
      { name: 'Alice Johnson', email: 'alice@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userFFixture2.png" },
      { name: 'Bob Smith', email: 'bob@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userHFixture2.png" },
      { name: 'Carol White', email: 'carol@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userFFixture3.png" },
      { name: 'Dave Brown', email: 'dave@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userHFixture3.png" },
      { name: 'Eve Black', email: 'eve@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userFFixture4.png" },
      { name: 'Frank Green', email: 'frank@example.com', password: 'Azeaze.66', role: UserRoleEnum.Utilisateur, picture: "./uploads/user/userHFixture4.png" },
      { name: 'Grace Blue', email: 'grace@example.com', password: 'Azeaze.66', role: UserRoleEnum.Admin, picture: "./uploads/user/userFFixture5.png" },
      { name: 'Henry Yellow', email: 'henry@example.com', password: 'Azeaze.66', role: UserRoleEnum.Admin, picture: "./uploads/user/userHFixture5.png" },
    ];

    for (const userData of users) {
      try {
        const existingUser: User = await this.userRepository.findOne({ where: { email: userData.email } });
        if (!existingUser) {
          const createdUser: UserResponseDto = await this.usersService.create(userData);
          console.log(`User ${createdUser.email} created.`);
        }
      } catch (error) {
        console.error(`Error creating user ${userData.email}:`, error);
      }
    }

    console.log('Seeding users complete!');
  }
}
