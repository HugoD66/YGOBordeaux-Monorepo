import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../env';
import { BarModel } from '../models/bar.model';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class BarService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addBar(barData: any): Observable<BarModel> {
    const token = localStorage.getItem('authToken');

    console.log('TOKEN' + token);
    return this.http
      .post<BarModel>(`${this.apiUrl}/bars`, barData, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
        observe: 'response',
      })
      .pipe(
        map((response) => {
          if (response.body !== null) {
            return response.body;
          } else {
            throw new Error('Response body is null');
          }
        }),
        tap((response: BarModel) => this.log(response)),
        catchError((error) => this.handleError(error, {} as BarModel)),
      );
  }

  getBarsList(): Observable<BarModel[]> {
    return this.http.get<BarModel[]>(`${this.apiUrl}/bars`).pipe(
      tap((response: BarModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, [])),
    );
  }

  getBarById(barId: string | null): Observable<BarModel | undefined> {
    return this.http.get<BarModel>(`${this.apiUrl}/bars/${barId}`).pipe(
      tap((response: BarModel) => this.log(response)),
      catchError((error) => this.handleError(error, undefined)),
    );
  }

  getTotalCountVoters(barId: string | null): Observable<number | undefined> {
    return this.http
      .get<number>(`${this.apiUrl}/user-bar-rating/${barId}/count-voters`)
      .pipe(
        // return this.http.get<number>(`${this.apiUrl}/${barId}/count`).pipe(
        tap((response: number) => this.log(response)),
        catchError((error) => this.handleError(error, undefined)),
      );
  }

  private log(response: UserModel[] | UserModel | undefined | Object | number) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
