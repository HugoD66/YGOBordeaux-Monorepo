import { Component, OnInit, OnDestroy } from '@angular/core';
import { BarModel } from '../../../models/bar.model';
import { BarService } from '../../../services/bar.service';

@Component({
  selector: 'app-bars-and-users',
  templateUrl: './bars-and-users.component.html',
  styleUrls: ['./bars-and-users.component.scss'],
})
export class BarsAndUsersComponent implements OnInit, OnDestroy {
  barList: BarModel[] | undefined;
  private carouselInterval: any;

  constructor(private barService: BarService) {}

  ngOnInit() {
    this.barService.getBarsList().subscribe((barList) => {
      this.barList = barList;
      this.startCarousel();
    });
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  startCarousel() {
    if (this.barList && this.barList.length > 0) {
      this.addInitialSlides();
      this.carouselInterval = setInterval(() => {
        this.addRandomSlide();
      }, 2000);
    }
  }
  addInitialSlides() {
    const carouselContainer = document.getElementById('carouselContainer');
    for (let i = 0; i < 10; i++) {  // Adjust the number based on the desired number of initial slides
      this.addRandomSlide(carouselContainer);
    }
  }
  addRandomSlide(carouselContainer?) {
    const randomIndex = Math.floor(Math.random() * this.barList!.length);
    const bar = this.barList![randomIndex];
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    const img = document.createElement('img');
    img.className = 'picture-carousel';
    img.src = '../../assets/temp/1.jpg';  // Use bar.picture or a placeholder
    img.alt = 'Bar Image';

    slide.appendChild(img);

    if (carouselContainer) {
      carouselContainer.appendChild(slide);
      if (carouselContainer.children.length > 20) {
        carouselContainer.removeChild(carouselContainer.children[0]);
      }
    }
  }
}
