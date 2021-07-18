import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { 
  }
  getPost(){
    return this.http.get(this.url)
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post){
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({isRead : true}))
  }

  deletePost(id){
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((error : HttpErrorResponse) => {
        if (error.status === 404){
          return throwError(error);
        }
        return throwError(error);
      })
    )
  }
}
