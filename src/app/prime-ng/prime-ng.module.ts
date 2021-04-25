import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
 
@NgModule({
  exports:[
    ButtonModule,
    MenubarModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
