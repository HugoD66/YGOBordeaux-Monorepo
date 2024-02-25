import { Injectable } from "@nestjs/common"
import { UserBarRatingService } from "../user-bar-rating/user-bar-rating.service"
import { CreateUserBarRatingDto } from "../user-bar-rating/dto/create-user-bar-rating.dto"
import { BarsService } from "../bars/bars.service"
import { UsersService } from "../users/users.service"
import { User } from "../users/entities/user.entity"
import { ResponseBarDto } from "../bars/dto/response-bar.dto"
import { UserResponseDto } from "../users/dto/user-response.dto"
@Injectable()
export class RateFixtures {
  constructor(
    private userBarRatingService: UserBarRatingService,

    private usersService: UsersService,

    private barsService: BarsService
  ) {}

  async seedRates(): Promise<void> {
    const users: User[] = await this.usersService.findAll()

    for (const user of users) {
      for (let i = 0; i < 5; i++) {
        const randomRate = Math.floor(Math.random() * 6)

        const userDto: UserResponseDto = await this.usersService.findOne(user.id)
        const barDto: ResponseBarDto = await this.barsService.findOneRandom()

        const rateDto: CreateUserBarRatingDto = {
          rate: randomRate,
          user: userDto,
          bar: barDto,
        }
        try {
          await this.userBarRatingService.create(rateDto)
        } catch {}
      }
    }
    console.log(`Seeding rates complete!`)
  }
}
