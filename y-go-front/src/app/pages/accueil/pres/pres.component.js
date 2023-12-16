"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresComponent = void 0;
const core_1 = require("@angular/core");
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
    (0, core_1.HostListener)("window:scroll", [])
], PresComponent.prototype, "onWindowScroll", null);
PresComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-pres',
        templateUrl: './pres.component.html',
        styleUrls: ['./pres.component.scss']
    })
], PresComponent);
exports.PresComponent = PresComponent;
