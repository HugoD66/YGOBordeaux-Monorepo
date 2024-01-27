import {
  Component,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BarModel } from '../../../models/bar.model';
import { UserModel } from '../../../models/user.model';
import { environment } from '../../../../../env';
import { Router } from '@angular/router';

@Component({
  selector: `app-bars-and-users`,
  templateUrl: `./bars-and-users.component.html`,
  styleUrls: [`./bars-and-users.component.scss`],
})
export class BarsAndUsersComponent implements OnChanges, OnDestroy {
  @Input() barList: BarModel[] | undefined;
  @Input() userList: UserModel[] | undefined;
  slidesBar: {
    id: string | undefined;
    imageUrl: string | undefined;
    name: string | undefined;
    adresse: string | undefined;
  }[] = [];
  slidesUser: {
    id: string | undefined;
    picture: string | undefined;
    name: string | undefined;
  }[] = [];
  slideBarInterval: any;
  public apiUrl = environment.apiUrl;
  displayedAdresse: string | undefined;

  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes[`barList`] && this.barList) {
      this.slidesBar = this.barList.map((bar: BarModel) => ({
        id: bar.id,
        imageUrl: `${this.apiUrl}/${bar.pictureList?.pictureOne}`,
        name: bar.name,
        adresse: bar.adresse,
      }));
    }
    if (changes[`userList`] && this.userList) {
      this.slidesUser = this.userList.map((user: UserModel) => ({
        id: user.id,
        picture: `${this.apiUrl}/${user.picture}`,
        name: user.name,
      }));
    }
  }
  goDetailBar(barId: string | undefined) {
    this.router.navigate([`/bars/detail/${barId}`]);
  }

  ngOnDestroy() {
    if (this.slideBarInterval) {
      clearInterval(this.slideBarInterval);
    }
  }

  explainSlide(information: string | undefined) {
    this.displayedAdresse = information;
  }

  exitSlide() {
    this.displayedAdresse = undefined;
  }
}
