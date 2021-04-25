import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [NavbarComponent],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    PrimeNgModule
    
  ]
})
export class SharedModule { }
