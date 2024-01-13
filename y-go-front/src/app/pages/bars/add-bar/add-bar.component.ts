import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarService } from '../../../services/bar.service';
import { PictureListService } from '../../../services/picture-list.service';
import { BarModel } from '../../../models/bar.model';
import { config, Map } from '@maptiler/sdk';
import { GeocodingService } from '../../../services/geocoding.service';
import { MapService } from '../../../services/map.service';
import { PictureListModel } from '../../../models/picture-list.model';
import { SnackbarService } from '../../../components/snackbar/snackbar.component';

@Component({
  selector: `app-add-bars`,
  templateUrl: `./add-bar.component.html`,
  styleUrls: [`./add-bar.component.scss`],
})
export class AddBarComponent implements OnInit, AfterViewInit {
  barForm: FormGroup;
  map: Map | undefined;

  @ViewChild(`map`)
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private fb: FormBuilder,
    private barService: BarService,
    private pictureListService: PictureListService,
    private geocodingService: GeocodingService,
    private mapService: MapService,
    private snackbarService: SnackbarService,
  ) {
    this.barForm = this.fb.group({
      name: [
        ``,
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(3),
        ],
      ],
      adresse: [``, Validators.required],
      description: [
        ``,
        [
          Validators.required,
          Validators.maxLength(150),
          Validators.minLength(15),
        ],
      ],
      telephone: [``, [Validators.pattern(`^((\\+91-?)|0)?[0-9]{10}$`)]],
      pictureOne: [null, Validators.required],
      pictureTwo: [null],
      pictureThree: [null],
      pictureFour: [null],
    });
  }

  ngOnInit(): void {
    config.apiKey = `1bYmKrc8pg0FSu8GXalV`;
    this.mapService.addressSelected.subscribe((address) => {
      this.barForm.patchValue({ adresse: address });
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
        this.barForm.patchValue({
          [pictureId as string]: reader.result as string,
        });
      };
    }
  }

  onSubmit() {
    if (this.barForm.valid) {
      const barData = this.barForm.value;
      this.barService.addBar(barData).subscribe({
        next: (barResponse: BarModel) => {
          const pictureListData = {
            pictureOne: this.barForm.value.pictureOne,
            pictureTwo: this.barForm.value.pictureTwo,
            pictureThree: this.barForm.value.pictureThree,
            pictureFour: this.barForm.value.pictureFour,
          };

          this.pictureListService.addPictureList(pictureListData).subscribe({
            next: (pictureListResponse: PictureListModel | null) => {
              console.log(
                `PictureList enregistrée avec succès:`,
                pictureListResponse,
              );
            },
            error: (error) =>
              console.error(
                `Erreur lors de l'enregistrement de PictureList:`,
                error,
              ),
          });

          this.geocodingService
            .getCoordinates(this.barForm.value.adresse)
            .subscribe(
              (data) => {
                console.log(data);
                this.geocodingService.addGeo(data).subscribe(
                  (geoResponse) => {
                    console.log(`Geo enregistré avec succès:`, geoResponse);
                  },
                  (error) => {
                    console.error(
                      `Erreur lors de l'enregistrement du Geo:`,
                      error,
                    );
                  },
                );
              },
              (error) => {
                console.error(
                  `Erreur lors de la récupération des coordonnées:`,
                  error,
                );
              },
            );
          this.snackbarService.openSnackBar(
            `Bar enregistré avec succès !`,
            `Fermer`,
          );

          console.log(`Bar enregistré avec succès:`, barResponse);
        },
        error: (error) => {
          console.error(`Erreur lors de l'enregistrement du bar:`, error);
          this.barForm.setErrors({
            submit:
              error.error.message ||
              `Une erreur s'est produite lors de l'enregistrement du bar.`,
          });
        },
      });
    }
  }

  onAddressChange(): void {
    if (this.barForm.value.adresse.length > 5) {
      this.geocodingService
        .getCoordinates(this.barForm.value.adresse)
        .subscribe((data) => {
          console.log(data);
          this.mapService.setMarkerByCoordinates(data.x, data.y);
        });
    }
  }
}
