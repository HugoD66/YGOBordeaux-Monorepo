import { Component } from "@angular/core"
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: `app-unit-bar`,
  templateUrl: `./unit-bar.component.html`,
  styleUrls: [`./unit-bar.component.scss`],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class UnitBarComponent {}
