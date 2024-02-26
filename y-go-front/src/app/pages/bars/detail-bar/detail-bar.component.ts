import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BarService } from '../../../services/bar.service';
import { BarModel } from '../../../models/bar.model';
import { config, Map } from '@maptiler/sdk';
import { environment } from '../../../../../env';
import { MapService } from '../../../services/map.service';
import { StarRatingPipe } from '../../../pipe/star-rating.pipe';
import { LogoYGoComponent } from '../../../components/logo-ygo/logo-ygo.component';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { ButtonPanelHorizComponent } from '../../../components/button-panel/button-panel-horiz/button-panel-horiz.component';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';
import { RateService } from '../../../services/rate.service';
import { RateModel } from '../../../models/rate.model';
import { MatDividerModule } from '@angular/material/divider';
import { ParticularityTranslatePipe } from '../../../pipe/particularity-translate.pipe';
import { PostService } from '../../../services/post.service';
import { PostModel } from '../../../models/post.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SnackbarService } from '../../../components/snackbar/snackbar.component';

type PictureListKey =
  | 'pictureOne'
  | 'pictureTwo'
  | 'pictureThree'
  | 'pictureFour';

@Component({
  selector: `app-detail-bars`,
  templateUrl: `./detail-bar.component.html`,
  styleUrls: [`./detail-bar.component.scss`],
  imports: [
    CommonModule,
    StarRatingPipe,
    LogoYGoComponent,
    AsyncPipe,
    DatePipe,
    ButtonPanelHorizComponent,
    RouterLink,
    MatDividerModule,
    // BarModule,
    ParticularityTranslatePipe,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class DetailBarComponent implements AfterViewInit, OnInit {
  postForm: FormGroup;

  bar: Observable<BarModel | undefined>;
  map: Map | undefined;
  user: UserModel | undefined;
  hasUserRatedBar: WritableSignal<boolean> = signal(false);
  isUserLogged: WritableSignal<boolean> = signal(false);
  userRate: WritableSignal<number | undefined> = signal(undefined);
  selectedPicture: string | undefined;
  currentBar: BarModel | undefined;
  mainPicture: string | undefined;
  public apiUrl = environment.apiUrl;

  public rateCount: WritableSignal<number | null | string> = signal(0);
  public comments: WritableSignal<PostModel[]> = signal([]);

  @ViewChild(`map`)
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private barService: BarService,
    private mapService: MapService,
    private userService: UserService,
    private rateService: RateService,
    private postService: PostService,
    private snackbarService: SnackbarService,
    private router: Router,
  ) {
    this.bar = this.barService.getBarById(
      this.route.snapshot.paramMap.get(`id`),
    );
    this.bar.subscribe((barData) => {
      this.currentBar = barData;

      if (barData?.pictureList?.pictureOne) {
        this.selectedPicture =
          `${this.apiUrl}/` + barData.pictureList.pictureOne;
      }
      this.getComments(barData);
    });

    this.postForm = this.fb.group({
      message: [
        ``,
        [
          Validators.required,
          Validators.maxLength(150),
          Validators.minLength(15),
        ],
      ],
    });
  }

  onSelectPicture(
    pictureUrl: string | undefined,
    pictureKey: PictureListKey,
  ): void {
    if (pictureUrl) {
      const newSelectedPicture = `${this.apiUrl}/` + pictureUrl;
      if (this.selectedPicture !== newSelectedPicture) {
        const temp = this.selectedPicture;
        this.selectedPicture = newSelectedPicture;
        // @ts-ignore
        this.currentBar.pictureList[pictureKey] = temp?.replace(
          `${this.apiUrl}/`,
          ``,
        );
      }
    }
  }

  ngOnInit(): void {
    config.apiKey = environment.mapTilerApiKey;
    this.bar.subscribe((barData) => {
      this.currentBar = barData;
      if (barData?.pictureList?.pictureOne) {
        this.mainPicture = `${this.apiUrl}/` + barData.pictureList.pictureOne;
        this.selectedPicture = this.mainPicture;
      }
    });
  }

  loggin(): void {
    this.router.navigate([`/login`]);
  }

  ngAfterViewInit(): void {
    this.mapService.initializeMap(this.mapContainer.nativeElement);
    this.bar.subscribe((barData) => {
      if (barData && barData.geo && barData.id) {
        this.mapService.addMarker(
          <number>(<unknown>barData.geo.x),
          <number>(<unknown>barData.geo.y),
          `#FF0000`,
        );
        this.barService.getTotalCountVoters(barData.id).subscribe((count) => {
          if (count) {
            this.rateCount.set(count);
          } else {
            this.rateCount.set(`Pas de participants.`);
          }
        });
        this.userService.getUser().subscribe((userData) => {
          this.user = userData;
          this.isUserLogged.set(!!userData);
          if (userData && this.currentBar?.id) {
            this.rateService
              .getRateByIdBar(this.currentBar.id)
              .subscribe((rateData) => {
                if (rateData) {
                  this.hasUserRatedBar.set(true);
                  const userSpecificRate = rateData.find(
                    (rate: RateModel) => rate.user?.id === userData.id,
                  );
                  if (userSpecificRate) {
                    this.userRate.set(userSpecificRate.rate);
                  } else {
                    this.userRate.set(undefined);
                  }
                } else {
                  this.hasUserRatedBar.set(false);
                }
              });
          }
        });
      }
    });
  }

  onPost() {
    let post: PostModel;
    if (this.postForm.valid) {
      post = {
        message: this.postForm.value.message,
        barId: this.currentBar?.id,
      };
      console.log('post');
      console.log(post);
      this.postService.addPost(post).subscribe({
        next: (postResponse: PostModel) => {
          console.log(`Post enregistré:`, postResponse);
          this.snackbarService.openSnackBar(
            `Le post a bien été enregistré`,
            `Fermer`,
          );
          this.getComments(this.currentBar);
          this.postForm.reset();
        },
        error: (error: any) => {
          console.error(`Erreur lors de l'enregistrement du post:`, error);
          this.postForm.setErrors({
            submit:
              error.error.message ||
              `Une erreur s'est produite lors de l'enregistrement du post.`,
          });
        },
      });
    }
  }

  private getComments(barData) {
    if (barData?.id) {
      this.postService.getPostByIdBar(barData.id).subscribe((comments) => {
        console.log(comments);
        // @ts-ignore
        if (!comments || comments.length === 0) {
          return this.comments.set([]);
        } else {
          const commentsArray = Array.isArray(comments)
            ? comments
            : [comments];
          return this.comments.set(commentsArray);
        }
      });
    }
  }
}
/*
  id: string | undefined
  message: string | undefined
  createdAt: Date | undefined
  user: UserModel | undefined
  bar: BarModel | undefined
 */
