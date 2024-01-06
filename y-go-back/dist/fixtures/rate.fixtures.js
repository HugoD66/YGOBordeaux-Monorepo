"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateFixtures = void 0;
const common_1 = require("@nestjs/common");
const user_bar_rating_service_1 = require("../user-bar-rating/user-bar-rating.service");
const bars_service_1 = require("../bars/bars.service");
const users_service_1 = require("../users/users.service");
let RateFixtures = exports.RateFixtures = class RateFixtures {
    constructor(userBarRatingService, usersService, barsService) {
        this.userBarRatingService = userBarRatingService;
        this.usersService = usersService;
        this.barsService = barsService;
    }
    async seedRates() {
        const users = await this.usersService.findAll();
        const bars = await this.barsService.findAll();
        for (const user of users) {
            for (let i = 0; i < 5; i++) {
                const randomBar = bars[Math.floor(Math.random() * bars.length)];
                const randomRate = Math.floor(Math.random() * 6);
                const userDto = await this.usersService.findOne(user.id);
                const barDto = await this.barsService.findOne(randomBar.id);
                const rateDto = {
                    rate: randomRate,
                    user: userDto,
                    bar: barDto,
                };
                try {
                    await this.userBarRatingService.create(rateDto);
                }
                catch (error) {
                    console.error(`Error creating rate for user ${user.id} and bar ${randomBar.id}:`, error);
                }
            }
        }
        console.log('Seeding rates complete!');
    }
};
exports.RateFixtures = RateFixtures = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_bar_rating_service_1.UserBarRatingService,
        users_service_1.UsersService,
        bars_service_1.BarsService])
], RateFixtures);
//# sourceMappingURL=rate.fixtures.js.map