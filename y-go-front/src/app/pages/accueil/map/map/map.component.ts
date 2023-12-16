import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from "@angular/core"
import { Map, MapStyle, config } from '@maptiler/sdk';

@Component({
  selector: `app-map`,
  templateUrl: `./map.component.html`,
  styleUrls: [`./map.component.scss`],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;


  constructor() {}

  ngOnInit() {
    config.apiKey = '1bYmKrc8pg0FSu8GXalV\t';

  }

  ngAfterViewInit() {
    const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }

  ngOnDestroy() {
    this.map?.remove();

  }
}
