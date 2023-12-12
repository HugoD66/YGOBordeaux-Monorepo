import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "../../../env";
import { catchError, of, tap } from "rxjs";
let BarService = class BarService {
    constructor(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    addBar(barData) {
        const url = `${this.apiUrl}/bars`;
        return this.http.post(url, barData);
    }
    getBarsList() {
        return this.http.get(`${this.apiUrl}/bars`).pipe(tap((response) => this.log(response)), catchError((error) => this.handleError(error, [])));
    }
    getBarById(barId) {
        return this.http.get(`${this.apiUrl}/bars/${barId}`).pipe(tap((response) => this.log(response)), catchError((error) => this.handleError(error, undefined)));
    }
    log(response) {
        console.table(response);
    }
    handleError(error, errorValue) {
        console.error(error);
        return of(errorValue);
    }
};
BarService = __decorate([
    Injectable()
], BarService);
export { BarService };
//# sourceMappingURL=bar.service.js.map