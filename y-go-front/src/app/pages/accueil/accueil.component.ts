import { Component, HostListener, Renderer2, ElementRef } from "@angular/core"

@Component({
  selector: `app-accueil`,
  templateUrl: `./accueil.component.html`,
  styleUrls: [`./accueil.component.scss`],
})
export class AccueilComponent {
  @HostListener(`window:scroll`, [`$event`])
  public isScrolled = false

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostListener(`window:scroll`, [`$event`])
  onScroll(event: Event): void {
    const ygoPicture: HTMLElement | null = this.el.nativeElement.querySelector(`#ygo-picture`)
    const video: HTMLElement | null = this.el.nativeElement.querySelector(`#video-scroll`)
    const scrollTop: number = window.scrollY
    const maxScroll: number = 700 // déclenchement anim
    const finalSize: number = 4 // taille minimale (vw)
    const finalPosition: number = 3
    if (scrollTop <= maxScroll) {
      const progress = scrollTop / maxScroll
      this.renderer.setStyle(ygoPicture, `position`, `fixed`)
      this.renderer.setStyle(ygoPicture, `top`, `${10 - /* 10 */ 3.4 * progress}%`)
      this.renderer.setStyle(ygoPicture, `left`, `${10 - /* 10 */ 7.3 * progress}%`)
      const newSize = /* 30 */ 45 - 26 * progress > finalSize ? 30 - 26 * progress : finalSize
      this.renderer.setStyle(ygoPicture, `width`, `${newSize}vw`)
      this.renderer.setStyle(ygoPicture, `zIndex`, `2`)
      //this.renderer.setStyle(video, `zIndex`, `1`)
    } else {
      this.renderer.setStyle(ygoPicture, `position`, `fixed`)
      this.renderer.setStyle(ygoPicture, `top`, `${finalPosition}vw`)
      this.renderer.setStyle(ygoPicture, `left`, `${finalPosition}vw`)
      this.renderer.setStyle(ygoPicture, `width`, `${finalSize}vw`)
      this.renderer.setStyle(ygoPicture, `zIndex`, `6`)
      //this.renderer.setStyle(video, `zIndex`, `1`)
    }
  }
}
