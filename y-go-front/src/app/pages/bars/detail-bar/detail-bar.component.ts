import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BarService} from "../../../services/bar.service";
import {BarModel} from "../../../models/bar.model";
import {Observable} from "rxjs";
import {config, Map, MapStyle, Marker} from "@maptiler/sdk";

@Component({
  selector: 'app-detail-bars',
  templateUrl: './detail-bar.component.html',
  styleUrls: ['./detail-bar.component.scss']
})
export class DetailBarComponent implements OnInit, AfterViewInit, OnDestroy {
  bar: Observable<BarModel | undefined>;
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private route: ActivatedRoute,
    private barService: BarService,
  ) {
    this.bar = this.barService.getBarById(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    config.apiKey = '1bYmKrc8pg0FSu8GXalV';
  }

  ngAfterViewInit() {
    const initialState = { lng: -0.57918, lat: 44.83779, zoom: 12 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    new Marker({ color: "#0080ff" })
      .setLngLat([-0.55, 44.9])
      .addTo(this.map);
  }

  ngOnDestroy() {
    this.map?.remove();
  }

}
