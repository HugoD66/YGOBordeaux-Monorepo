import { Pipe, PipeTransform } from '@angular/core';


interface Star {
  color: string;
}


@Pipe({
  standalone: true,
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(value: number | undefined, maxStars: number = 5): Star[] {
    let rating = value || 0;
    let stars: Star[] = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push({
        color: i < rating ? 'yellow' : 'white'
      });
    }
    return stars;
  }

}
