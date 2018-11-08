import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: Http) {
   
   }

   getPosts(){
     return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map(res => res.json()));
   }
}
