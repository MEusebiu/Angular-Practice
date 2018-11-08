import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: Http) {}

  getPhotos(){
    // return this.http.get("https://images.dog.ceo/breeds").pipe(map(res=>res.json()));

    return this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(map(res=>res.json()));
    // return this.http.get("https://api.unsplash.com/photos/?client_id=ab57882c2f84292d51d0f7aaaca2feabf5560a45eff5d19d423e54b652690b75").pipe(map(res=>res.json()));
  }
}
