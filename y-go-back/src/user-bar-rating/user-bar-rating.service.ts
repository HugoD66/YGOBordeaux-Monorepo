import { Injectable } from '@nestjs/common';
import { CreateUserBarRatingDto } from './dto/create-user-bar-rating.dto';
import { UpdateUserBarRatingDto } from './dto/update-user-bar-rating.dto';

@Injectable()
export class UserBarRatingService {
  create(createUserBarRatingDto: CreateUserBarRatingDto) {
    return 'This action adds a new userBarRating';
  }

  findAll() {
    return `This action returns all userBarRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBarRating`;
  }

  update(id: number, updateUserBarRatingDto: UpdateUserBarRatingDto) {
    return `This action updates a #${id} userBarRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBarRating`;
  }
}
