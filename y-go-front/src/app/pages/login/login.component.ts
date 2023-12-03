import { Component } from "@angular/core"
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
@Component({
  selector: `app-login`,
  templateUrl: `./login.component.html`,
  styleUrls: [`./login.component.scss`],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
})
export class LoginComponent {
  constructor(private router: Router) { }

  hide = true;


  goHome() {
    this.router.navigate(['/']);
  }
  goRegister() {
    this.router.navigate(['/register']);
  }
}
