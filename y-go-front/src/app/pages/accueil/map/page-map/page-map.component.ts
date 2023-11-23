import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})
export class PageMapComponent {
  showBackgroundImage: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.handleScroll();
  }
  handleScroll() {
    const linerElement = document.querySelector(".liner");
    if (linerElement) {
      const rect = linerElement.getBoundingClientRect();
      const linerTop = rect.top;
      this.showBackgroundImage = linerTop <= 0;

    }
  }
}
