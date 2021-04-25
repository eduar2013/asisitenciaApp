import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ListarComponent } from './pages/empresas/listar/listar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NuevaComponent } from './pages/empresas/nueva/nueva.component';



@NgModule({
  declarations: [ListarComponent, NuevaComponent],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class ConfiguracionModule { }
