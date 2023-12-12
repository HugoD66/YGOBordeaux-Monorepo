import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoaderComponent = class LoaderComponent {
};
LoaderComponent = __decorate([
    Component({
        selector: 'app-loader',
        template: `
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
      </div>
    </div>
  `,
    })
], LoaderComponent);
export { LoaderComponent };
//# sourceMappingURL=loader.js.map