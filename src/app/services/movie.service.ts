import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  // Constructor of the Service with Dependency Injection
  url = 'http://www.omdbapi.com/';
  apiKey = 'a1ccc1c9'; // <-- Enter your own key here! 
  constructor(private http: HttpClient) { }
  
  // Get data from the OmdbApi 
  // map the result to return only the results that we need



  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
    .pipe(
      map(results =>{
        console.log('RAW: ',results)
        return results['Search']})
    );
  }
  
  //Get the detailed information for an ID using the "i" parameter
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }


}
