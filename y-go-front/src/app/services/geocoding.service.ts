import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable()
export class GeocodingService {
  private apiKey = '1bYmKrc8pg0FSu8GXalV';
  private geocodingUrl = 'https://api.maptiler.com/geocoding/';
  //https://api.maptiler.com/geolocation/ip.json?key=1bYmKrc8pg0FSu8GXalV ?????
  constructor(private http: HttpClient) {}

  getCoordinates(address: string): Observable<any> {
    const url = `${this.geocodingUrl}${encodeURIComponent(address)}.json?key=${this.apiKey}`;
    return this.http.get(url);
  }
}
