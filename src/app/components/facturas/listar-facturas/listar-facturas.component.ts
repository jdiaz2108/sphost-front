import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturasService } from 'src/app/services/facturas.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-facturas',
  templateUrl: './listar-facturas.component.html',
  styleUrls: ['./listar-facturas.component.css']
})
export class ListarFacturasComponent implements OnInit {

  factura:any = {};
  allClientes:any;

  constructor( private router:ActivatedRoute, private facturas:FacturasService, private clientes:ClientesService ) { 
    this.router.params.subscribe( params => {
      this.getFactura(params['id']);
    });
  }

  getFactura( id:string ) {
    this.facturas.getFactura(id)
    .subscribe( factura => {
      this.factura = factura;
    });
  }

  getClientes() {
    this.clientes.getClientes()
    .subscribe( cliente => {
      this.allClientes = cliente['data'];
    });
  }

  ngOnInit() {
  }

}
