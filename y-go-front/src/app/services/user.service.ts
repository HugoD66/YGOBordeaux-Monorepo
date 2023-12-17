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

  getUser(): Observable<UserModel> {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken); //GOOD
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    console.log('OPTION' + options); //GOOD
    return this.http.get<UserModel>(`${this.apiUrl}/users/me`, options).pipe(
      tap((response: UserModel) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  logout(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });
    const options = { headers: headers };
    return this.http.post(`${this.apiUrl}/logout`, {}, options).pipe(
      tap(() => {
        localStorage.removeItem('access_token');
      }),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  uploadUserPicture(userId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });
    const options = { headers: headers };

    return this.http.post(`${this.apiUrl}/users/upload-file/${userId}`, formData, options).pipe(
      tap((response) => console.log(response)),
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
