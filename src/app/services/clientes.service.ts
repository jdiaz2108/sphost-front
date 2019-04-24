import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_ENDPOINT = 'http://localhost:8000/api'
  constructor( private httpClient:HttpClient ) {

   }

  getQuery() {

    const url = this.API_ENDPOINT+'/clientes';

    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest', 'Authorization': localStorage.getItem("Autorization")
    });
    return this.httpClient.get(url, {headers});
  }

  getClientes() {
    return this.getQuery()
    .pipe(map( data => data));
  }

}
