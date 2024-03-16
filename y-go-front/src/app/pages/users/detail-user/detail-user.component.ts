import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';
import { environment } from '../../../../../env';
import { RateService } from '../../../services/rate.service';
import { RateModel } from '../../../models/rate.model';
import { of, Subject, switchMap } from 'rxjs';
import { BarService } from '../../../services/bar.service';
import { BarModel } from '../../../models/bar.model';
import { PostModel } from '../../../models/post.model';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: `app-detail-user`,
  templateUrl: `./detail-user.component.html`,
  styleUrls: [`./detail-user.component.scss`],
})
export class DetailUserComponent implements OnInit {
  public user!: UserModel;
  public rate: RateModel[] | null | undefined;
  public bar: BarModel[] | undefined;
  public comment: PostModel[] | undefined;
  public comments: WritableSignal<PostModel[]> = signal([]);

  currentTime = new Date().getTime();

  public apiUrl = environment.apiUrl;
  public pictureBackDetailUser: string = `../../../assets/pictures/header-back-detail-user.webp`;

  constructor(
    private userService: UserService,
    private rateService: RateService,
    private barService: BarService,
    private postService: PostService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userService
      .getUser()
      .pipe(
        switchMap((user: UserModel) => {
          this.user = user;
          return this.rateService.getRateList();
        }),
        switchMap((rateList: RateModel[]) => {
          console.log(rateList);
          this.rate = rateList.filter(
            (rate) => rate?.user?.id === this.user.id,
          );
          console.log(this.rate);
          return this.barService.getBarsList();
        }),
        // @ts-ignore
        switchMap((barList: BarModel[]) => {
          if (!barList) return of([]);
          this.bar = barList.filter(
            (bar) => bar?.createdBy?.id === this.user.id,
          );
          return this.postService.getPostByUser(this.user!.id!);
        }),
        switchMap((posts: PostModel[] | null) => {
          if (!posts) return of([]);
          this.comment = posts;
          console.log(posts);
          return of([]);
        }),
      )
      .subscribe({
        error: (err) => console.error(err),
      });
  }

  goDetailBar(comment: PostModel): void {
    console.log(comment);
    this.router.navigate([`/bars/detail-bar/${comment.barId}`]);
  }
  onFileSelect(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let file: File | null = element.files ? element.files[0] : null;
    if (file && this.user.id) {
      this.userService
        .uploadUserPicture(this.user.id, file)
        .subscribe((response) => {
          this.user.picture = response.filePath;
          this.currentTime = new Date().getTime();
        });
    }
  }

  completeProfil(): void {
    console.log(`complete profil`);
    // this.router.navigate([`/users/update-profile`]);
  }
  updateProfil() {
    console.log(`update profil`);
    // this.router.navigate([`/users/update-profile`]);
  }
  goAddBar() {
    this.router.navigate([`/bars/add-bar`]);
  }

  goBarList() {
    this.router.navigate([`/bars`]);
  }
}
