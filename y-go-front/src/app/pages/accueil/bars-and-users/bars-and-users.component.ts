import { Component, OnDestroy, Input, OnChanges, SimpleChanges } from "@angular/core"
import { BarModel } from "../../../models/bar.model"
import { UserModel } from "../../../models/user.model"
import { environment } from "../../../../../env"
import { Router } from "@angular/router"

@Component({
  selector: `app-bars-and-users`,
  templateUrl: `./bars-and-users.component.html`,
  styleUrls: [`./bars-and-users.component.scss`],
})
export class BarsAndUsersComponent implements OnChanges, OnDestroy {
  @Input() barList: BarModel[] | undefined
  @Input() userList: UserModel[] | undefined
  slidesBar: { imageUrl: string | undefined; name: string | undefined; adresse: string | undefined }[] = []
  slidesUser: { picture: string | undefined; name: string | undefined }[] = []
  slideBarInterval: any
  public apiUrl = environment.apiUrl

  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes[`barList`] && this.barList) {
      this.slidesBar = this.barList.map((bar: BarModel) => ({
        imageUrl: `${this.apiUrl}/${bar.pictureList?.pictureOne}`,
        name: bar.name,
        adresse: bar.adresse,
      }))
    }
    if (changes[`userList`] && this.userList) {
      this.slidesUser = this.userList.map((user: UserModel) => ({
        picture: `${this.apiUrl}/${user.picture}`,
        name: user.name,
      }))
    }
  }
  goDetailBar() {
    // this.router.navigate([`/bars/detail/${this.slidesBar?.id}`])
  }

  ngOnDestroy() {
    if (this.slideBarInterval) {
      clearInterval(this.slideBarInterval)
    }
  }
}
