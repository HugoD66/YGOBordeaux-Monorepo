"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const article_component_1 = require("./article.component");
describe(`ArticleComponent`, () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [article_component_1.ArticleComponent],
        });
        fixture = testing_1.TestBed.createComponent(article_component_1.ArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it(`should create`, () => {
        expect(component).toBeTruthy();
    });
});
