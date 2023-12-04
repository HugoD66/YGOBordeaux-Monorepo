import { Component } from "@angular/core"
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: `app-accueil-nav`,
  templateUrl: `./accueil-nav.component.html`,
  styleUrls: [`./accueil-nav.component.scss`],
  standalone: true,
  imports: [MatListModule, MatDividerModule],
})
export class AccueilNavComponent {}
