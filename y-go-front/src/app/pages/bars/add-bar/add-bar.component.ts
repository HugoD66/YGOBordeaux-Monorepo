import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../../../env";
import {NgForm} from "@angular/forms";
import {BarService} from "../../../services/bar.service";
import {PictureListService} from "../../../services/picture-list.service";
import {PictureListModel} from "../../../models/picture-list.model";
import {BarModel} from "../../../models/bar.model";
import {config, Map, MapStyle, Marker} from "@maptiler/sdk";
import {GeocodingService} from "../../../services/geocoding.service";
import {MapService} from "../../../services/map.service";

@Component({
  selector: 'app-add-bars',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.scss']
})
export class AddBarComponent implements OnInit, AfterViewInit{
  errorMessage: any
  name: string;
  adresse: string;
  description: string;
  telephone: string;
  pictureOne: string | null = null;
  pictureTwo: string | null = null;
  pictureThree: string | null = null;
  pictureFour: string | null = null;

  currentMarker: Marker | null = null;

  constructor(
    private barService: BarService,
    private pictureListService: PictureListService,
    private geocodingService: GeocodingService,
    private mapService: MapService
    ) {
    this.name = '';
    this.adresse = '';
    this.description = '';
    this.telephone = '';
    this.pictureOne = '';
    this.pictureTwo = '';
    this.pictureThree = '';
    this.pictureFour = '';
  }
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = '1bYmKrc8pg0FSu8GXalV';
    this.mapService.addressSelected.subscribe(address => {
      this.adresse = address;
    });
  }

  ngAfterViewInit() {
    this.mapService.initializeMap(this.mapContainer.nativeElement);
    this.map = this.mapService.getMap();
    this.mapService.addMarkerOnClic();
  }

  onFileChange(event: any, pictureId?: string) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        switch(pictureId) {
          case 'pictureOne':
            this.pictureOne = reader.result as string;
            break;
          case 'pictureTwo':
            this.pictureTwo = reader.result as string;
            break;
          case 'pictureThree':
            this.pictureThree = reader.result as string;
            break;
          case 'pictureFour':
            this.pictureFour = reader.result as string;
            break;
        }
      };
    }
  }

  onSubmit(form: NgForm) {
    const barData = {
      name: this.name,
      adresse: this.adresse,
      description: this.description,
      telephone: this.telephone,
    };
    this.barService.addBar(barData).subscribe({
      next: (barResponse: BarModel) => {
        console.log('Bar enregistré avec succès:', barResponse);
        const pictureListData = {
          pictureOne: this.pictureOne,
          pictureTwo: this.pictureTwo,
          pictureThree: this.pictureThree,
          pictureFour: this.pictureFour,
        };
        this.pictureListService.addPictureList(pictureListData).subscribe({
          next: (pictureListResponse: PictureListModel | null) => {
            console.log('PictureList enregistrée avec succès:', pictureListResponse);
          },
          error: (error) => console.error("Erreur lors de l'enregistrement de PictureList:", error)
        });
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement du bar:', error);
        this.errorMessage = error.error.message || 'Une erreur s\'est produite lors de l\'enregistrement du bar.';
      }
    });
  }

  onAddressChange(): void {
    this.geocodingService.getCoordinates(this.adresse).subscribe(data => {
      console.log(data);
      if (this.adresse.length > 5) {
        this.mapService.setMarkerByCoordinates(data.x, data.y);
      }
    })
      /*
       if (this.adresse.length > 5) { // Pour éviter les requêtes trop fréquentes
        this.geocodingService.getCoordinates(this.adresse).subscribe(data => {
          console.log(this.adresse);

          if (data && data.features && data.features.length > 0) {
            const coordinates = data.features[0].geometry.coordinates;
            this.updateMapMarker(coordinates[0], coordinates[1]);
          }
        }, error => {
          console.error('Erreur de géocodage:', error);
        });
      }
       */
  }

  //updateMapMarker(lng: number, lat: number): void {
  //  // Supprimer l'ancien marqueur
  //  if (this.currentMarker) {
  //    this.currentMarker.remove();
  //  }

  //  // Ajouter un nouveau marqueur
  //  this.currentMarker = new Marker({ color: "#00FF00" })
  //    .setLngLat([lng, lat])
  //    .addTo(this.map!);
  //}


}
