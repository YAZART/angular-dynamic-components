import { NgModule } from '@angular/core';
import { BannerDefaultModule } from './banner-default/banner-default.module';
import { BannerFullBgModule } from './banner-full-bg/banner-full-bg.module';
import { BannerNewsModule } from './banner-news/banner-news.module';
import { BannerTwoColModule } from './banner-two-col/banner-two-col.module';
import { BannerSpecialModule } from './banner-special/banner-special.module';
import { BannerMediaModule } from './banner-media/banner-media.module';


@NgModule({
    imports: [
    ],
    exports: [
        BannerDefaultModule,
        BannerFullBgModule,
        BannerNewsModule,
        BannerTwoColModule,
        BannerSpecialModule,
        BannerMediaModule
    ],
    declarations: [],
    providers: [],
})
export class BannerTypesBaseModule { }
