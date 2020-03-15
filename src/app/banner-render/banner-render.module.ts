import { NgModule } from '@angular/core';

import { BannerRenderComponent } from './banner-render.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path:'', component: BannerRenderComponent}
        ])
    ],
    exports: [BannerRenderComponent],
    declarations: [BannerRenderComponent],
    providers: [],
})
export class BannerRenderModule { }
