import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: `app-pres`,
  templateUrl: `./pres.component.html`,
  styleUrls: [`./pres.component.scss`],
})
export class PresComponent {
  @Input() user: UserModel | undefined;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  @HostListener(`window:scroll`, [])
  onWindowScroll() {
    this.handleScroll();
  }
  handleScroll() {
    const ygoPicture: HTMLElement | null =
      this.el.nativeElement.querySelector(`#ygo-picture`);
    const scrollTop: number = window.scrollY;
    const maxScroll: number = 500;
    const finalSize: number = 5;
    const finalPosition: number = 3;

    if (scrollTop <= maxScroll) {
      const progress = scrollTop / maxScroll;
      this.renderer.setStyle(ygoPicture, `position`, `fixed`);
      this.renderer.setStyle(ygoPicture, `top`, `${6 - 3 * progress}%`);
      this.renderer.setStyle(ygoPicture, `left`, `${6 - 3 * progress}%`);
      const newSize =
        45 - 26 * progress > finalSize ? 30 - 26 * progress : finalSize;
      this.renderer.setStyle(ygoPicture, `width`, `${newSize}vw`);
      this.renderer.setStyle(ygoPicture, `zIndex`, `2`);
    } else {
      this.renderer.setStyle(ygoPicture, `position`, `fixed`);
      this.renderer.setStyle(ygoPicture, `top`, `${finalPosition}vw`);
      this.renderer.setStyle(ygoPicture, `left`, `${finalPosition}vw`);
      this.renderer.setStyle(ygoPicture, `width`, `${finalSize}vw`);
      this.renderer.setStyle(ygoPicture, `zIndex`, `6`);
    }
  }
}
