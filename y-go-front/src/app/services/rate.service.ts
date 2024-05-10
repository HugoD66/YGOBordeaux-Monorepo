import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { RateModel } from '../models/rate.model';
import { environment } from '../../../env';
import { UserModel } from '../models/user.model';

@Injectable()
export class RateService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addRate(rateData: any): Observable<RateModel> {
    const url = `${this.apiUrl}/user-bar-rating`;
    return this.http.post<RateModel>(url, rateData).pipe(
      //tap((response: RateModel) => this.log(response)),
      catchError((error) => this.handleError(error, {} as RateModel)),
    );
  }

  getRateList(): Observable<RateModel[]> {
    return this.http.get<RateModel[]>(`${this.apiUrl}/user-bar-rating`).pipe(
      //tap((response: RateModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, [])),
    );
  }

  getRateById(rateId: string | null): Observable<RateModel | undefined> {
    return this.http
      .get<RateModel>(`${this.apiUrl}/user-bar-rating/${rateId}`)
      .pipe(
        //tap((response: RateModel) => this.log(response)),
        catchError((error) => this.handleError(error, undefined)),
      );
  }

  getRateByIdBar(barId: string): Observable<RateModel[]> {
    return this.http
      .get<RateModel>(`${this.apiUrl}/user-bar-rating/rates/${barId}`)
      .pipe(
        //tap((response: RateModel) => this.log(response)),
        catchError((error) => this.handleError(error, undefined)),
      );
  }

  private log(response: UserModel[] | UserModel | undefined | Object) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
