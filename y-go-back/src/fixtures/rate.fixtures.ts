import {Injectable} from "@nestjs/common";
import {UserBarRating} from "../user-bar-rating/entities/user-bar-rating.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { UserBarRatingService } from "../user-bar-rating/user-bar-rating.service";
import {CreateUserBarRatingDto} from "../user-bar-rating/dto/create-user-bar-rating.dto";
import {BarsService} from "../bars/bars.service";
import {UsersService} from "../users/users.service";
import {User} from "../users/entities/user.entity";
import {ResponseBarDto} from "../bars/dto/response-bar.dto";
import {UserResponseDto} from "../users/dto/user-response.dto";
@Injectable()
export class RateFixtures {
  constructor(
    private userBarRatingService: UserBarRatingService,

    private usersService: UsersService,

    private barsService: BarsService
  ) {}

  async seedRates(): Promise<void> {
    const users: User[] = await this.usersService.findAll();
    const bars: ResponseBarDto[] = await this.barsService.findAll();

    for (const user of users) {
      for (let i = 0; i < 5; i++) {
        const randomBar = bars[Math.floor(Math.random() * bars.length)];
        const randomRate = Math.floor(Math.random() * 6);

        const userDto: UserResponseDto = await this.usersService.findOne(user.id);
        const barDto: ResponseBarDto = await this.barsService.findOne(randomBar.id);

        const rateDto: CreateUserBarRatingDto = {
          rate: randomRate,
          user: userDto,
          bar: barDto,
        };

        try {
          await this.userBarRatingService.create(rateDto);
        } catch (error) {
          console.error(`Error creating rate for user ${user.id} and bar ${randomBar.id}:`, error);
        }
      }
    }

    console.log('Seeding rates complete!');
  }

}
