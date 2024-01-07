"use strict";
Object.defineProperty(exports, `__esModule`, { value: true });
const testing_1 = require(`@angular/core/testing`);
const auth_interceptor_1 = require(`./auth.interceptor`);
describe(`AuthInterceptor`, () => {
  beforeEach(() =>
    testing_1.TestBed.configureTestingModule({
      providers: [auth_interceptor_1.AuthInterceptor],
    }),
  );
  it(`should be created`, () => {
    const interceptor = testing_1.TestBed.inject(
      auth_interceptor_1.AuthInterceptor,
    );
    expect(interceptor).toBeTruthy();
  });
});
