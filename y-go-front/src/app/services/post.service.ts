import { environment } from '../../../env';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { PostModel } from '../models/post.model';
import { BarModel } from '../models/bar.model';

@Injectable()
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addPost(postData: PostModel): Observable<PostModel> {
    const url = `${this.apiUrl}/posts`;
    console.log('postData de post.service.ts');
    console.log(postData);
    return this.http.post<PostModel>(url, postData).pipe(
      tap((response: PostModel) => this.log(response)),
      catchError((error) => this.handleError(error, {} as BarModel)),
    );
  }

  getPostsList(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.apiUrl}/posts`).pipe(
      tap((response: PostModel[]) => this.log(response)),
      catchError((error) => this.handleError(error, [])),
    );
  }

  getPostById(postId: string | null): Observable<PostModel | undefined> {
    return this.http.get<PostModel>(`${this.apiUrl}/posts/${postId}`).pipe(
      tap((response: PostModel) => this.log(response)),
      catchError((error) => this.handleError(error, undefined)),
    );
  }

  getPostByIdBar(barId: string): Observable<null | PostModel | PostModel[]> {
    return this.http
      .get<PostModel[]>(`${this.apiUrl}/posts/by-bar/${barId}`)
      .pipe(
        tap((response: PostModel | null | PostModel[]) => this.log(response)),
        catchError((error) => this.handleError(error, [])),
      );
  }

  getPostByUser(userId: string): Observable<null | PostModel | PostModel[]> {
    return this.http
      .get<PostModel[]>(`${this.apiUrl}/posts/by-user/${userId}`)
      .pipe(
        tap((response: PostModel | null | PostModel[]) => this.log(response)),
        catchError((error) => this.handleError(error, [])),
      );

  }
  private log(
    response: number | Object | PostModel | PostModel[] | undefined | null,
  ) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
