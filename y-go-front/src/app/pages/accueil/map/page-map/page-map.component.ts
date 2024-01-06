import {Component, HostListener, Input, OnInit} from '@angular/core';
import {BarModel} from "../../../../models/bar.model";
import {BarService} from "../../../../services/bar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})
export class PageMapComponent {
  @Input() barList: BarModel[] | undefined;
  showBackgroundImage: boolean = false;
  selectedBar: BarModel | null = null;

  constructor(
    private router: Router
  ) {
  }

  onBarSelected(bar: BarModel) {
    this.selectedBar = bar;
  }

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
  goDetailBar() {
    this.router.navigate([`/bars/detail/${this.selectedBar?.id}`]);
  }
}
