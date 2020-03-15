import { NgModule } from '@angular/core';

import { BannerTemplateComponent } from './banner-template.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerTypesBaseModule } from '../banner-types/banner-types-base.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: BannerTemplateComponent }
        ]),
        BannerTypesBaseModule
    ],
    exports: [BannerTemplateComponent],
    declarations: [BannerTemplateComponent],
    providers: [],
})
export class BannerTemplateModule { }
