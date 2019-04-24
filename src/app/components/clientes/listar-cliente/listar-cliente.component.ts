import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  allClientes:any = null;

  constructor( private router:ActivatedRoute, private clientes:ClientesService ) { 

      this.clientes.getClientes()
        .subscribe( clientes => {
          console.log(clientes);
          this.allClientes = clientes['data'];
        });
  }

  ngOnInit() {
  }

}
