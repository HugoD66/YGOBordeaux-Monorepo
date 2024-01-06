import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { Map, MapStyle, config, Marker } from '@maptiler/sdk';
import {BarModel} from "../../../../models/bar.model";
import {environment} from "../../../../../../env";
import {MapService} from "../../../../services/map.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() bars: BarModel[] | undefined;
  @Output() barSelected = new EventEmitter<BarModel>();
  map: Map | undefined;

  constructor(
    private mapService: MapService
  ) {
  }
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = environment.mapTilerApiKey;
  }

  ngAfterViewInit() {
    this.mapService.initializeMap(this.mapContainer.nativeElement);
    this.map = this.mapService.getMap();

    if (this.bars) {
      this.mapService.addBarsToMap(this.bars, (bar) => this.barSelected.emit(bar));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bars'] && this.map) {
      this.mapService.addBarsToMap(this.bars!, (bar) => this.barSelected.emit(bar));
    }
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
