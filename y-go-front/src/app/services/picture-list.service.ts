import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../env";
import { catchError, Observable, of, tap } from "rxjs";
import { PictureListModel } from "../models/picture-list.model";

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
      catchError((error) => this.handleError(error))
    );
  }

  private log(response: PictureListModel) {
    console.table(response);
  }
  private handleError(error: Error) {
    console.error("Erreur lors de l'envoi de la galerie d'images :", error);
    return of(null);
  }
}
