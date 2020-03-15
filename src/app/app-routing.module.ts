import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'if', loadChildren: () => import('./banner-if/banner-if.module').then(m => m.BannerIfModule)},
  {path:'switch', loadChildren: () => import('./banner-switch/banner-switch.module').then(m => m.BannerSwitchModule)},
  {path:'template', loadChildren: () => import('./banner-template/banner-template.module').then(m => m.BannerTemplateModule)},
  {path:'resolver', loadChildren: () => import('./banner-resolver/banner-resolver.module').then(m => m.BannerResolverModule)},
  {path:'outlet', loadChildren: () => import('./banner-outlet/banner-outlet.module').then(m => m.BannerOutletModule)},
  {path:'render', loadChildren: () => import('./banner-render/banner-render.module').then(m => m.BannerRenderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
