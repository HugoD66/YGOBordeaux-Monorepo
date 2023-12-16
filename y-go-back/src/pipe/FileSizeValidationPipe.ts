import {PipeTransform, Injectable, ArgumentMetadata, BadRequestException} from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const maxSize = 1000 * 1000; // Taille maximale en octets (1MB)
    if (value.size > maxSize) {
      throw new BadRequestException('File is too large');
    }
    return value;
  }
}
