import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Map, MapStyle, config, Marker } from '@maptiler/sdk';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
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

    new Marker({ color: "#0080ff" })
      .setLngLat([-0.55, 44.9])
      .addTo(this.map);
    new Marker({ color: "#FF0000" })
      .setLngLat([initialState.lng, initialState.lat])
      .addTo(this.map);

    this.map.on('click', (event) => {
      const coordinates = event.lngLat;
      this.addMarker(coordinates.lng, coordinates.lat, "#00FF00");
    });
  }

  addMarker(lng: number, lat: number, color: string = "#0080ff") {
    console.log(`Ajout d'un marqueur à la position : ${lng}, ${lat}`);
    new Marker({ color: color })
      .setLngLat([lng, lat])
      .addTo(this.map!);
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
