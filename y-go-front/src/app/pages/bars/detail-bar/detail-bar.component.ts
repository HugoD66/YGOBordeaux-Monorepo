import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BarService} from "../../../services/bar.service";
import {BarModel} from "../../../models/bar.model";
import {Observable} from "rxjs";
import {config, Map, MapStyle, Marker} from "@maptiler/sdk";
import {environment} from "../../../../../env";
import {MapService} from "../../../services/map.service";

@Component({
  selector: 'app-detail-bars',
  templateUrl: './detail-bar.component.html',
  styleUrls: ['./detail-bar.component.scss']
})
export class DetailBarComponent  implements AfterViewInit, OnInit  {
  bar: Observable<BarModel | undefined>;
  map: Map | undefined;


  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private route: ActivatedRoute,
    private barService: BarService,
    private mapService: MapService
  ) {
    this.bar = this.barService.getBarById(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    config.apiKey = environment.mapTilerApiKey;
  }
  ngAfterViewInit(): void {
    this.mapService.initializeMap(this.mapContainer.nativeElement);

    this.bar.subscribe(barData => {
      if (barData && barData.geo) {
        this.mapService.addMarker(parseFloat(<string>barData.geo.x), parseFloat(<string>barData.geo.y), '#FF0000');
      }
    });
  }
}
/*
import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarService } from '../../../services/bar.service';
import { BarModel } from '../../../models/bar.model';
import { MapService } from '../../../services/map.service';

@Component({
  selector: 'app-detail-bars',
  templateUrl: './detail-bar.component.html',
  styleUrls: ['./detail-bar.component.scss']
})
export class DetailBarComponent implements AfterViewInit, OnDestroy {
  bar: BarModel | undefined;

  @ViewChild('map') mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private route: ActivatedRoute,
    private barService: BarService,
    private mapService: MapService
  ) {
    this.barService.getBarById(this.route.snapshot.paramMap.get('id'))
      .subscribe(bar => {
        this.bar = bar;
        if (this.bar && this.bar.geo) {
          this.mapService.addMarker(parseFloat(this.bar.geo.x), parseFloat(this.bar.geo.y), '#FF0000');
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.bar && this.bar.geo) {
      this.mapService.initializeMap(
        this.mapContainer.nativeElement,
        parseFloat(this.bar.geo.x),
        parseFloat(this.bar.geo.y),
        12
      );
    }
  }

  ngOnDestroy(): void {
    this.mapService.ngOnDestroy();
  }
}

 */
