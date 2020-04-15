import { NgModule } from '@angular/core';

import { BannerOutletComponent } from './banner-outlet.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerTwoColComponent } from '../banner-types/banner-two-col/banner-two-col.component';
import { BannerMediaComponent } from '../banner-types/banner-media/banner-media.component';
import { BannerDefaultComponent } from '../banner-types/banner-default/banner-default.component';
import { BannerFullBgComponent } from '../banner-types/banner-full-bg/banner-full-bg.component';
import { BannerSpecialComponent } from '../banner-types/banner-special/banner-special.component';
import { BannerNewsComponent } from '../banner-types/banner-news/banner-news.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path:'', component: BannerOutletComponent}
        ])

    ],
    exports: [BannerOutletComponent],
    declarations: [BannerOutletComponent],
    providers: []
})
export class BannerOutletModule { }
