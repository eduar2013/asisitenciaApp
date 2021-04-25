import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/empresas/listar/listar.component';
import { NuevaComponent } from './pages/empresas/nueva/nueva.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'listar',component:ListarComponent},
      {path:'nueva',component:NuevaComponent},
      {path:'**',redirectTo:'listar'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
