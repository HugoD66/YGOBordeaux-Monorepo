import {Component, Input} from "@angular/core"
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {Router} from "@angular/router";
import {BarModel} from "../../../models/bar.model";
import {StarRatingPipe} from "../../../pipe/star-rating.pipe";
import {CommonModule} from "@angular/common";
@Component({
  selector: `app-unit-bar`,
  templateUrl: `./unit-bar.component.html`,
  styleUrls: [`./unit-bar.component.scss`],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, StarRatingPipe],
})
export class UnitBarComponent {
  @Input() bar: BarModel | undefined;

  constructor(private router: Router) { }

  goDetailBar() {
    this.router.navigate([`/bars/detail/${this.bar?.id}`]);
  }
}
