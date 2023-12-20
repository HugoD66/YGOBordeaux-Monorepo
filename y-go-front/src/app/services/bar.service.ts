import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../env";
import {BarModel} from "../models/bar.model";
import {catchError, Observable, of, tap} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable()
export class BarService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {}

  addBar(barData: any): Observable<BarModel> {
    const url = `${this.apiUrl}/bars`;
    return this.http.post<BarModel>(url, barData).pipe(
      tap((response: BarModel) => this.log(response)),
      catchError((error) => this.handleError(error, {} as BarModel))
    );
  }

  getBarsList (): Observable<BarModel[]> {
    return this.http.get<BarModel[]>(`${this.apiUrl}/bars`).pipe(
      tap((response: BarModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getBarById(barId: string | null): Observable<BarModel | undefined> {
    return this.http.get<BarModel>(`${this.apiUrl}/bars/${barId}`).pipe(
      tap((response: BarModel) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  private log(response: UserModel[]|UserModel|undefined|Object) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of (errorValue)
  }
}
