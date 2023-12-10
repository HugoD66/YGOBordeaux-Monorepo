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

  getUserList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}/users`).pipe(
      tap((response: UserModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }



  private log(response: UserModel[]|UserModel|undefined|Object) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of (errorValue)
  }

}
