import { PartialType } from '@nestjs/swagger';
import { CreateUserBarRatingDto } from './create-user-bar-rating.dto';

export class UpdateUserBarRatingDto extends PartialType(CreateUserBarRatingDto) {}
