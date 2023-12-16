"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const env_1 = require("../../../env");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = env_1.environment.apiUrl;
    }
    getUsersList() {
        return this.http.get(`${this.apiUrl}/users`).pipe((0, rxjs_1.tap)((response) => this.log(response)), (0, rxjs_1.catchError)((error) => this.handleError(error, [])));
    }
    getUser() {
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken); //GOOD
        const headers = new http_1.HttpHeaders({
            'Authorization': `Bearer ${accessToken}`,
        });
        const options = { headers: headers };
        console.log(options); //GOOD
        return this.http.get(`${this.apiUrl}/users/me`, options).pipe((0, rxjs_1.tap)((response) => this.log(response)), (0, rxjs_1.catchError)((error) => this.handleError(error, undefined)));
    }
    logout() {
        const accessToken = localStorage.getItem('access_token');
        const headers = new http_1.HttpHeaders({
            'Authorization': `Bearer ${accessToken}`,
        });
        const options = { headers: headers };
        return this.http.post(`${this.apiUrl}/logout`, {}, options).pipe((0, rxjs_1.tap)(() => {
            localStorage.removeItem('access_token');
        }), (0, rxjs_1.catchError)((error) => this.handleError(error, undefined)));
    }
    log(response) {
        console.table(response);
    }
    handleError(error, errorValue) {
        console.error(error);
        return (0, rxjs_1.of)(errorValue);
    }
};
UserService = __decorate([
    (0, core_1.Injectable)()
], UserService);
exports.UserService = UserService;
