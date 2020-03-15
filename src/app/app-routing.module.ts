import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'if', loadChildren: () => import('./banner-if/banner-if.module').then(m => m.BannerIfModule)},
  {path:'switch', loadChildren: () => import('./banner-switch/banner-switch.module').then(m => m.BannerSwitchModule)},
  // {path:'template', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
  // {path:'resolver', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
  // {path:'outlet', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
  // {path:'render', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
