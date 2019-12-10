import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }
  public getMarvelCharacters() {
     return this.http.get('https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=5e50ffa08294f9673a4876bb8738ab43');
}
public getheroByNae(id) {
  return this.http.get('https://gateway.marvel.com:443/v1/public/characters?id='+id+'&apikey=5e50ffa08294f9673a4876bb8738ab43');
}
}
