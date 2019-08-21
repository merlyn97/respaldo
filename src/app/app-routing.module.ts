import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'menu/:id',
    loadChildren: './components/menu/prueba.module#PruebaModule'
  },
  {
    path: 'menu',
    loadChildren: './components/menu/prueba.module#PruebaModule'
  },
  {
    path: 'id',
    loadChildren: './components/id/id.module#IdModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
