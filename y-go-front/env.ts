import {MapStyle} from "@maptiler/sdk";

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',

  //Map
  mapStyle: MapStyle.STREETS,
  mapTilerUrl: 'https://api.maptiler.com/maps/streets',
  mapTilerApiKey: '1bYmKrc8pg0FSu8GXalV',
  mapInitialState: { lng: -0.57918, lat: 44.83779, zoom: 12 },

  //Geocoding
  geocodingUrl : 'https://api.maptiler.com/geocoding/',
};
