import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { UserModel } from '../models/user.model';
import { environment } from '../../../env';
import { FormGroup } from '@angular/forms';
import { ChangePasswordModel } from '../models/change-password.model';

@Injectable()
export class UserService {
  private apiUrl = environment.apiUrl;
  data$: Observable<UserModel[]> | undefined;

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getMe(token: string): Observable<UserModel> {
    return this.http
      .get<UserModel>(`${this.apiUrl}/users/auth/me`, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      })
      .pipe(
        //tap((response: UserModel) => this.log(response)),
        catchError((error) => this.handleError(error, [])),
      );
  }

  getUsersList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}/users`).pipe(
      //tap((response: UserModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, [])),
    );
  }

  getUser(): Observable<UserModel> {
    const accessToken = localStorage.getItem(`access_token`);
    const headers = new HttpHeaders().set(
      `Authorization`,
      `Bearer ${accessToken}`,
    );
    const options = { headers: headers };
    return this.http
      .get<UserModel>(`${this.apiUrl}/users/me`, options)
      .pipe //tap((response: UserModel) => this.log(response))
      ();
  }

  logout(): Observable<any> {
    const accessToken = localStorage.getItem(`access_token`);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    return this.http.post(`${this.apiUrl}/logout`, {}, options).pipe(
      tap(() => {}),
      catchError((error) => this.handleError(error, undefined)),
    );
  }

  uploadUserPicture(userId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append(`file`, file, file.name);

    const accessToken = localStorage.getItem(`access_token`);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const options = { headers: headers };

    return this.http
      .post(`${this.apiUrl}/users/upload-file/${userId}`, formData, options)
      .pipe(
        //tap((response) => console.log(response)),
        catchError((error) => this.handleError(error, undefined)),
      );
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get(`password`)?.value;
    const verifyPassword = group.get(`verifyPassword`)?.value;
    return password === verifyPassword ? null : { passwordMismatch: true };
  }

  changePasswordOnLoginScreen(changePasswordModel: ChangePasswordModel) {
    return this.http
      .patch(`${this.apiUrl}/users/change-password`, changePasswordModel)
      .pipe(
        //tap((response) => console.log(response)),
        catchError((error) => this.handleError(error, undefined)),
      );
  }

  /*  updateUser(user: UserModel): Observable<UserModel> {
    const accessToken = localStorage.getItem(`access_token`);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    return this.http
      .patch<UserModel>(`${this.apiUrl}/users/me`, user, options)
      .pipe(
        //tap((response: UserModel) => this.log(response)),
        catchError((error) => this.handleError(error, undefined)),
      );
  }*/

  updateUser(user: Partial<UserModel>): Observable<UserModel> {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    return this.http
      .patch<UserModel>(`${this.apiUrl}/users/${user.id}`, user, options)
      .pipe(catchError((error) => this.handleError(error, undefined)));
  }

  private log(response: UserModel[] | UserModel | undefined | Object) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
