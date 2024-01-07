import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { BarModel } from '../../../models/bar.model';
import { StarRatingPipe } from '../../../pipe/star-rating.pipe';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../env';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: `app-unit-bar`,
  templateUrl: `./unit-bar.component.html`,
  styleUrls: [`./unit-bar.component.scss`],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    StarRatingPipe,
    MatListModule,
  ],
})
export class UnitBarComponent {
  @Input() bar: BarModel | undefined;
  public apiUrl = environment.apiUrl;

  constructor(private router: Router) {}

  goDetailBar() {
    this.router.navigate([`/bars/detail/${this.bar?.id}`]);
  }
  // getBarImageUrl(): string {
  //  if (this.bar?.pictureList?.pictureOne) {
  //    if (this.bar.pictureList.pictureOne.startsWith('data:image')) {
  //      return this.bar.pictureList.pictureOne;
  //    } else {
  //      return 'http://localhost:3000/' + this.bar.pictureList.pictureOne;
  //    }
  //  }
  //  return 'assets/path-to-default-image.jpg'; // Chemin de votre image par défaut
  // }
}
