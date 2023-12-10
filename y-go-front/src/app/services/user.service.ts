import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {UserModel} from "../models/user.model";
import {environment} from "../../../env";

@Injectable()
export class UserService {
  private apiUrl = environment.apiUrl;
  data$: Observable<UserModel[]> | undefined;

  constructor(
    private http: HttpClient,
  ) {}

  getUsersList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}/users`).pipe(
      tap((response: UserModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getUserId(): Observable<unknown> {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    console.log(options)
    console.log( this.http.get<UserModel>(`${this.apiUrl}/users/me`, options).pipe(
      tap((response: UserModel) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    ))
    return this.http.get<UserModel>(`${this.apiUrl}/users/me`, options).pipe(
      tap((response: UserModel) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: UserModel[]|UserModel|undefined|Object) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of (errorValue)
  }

}
