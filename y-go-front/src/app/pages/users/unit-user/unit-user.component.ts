import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BarModel} from "../../../models/bar.model";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-unit-user',
  templateUrl: './unit-user.component.html',
  styleUrls: ['./unit-user.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class UnitUserComponent {
  @Input() user: UserModel | undefined;

}
