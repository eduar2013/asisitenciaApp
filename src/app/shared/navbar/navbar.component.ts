import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'  
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] =[];

  ngOnInit() {
    this.items = [
        {
            label: 'Configuracion',
            items: [{
                    label: 'Empresas', 
                    icon: 'pi pi-fw pi-plus',
                    routerLink:['/configuracion/listar']                    
                    },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        }
    ];
}
  
  constructor(private router: Router,
              private authServices:AuthService) { }

    get usuario(){
      return this.authServices.usuario;
    }

    logout(){
      this.authServices.logout();
      this.router.navigateByUrl('/auth');
    }
}
