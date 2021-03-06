import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  API_ENDPOINT = 'http://localhost:8000/api'
  constructor( private httpClient:HttpClient ) {

   }

  getQuery(query:string) {

    const url = this.API_ENDPOINT+'/factura/'+query;

    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest', 'Authorization': localStorage.getItem("Autorization")
    });
    return this.httpClient.get(url, {headers});
  }

  getFactura(id:string) {
    return this.getQuery(id)
    .pipe(map( data => data));
  }
}
