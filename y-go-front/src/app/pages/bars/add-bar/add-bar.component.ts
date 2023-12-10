import { Component } from '@angular/core';
import {environment} from "../../../../../env";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
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
  private apiUrl = environment.apiUrl;

  constructor(private barService: BarService) {
    this.name = '';
    this.adresse = '';
  }

  onSubmit(form: NgForm) {
    const barData = {
      name: form.value.name,
      adresse: form.value.adresse,
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
