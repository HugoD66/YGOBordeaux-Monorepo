import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {environment} from "../../../../../env";
import {NgForm} from "@angular/forms";
import {BarService} from "../../../services/bar.service";
import {PictureListService} from "../../../services/picture-list.service";
import {PictureListModel} from "../../../models/picture-list.model";
import {BarModel} from "../../../models/bar.model";
import {config, Map, MapStyle, Marker} from "@maptiler/sdk";

@Component({
  selector: 'app-add-bars',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.scss']
})
export class AddBarComponent implements AfterViewInit{
  errorMessage: any
  name: string;
  adresse: string;
  description: string;
  telephone: string;
  //picture: string;
  pictureOne: string | null = null;
  pictureTwo: string | null = null;
  pictureThree: string | null = null;
  pictureFour: string | null = null;

  constructor(
    private barService: BarService,
    private pictureListService: PictureListService
    ) {
    this.name = '';
    this.adresse = '';
    this.description = '';
    this.telephone = '';
    //this.picture = '';
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
  }

  private apiUrl = environment.apiUrl;


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
    console.table(form.value)
    const barData = {
      name: form.value.name,
      adresse: form.value.adresse,
      description: form.value.description,
      telephone: form.value.telephone,
      //picture: form.value.picture,
    };
    this.barService.addBar(barData).subscribe({
      next: (barResponse: BarModel) => {
        console.log('Bar enregistré avec succès:', barResponse);
        const pictureListData = {
          barId: barResponse.id,
          pictureOne: this.pictureOne,
          pictureTwo: this.pictureTwo,
          pictureThree: this.pictureThree,
          pictureFour: this.pictureFour,
        };
        this.pictureListService.addPictureList(pictureListData).subscribe({
          next: (pictureListResponse: PictureListModel | null) => {
            console.log('Galerie d\'images enregistrée avec succès:', pictureListResponse);
          },
          error: (error) => {
            console.error("Erreur lors de l'envoi de la galerie d'images :", error);
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement du bar:', error);
        this.errorMessage = error.error.message;
      }
    });
  }

  ngAfterViewInit() {
    const initialState = { lng: -0.57918, lat: 44.83779, zoom: 12 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

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


}
