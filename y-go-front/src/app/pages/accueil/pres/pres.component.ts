import { Component, ElementRef, HostListener, Input, Renderer2 } from "@angular/core"
import { UserModel } from "../../../models/user.model"

@Component({
  selector: `app-pres`,
  templateUrl: `./pres.component.html`,
  styleUrls: [`./pres.component.scss`],
})
export class PresComponent {
  @Input() user: UserModel | undefined

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostListener(`window:scroll`, [])
  onWindowScroll() {
    this.handleScroll()
  }
  handleScroll() {
    const ygoPicture: HTMLElement | null = this.el.nativeElement.querySelector(`#ygo-picture`)
    const scrollTop: number = window.scrollY
    const finalSize: number = 5
    if (scrollTop > 0) {
      this.renderer.setStyle(ygoPicture, `transition`, `all 0.2s`)
      this.renderer.setStyle(ygoPicture, `position`, `fixed`)
      this.renderer.setStyle(ygoPicture, `top`, `10`)
      this.renderer.setStyle(ygoPicture, `left`, `10`)
      this.renderer.setStyle(ygoPicture, `width`, `${finalSize}vw`)
      this.renderer.setStyle(ygoPicture, `z-index`, `5`)
    } else {
      this.renderer.setStyle(ygoPicture, `transition`, `all 0.2s`)
      this.renderer.removeStyle(ygoPicture, `position`)
      this.renderer.removeStyle(ygoPicture, `top`)
      this.renderer.removeStyle(ygoPicture, `left`)
      this.renderer.setStyle(ygoPicture, `width`, `20vw`)
      this.renderer.setStyle(ygoPicture, `z-index`, `5`)
    }
  }
}
