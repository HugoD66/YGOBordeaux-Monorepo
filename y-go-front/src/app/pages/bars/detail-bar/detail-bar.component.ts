import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarService } from '../../../services/bar.service';
import { BarModel, ParticularityEnum } from '../../../models/bar.model';
import { config, Map } from '@maptiler/sdk';
import { environment } from '../../../../../env';
import { MapService } from '../../../services/map.service';
import { StarRatingPipe } from '../../../pipe/star-rating.pipe';
import { LogoYGoComponent } from '../../../components/logo-ygo/logo-ygo.component';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ButtonPanelHorizComponent } from '../../../components/button-panel/button-panel-horiz/button-panel-horiz.component';

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
    StarRatingPipe,
    LogoYGoComponent,
    AsyncPipe,
    DatePipe,
    ButtonPanelHorizComponent
],
  standalone: true,
})
export class DetailBarComponent implements AfterViewInit, OnInit {
  bar: Observable<BarModel | undefined>;
  map: Map | undefined;
  selectedPicture: string | undefined;
  currentBar: BarModel | undefined;
  mainPicture: string | undefined;
  public apiUrl = environment.apiUrl;

  public rateCount: WritableSignal<number | null | string> = signal(0);

  @ViewChild(`map`)
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private route: ActivatedRoute,
    private barService: BarService,
    private mapService: MapService,
  ) {
    this.bar = this.barService.getBarById(
      this.route.snapshot.paramMap.get(`id`),
    );
    this.bar.subscribe((barData) => {
      this.currentBar = barData;

      console.log(this.currentBar?.particularities);
      if (barData?.pictureList?.pictureOne) {
        this.selectedPicture =
          `${this.apiUrl}/` + barData.pictureList.pictureOne;
      }
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
          '',
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
            this.rateCount.set('Pas de participants.');
          }
          console.log(`count :`, count);
        });
      }
    });
  }
}
