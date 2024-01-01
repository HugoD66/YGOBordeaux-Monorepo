import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBarRatingService } from './user-bar-rating.service';
import { CreateUserBarRatingDto } from './dto/create-user-bar-rating.dto';
import { UpdateUserBarRatingDto } from './dto/update-user-bar-rating.dto';

@Controller('user-bar-rating')
export class UserBarRatingController {
  constructor(private readonly userBarRatingService: UserBarRatingService) {}

  @Post()
  create(@Body() createUserBarRatingDto: CreateUserBarRatingDto) {
    return this.userBarRatingService.create(createUserBarRatingDto);
  }

  @Get()
  findAll() {
    return this.userBarRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBarRatingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBarRatingDto: UpdateUserBarRatingDto) {
    return this.userBarRatingService.update(+id, updateUserBarRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBarRatingService.remove(+id);
  }
}
