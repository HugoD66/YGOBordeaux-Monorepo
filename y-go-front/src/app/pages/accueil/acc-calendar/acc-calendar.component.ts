import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: `app-acc-calendar`,
  templateUrl: `./acc-calendar.component.html`,
  styleUrls: [`./acc-calendar.component.scss`],
})
export class AccCalendarComponent {
  calendarPictureList = [
    `9.png`,
    `8.png`,
    `7.png`,
    `6.png`,
    `5.png`,
    `4.png`,
    `3.png`,
    `2.png`,
    `1.png`,
  ];
  currentImageIndex = 0;
  animateClass = false;

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.calendarPictureList.length;
      this.triggerAnimation();
    }, 1000);
  }

  triggerAnimation() {
    this.animateClass = true;
    this.cdr.detectChanges(); // Force la détection de changements
    setTimeout(() => {
      this.animateClass = false;
      this.cdr.detectChanges(); // Force la détection de changements
    }, 300);
  }
}
