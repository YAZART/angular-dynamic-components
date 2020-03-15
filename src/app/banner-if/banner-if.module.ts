import { NgModule } from '@angular/core';

import { BannerIfComponent } from './banner-if.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path:'', component: BannerIfComponent}
        ])
    ],
    exports: [BannerIfComponent],
    declarations: [BannerIfComponent],
    providers: [],
})
export class BannerIfModule { }
