import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { Map, MapStyle, config, Marker } from '@maptiler/sdk';
import {BarModel} from "../../../../models/bar.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() bars: BarModel[] | undefined;
  @Output() barSelected = new EventEmitter<BarModel>();

  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = '1bYmKrc8pg0FSu8GXalV';
  }

  ngAfterViewInit() {
    console.log(this.bars)

    const initialState = { lng: -0.57918, lat: 44.83779, zoom: 12 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

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

  addMarker(lng: number, lat: number, color: string, bar: BarModel) {
    const marker = new Marker({ color: color })
      .setLngLat([lng, lat])
      .addTo(this.map!);

    marker.getElement().addEventListener('click', () => {
      console.log(`Bar sélectionné : ${bar.name}, Adresse : ${bar.adresse}`);
      this.barSelected.emit(bar);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bars'] && this.map) {
      this.addBarsToMap();
    }
  }

  private addBarsToMap() {
    if (this.bars) {
      this.bars.forEach(bar => {
        if (bar.geo && bar.geo.x && bar.geo.y) {
          const lng = parseFloat(bar.geo.x);
          const lat = parseFloat(bar.geo.y);
          this.addMarker(lng, lat, "#fff200", bar);
        }
      });
    }
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
