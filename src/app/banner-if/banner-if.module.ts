import { NgModule } from '@angular/core';

import { BannerIfComponent } from './banner-if.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path:'', component: BannerIfComponent}
        ])
    ],
    exports: [BannerIfComponent],
    declarations: [BannerIfComponent],
    providers: [],
})
export class BannerIfModule { }
