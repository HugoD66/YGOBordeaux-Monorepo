import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
let PresComponent = class PresComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    onWindowScroll() {
        this.handleScroll();
    }
    handleScroll() {
        /*
          showBackgroundImage = false;
    
        const linerElement = document.querySelector(".liner");
        if (linerElement) {
          const rect = linerElement.getBoundingClientRect();
          const linerTop = rect.top;
          const windowHeight = window.innerHeight;
        }
         */
        const ygoPicture = this.el.nativeElement.querySelector(`#ygo-picture`);
        const scrollTop = window.scrollY;
        const maxScroll = 500;
        const finalSize = 5;
        const finalPosition = 3;
        if (scrollTop <= maxScroll) {
            const progress = scrollTop / maxScroll;
            this.renderer.setStyle(ygoPicture, `position`, `fixed`);
            this.renderer.setStyle(ygoPicture, `top`, `${6 - 3 * progress}%`);
            this.renderer.setStyle(ygoPicture, `left`, `${6 - 3 * progress}%`);
            const newSize = 45 - 26 * progress > finalSize ? 30 - 26 * progress : finalSize;
            this.renderer.setStyle(ygoPicture, `width`, `${newSize}vw`);
            this.renderer.setStyle(ygoPicture, `zIndex`, `2`);
        }
        else {
            this.renderer.setStyle(ygoPicture, `position`, `fixed`);
            this.renderer.setStyle(ygoPicture, `top`, `${finalPosition}vw`);
            this.renderer.setStyle(ygoPicture, `left`, `${finalPosition}vw`);
            this.renderer.setStyle(ygoPicture, `width`, `${finalSize}vw`);
            this.renderer.setStyle(ygoPicture, `zIndex`, `6`);
        }
    }
};
__decorate([
    HostListener("window:scroll", [])
], PresComponent.prototype, "onWindowScroll", null);
PresComponent = __decorate([
    Component({
        selector: 'app-pres',
        templateUrl: './pres.component.html',
        styleUrls: ['./pres.component.scss']
    })
], PresComponent);
export { PresComponent };
//# sourceMappingURL=pres.component.js.map