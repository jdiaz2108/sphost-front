import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../interfaces/login';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_ENDPOINT = 'http://localhost:8000/api'
  constructor( private httpClient:HttpClient ) {

    // console.log('Spotify Service Listo');
  }

  onSave(login: Login) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append( 'Content-Type', 'application/json');
    headers = headers.append( 'X-Requested-With', 'XMLHttpRequest');
    return this.httpClient.post(this.API_ENDPOINT+ '/auth/login', login, {headers: headers})
  }

  // getNewReleases() {
  //   return this.getQuery('browse/new-releases?limit=20')
  //   .pipe( map( data => data['albums'].items ));
  // }

  // getArtist( id:string ) {
  //   return this.getQuery(`artists/${ id }`);
  // }

  // getArtists( term:string ) {
  //   return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
  //   .pipe( map( data => data['artists'].items ));
  // }

  // getTopTracks( id:string ) {
  //   return this.getQuery(`artists/${ id }/top-tracks?country=us`)
  //   .pipe( map( data => data['tracks'] ));
  // }

}