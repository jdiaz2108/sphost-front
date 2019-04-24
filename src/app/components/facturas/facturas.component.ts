import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})

export class FacturasComponent implements OnInit {

  API_ENDPOINT = 'http://localhost:8000/api';

  term:any;


  constructor(private facturasService: FacturasService, private httpClient: HttpClient) {
    httpClient.get(this.API_ENDPOINT+'/factura', {headers: {'X-Requested-With': 'XMLHttpRequest', 'Authorization': localStorage.getItem("Autorization")}})
    .subscribe((data) => {
      this.term = data['data'];
      console.log(data);
    });
   }

  ngOnInit() {
    console.log(this.term);
  }

}
