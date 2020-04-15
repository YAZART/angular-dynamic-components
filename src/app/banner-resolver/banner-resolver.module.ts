import { NgModule } from '@angular/core';

import { BannerResolverComponent } from './banner-resolver.component';
import { BannerNewsComponent } from '../banner-types/banner-news/banner-news.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerSpecialComponent } from '../banner-types/banner-special/banner-special.component';
import { BannerFullBgComponent } from '../banner-types/banner-full-bg/banner-full-bg.component';
import { BannerDefaultComponent } from '../banner-types/banner-default/banner-default.component';
import { BannerMediaComponent } from '../banner-types/banner-media/banner-media.component';
import { BannerTwoColComponent } from '../banner-types/banner-two-col/banner-two-col.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path:'', component: BannerResolverComponent}
        ])
    ],
    exports: [BannerResolverComponent],
    declarations: [BannerResolverComponent],
    providers: []
})
export class BannerResolverModule { }
