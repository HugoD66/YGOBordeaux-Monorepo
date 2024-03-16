import {
  Component,
  effect,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { BarModel } from '../../../models/bar.model';
import { StarRatingPipe } from '../../../pipe/star-rating.pipe';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../env';
import { MatListModule } from '@angular/material/list';
import { PostModel } from '../../../models/post.model';
import { PostService } from '../../../services/post.service';

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
  public defaultPicutre = `assets/temp/soiree-romantique-verre-vin-roses-table-dans-rue-du-cafe-au-coucher-du-soleil_162585-6880.jpg`;
  constructor(private router: Router) {}

  goDetailBar() {
    this.router.navigate([`/bars/detail/${this.bar?.id}`]);
  }

  getBarImageUrl(): string {
    if (this.bar?.pictureList?.pictureOne) {
      if (this.bar.pictureList.pictureOne.startsWith(`data:image`)) {
        return this.bar.pictureList.pictureOne;
      } else {
        return `${this.apiUrl}/${this.bar.pictureList.pictureOne}`;
      }
    }
    return this.defaultPicutre;
  }
}
