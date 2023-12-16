import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from "@angular/core"
import {Map, MapStyle, config, Marker} from '@maptiler/sdk';
//import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
  selector: `app-map`,
  templateUrl: `./map.component.html`,
  styleUrls: [`./map.component.scss`],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

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
    new Marker({color: "#FF0000"})
      .setLngLat([initialState.lng, initialState.lat])
      .addTo(this.map);
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
