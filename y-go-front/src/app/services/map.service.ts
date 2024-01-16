import { EventEmitter, Injectable, OnDestroy, OnInit } from '@angular/core';
import { config, Map, Marker } from '@maptiler/sdk';
import { environment } from '../../../env';
import { BarModel } from '../models/bar.model';
import { GeocodingService } from './geocoding.service';
import { AddBarComponent } from '../pages/bars/add-bar/add-bar.component';

@Injectable({
  providedIn: `root`,
})
export class MapService implements OnInit, OnDestroy {
  private map: Map | undefined;
  private currentMarker: Marker | null = null;
  public addressSelected: EventEmitter<string> = new EventEmitter();

  constructor(private geocodingService: GeocodingService) {}
  getMap(): Map | undefined {
    return this.map;
  }

  ngOnInit(): void {
    config.apiKey = environment.mapTilerApiKey;
  }

  initializeMap(mapContainer: HTMLElement) {
    const initialState = environment.mapInitialState;
    this.map = new Map({
      container: mapContainer,
      style: environment.mapStyle,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
  }

  getMarkerCoordinates(): { x: number; y: number } | null {
    if (this.currentMarker) {
      return {
        x: this.currentMarker.getLngLat().lng,
        y: this.currentMarker.getLngLat().lat,
      };
    }
    return null;
  }

  addMarker(
    lng: number,
    lat: number,
    color: string,
    bar?: BarModel,
    onSelected?: (bar: BarModel) => void,
  ): void {
    const marker = new Marker({ color: color })
      .setLngLat([lng, lat])
      .addTo(this.map!);

    if (onSelected && bar) {
      marker.getElement().addEventListener(`click`, () => onSelected(bar));
    }
  }

  addBarsToMap(bars: BarModel[], onSelected: (bar: BarModel) => void): void {
    bars.forEach((bar) => {
      if (bar.geo && bar.geo.x && bar.geo.y) {
        this.addMarker(
          parseFloat(bar.geo.x),
          parseFloat(bar.geo.y),
          `#fff200`,
          bar,
          onSelected,
        );
      }
    });
  }

  addMarkerOnClic(): void {
    if (!this.map) return;

    this.map.on(`click`, (event) => {
      const coordinates = event.lngLat;
      if (this.currentMarker) {
        this.currentMarker.remove();
      }
      this.currentMarker = new Marker({ color: `#00FF00` })
        .setLngLat([coordinates.lng, coordinates.lat])
        .addTo(this.map!);
      console.log(
        `Marqueur ajouté à :`,
        this.currentMarker._lngLat.lat,
        this.currentMarker._lngLat.lng,
      );

      this.geocodingService
        .getReverseGeocoding(coordinates.lat, coordinates.lng)
        .subscribe(
          (data) => {
            this.addressSelected.emit(data);
            console.log(`Adresse du marqueur:`, data);
          },
          (error) => {
            console.error(`Erreur de géocodage:`, error);
          },
        );
    });
  }

  setMarkerByCoordinates(x: number, y: number): void {
    if (this.map) {
      if (this.currentMarker) {
        this.currentMarker.remove();
      }
      this.currentMarker = new Marker({ color: `#FF0000` })
        .setLngLat([x, y])
        .addTo(this.map);
    }
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
