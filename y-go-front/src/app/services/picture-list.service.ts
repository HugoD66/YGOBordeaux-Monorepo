import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../env";
import { catchError, Observable, of, tap } from "rxjs";
import { PictureListModel } from "../models/picture-list.model";
import {BarModel} from "../models/bar.model";

@Injectable()
export class PictureListService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  addPictureList(pictureListData: any): Observable<PictureListModel | null> {
    const url = `${this.apiUrl}/picture-list`;
    return this.http.post<PictureListModel>(url, pictureListData).pipe(
      tap((response: PictureListModel) => this.log(response)),
      catchError((error) => this.handleError(error, {} as PictureListModel))
    );
  }

  getBarsList (): Observable<PictureListModel[] | null> {
    return this.http.get<PictureListModel[]>(`${this.apiUrl}/picture-list`).pipe(
      tap((response: PictureListModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getPictureList(pictureListId: string | null): Observable<PictureListModel[] | null> {
    return this.http.get<PictureListModel[]>(`${this.apiUrl}/picture-list/${pictureListId}`).pipe(
      tap((response: PictureListModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  private log(response: PictureListModel[] | PictureListModel) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of (errorValue)
  }
}
