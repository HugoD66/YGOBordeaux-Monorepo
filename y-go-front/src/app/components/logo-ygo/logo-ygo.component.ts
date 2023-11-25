import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logo-ygo',
  templateUrl: './logo-ygo.component.html',
  standalone: true,
  styleUrls: ['./logo-ygo.component.scss']
})
export class LogoYGoComponent {
  constructor(private router: Router) { }
  goHome() {
    this.router.navigate(['/']);
  }
}
