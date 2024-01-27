"use strict"
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator[`throw`](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, `__esModule`, { value: true })
exports.AccueilNavComponent = void 0
const core_1 = require(`@angular/core`)
const divider_1 = require(`@angular/material/divider`)
const list_1 = require(`@angular/material/list`)
const button_1 = require(`@angular/material/button`)
const router_1 = require(`@angular/router`)
const common_1 = require(`@angular/common`)
const button_unit_horiz_component_1 = require(
  `../../../../components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component`
)
let AccueilNavComponent = class AccueilNavComponent {
  constructor(userService, router) {
    this.userService = userService
    this.router = router
    this.isAuthenticated = false
    this.routerLinkProfile = ``
  }
  ngOnInit() {
    try {
      this.userService.getUser().subscribe((data) => {
        this.result = data
        if (this.result) {
          this.isAuthenticated = true
          console.log(this.result)
        }
      })
    } catch (error) {
      console.error(`Error fetching user data:`, error)
    }
  }
  onLogout() {
    this.userService.logout()
    this.isAuthenticated = false
  }
  fetchUserAndNavigate() {
    var _a, _b
    return __awaiter(this, void 0, void 0, function* () {
      const data = yield this.userService.getUser().toPromise()
      this.result = data
      if ((_a = this.result) === null || _a === void 0 ? void 0 : _a.id) {
        this.isAuthenticated = true
        this.routerLinkProfile = `users/detail/${(_b = this.result) === null || _b === void 0 ? void 0 : _b.id}`
        this.router.navigate([this.routerLinkProfile])
      }
    })
  }
}
AccueilNavComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-accueil-nav`,
      templateUrl: `./accueil-nav.component.html`,
      styleUrls: [`./accueil-nav.component.scss`],
      standalone: true,
      imports: [
        common_1.NgIf,
        list_1.MatListModule,
        divider_1.MatDividerModule,
        button_1.MatButtonModule,
        router_1.RouterLinkActive,
        router_1.RouterLink,
        button_unit_horiz_component_1.ButtonUnitHorizComponent,
      ],
    }),
  ],
  AccueilNavComponent
)
exports.AccueilNavComponent = AccueilNavComponent
