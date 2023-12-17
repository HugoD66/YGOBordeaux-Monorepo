import { Component } from '@angular/core';
import {environment} from "../../../../../env";
import {NgForm} from "@angular/forms";
import {BarService} from "../../../services/bar.service";

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
  picture: string;


  private apiUrl = environment.apiUrl;

  constructor(private barService: BarService) {
    this.name = '';
    this.adresse = '';
    this.description = '';
    this.telephone = '';
    this.picture = '';
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.picture = file;
    }
  }

  onSubmit(form: NgForm) {
    const barData = {
      name: form.value.name,
      adresse: form.value.adresse,
      description: form.value.description,
      telephone: form.value.telephone,
      picture: this.picture
    };
    this.barService.addBar(barData).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);
      },
      (error) => {
        console.error('Erreur HTTP :', error);
        this.errorMessage = error.error.message;
      }
    );
  }
}
