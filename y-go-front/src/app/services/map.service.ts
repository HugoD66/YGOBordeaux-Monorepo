import {
  AfterViewInit,
  Injectable, OnDestroy, OnInit,
} from '@angular/core';
import {config, Map, Marker} from '@maptiler/sdk';
import { environment } from '../../../env';
import {BarModel} from "../models/bar.model";

@Injectable({
  providedIn: 'root'
})
export class MapService implements OnInit, OnDestroy {
  private map: Map | undefined;

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
      center:  [initialState.lng, initialState.lat],
      zoom:  initialState.zoom
    });
  }

  addMarker(lng: number, lat: number, color: string, bar?: BarModel, onSelected?: (bar: BarModel) => void): void {
    const marker = new Marker({ color: color })
      .setLngLat([lng, lat])
      .addTo(this.map!);

    if (onSelected && bar) {
      marker.getElement().addEventListener('click', () => onSelected(bar));
    }
  }

  addBarsToMap(bars: BarModel[], onSelected: (bar: BarModel) => void): void {
    bars.forEach(bar => {
      if (bar.geo && bar.geo.x && bar.geo.y) {
        this.addMarker(parseFloat(bar.geo.x), parseFloat(bar.geo.y), "#fff200", bar, onSelected);
      }
    });
  }

  ngOnDestroy() {
    this.map?.remove();
  }
//Ajout d'un marqueur

  /*
  new Marker({ color: "#0080ff" })
    .setLngLat([-0.55, 44.9])
    .addTo(this.map);
  new Marker({ color: "#FF0000" })
    .setLngLat([initialState.lng, initialState.lat])
    .addTo(this.map);
   */

  //Ajout d'un point au clic

  //this.map.on('click', (event) => {
  //  const coordinates = event.lngLat;
  //  this.addMarker(coordinates.lng, coordinates.lat, "#00FF00");
  //  console.log('Marqueur : ' + coordinates.lng + ', ' + coordinates.lat)
  //});


}


/*
import { Injectable } from '@angular/core';
import {Map, MapStyle, Marker} from '@maptiler/sdk';
import { BarModel } from '../models/bar.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: Map | undefined;
  private mapStyle = MapStyle.STREETS;
  private mapInitialState = { lng: -0.57918, lat: 44.83779, zoom: 12 };
  constructor() {}

  initializeMap(mapContainer: HTMLElement): void {
    const initialState = this.mapInitialState;
    this.map = new Map({
      container: mapContainer,
      style: this.mapStyle,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }

  addMarker(lng: number, lat: number, color: string, bar: BarModel, callback?: (bar: BarModel) => void): void {
    const marker = new Marker({ color: color })
      .setLngLat([lng, lat])
      .addTo(this.map!);

    if (callback) {
      marker.getElement().addEventListener('click', () => callback(bar));
    }
  }

  clearMarkers(): void {
    // Implémenter la logique pour supprimer tous les marqueurs de la carte
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}

 */
