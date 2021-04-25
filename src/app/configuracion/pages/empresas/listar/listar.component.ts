import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/configuracion/interfaces/interfaces';
import { EmpresaServices } from '../../../services/empresa.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit {

  empresas:Empresa[] = [];

  constructor(private empresaServices:EmpresaServices,
              private router: Router) { }

  ngOnInit(): void {
    this.listarEmpresas();
  }

  listarEmpresas(){
    this.empresaServices.listarEmpresas()
    .subscribe(empresas => this.empresas = empresas);
  }

  eliminarEmpresa(idEmpresa:number, razonSocial:string){

    Swal.fire({
      title: `Esta seguro(a) que quiere eliminar la empresa ${razonSocial}?`,
      text: "Este cambio no podra ser devuelto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empresaServices.eliminarEmpresa(idEmpresa)
                  .subscribe(resp => {
                  this.listarEmpresas();
        });

        Swal.fire(
          'Ok!',
          'La empresa ha sido Eliminada',
          'success'
        )
      }
    });
  }

  nuevaEmpresa(){
    this.router.navigateByUrl('/configuracion/nueva');
  }

}
