import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {


  get usuario(){
    return this.authServices.usuario;
  }

  constructor( private router: Router,
               private authServices:AuthService) { }

  
  logout(){
    this.authServices.logout();
    this.router.navigateByUrl('/auth');
  }

}
