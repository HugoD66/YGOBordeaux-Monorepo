import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { catchError, of, tap } from "rxjs";
import { environment } from "../../../env";
let UserService = class UserService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.apiUrl;
  }
  getUsersList() {
    return this.http.get(`${this.apiUrl}/users`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, [])),
    );
  }
  getUser() {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken); //GOOD
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    console.log(options); //GOOD
    return this.http.get(`${this.apiUrl}/users/me`, options).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined)),
    );
  }
  logout() {
    const accessToken = localStorage.getItem("access_token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    return this.http.post(`${this.apiUrl}/logout`, {}, options).pipe(
      tap(() => {
        localStorage.removeItem("access_token");
      }),
      catchError((error) => this.handleError(error, undefined)),
    );
  }
  log(response) {
    console.table(response);
  }
  handleError(error, errorValue) {
    console.error(error);
    return of(errorValue);
  }
};
UserService = __decorate([Injectable()], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map
