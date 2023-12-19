import { Component } from '@angular/core';
import {environment} from "../../../../../env";
import {NgForm} from "@angular/forms";
import {BarService} from "../../../services/bar.service";
import {PictureListService} from "../../../services/picture-list.service";
import {PictureListModel} from "../../../models/picture-list.model";
import {BarModel} from "../../../models/bar.model";

@Component({
  selector: 'app-add-bars',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.scss']
})
export class AddBarComponent {
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
}
