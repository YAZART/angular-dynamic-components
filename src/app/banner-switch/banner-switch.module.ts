import { NgModule } from '@angular/core';

import { BannerSwitchComponent } from './banner-switch.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerTypesBaseModule } from '../banner-types/banner-types-base.module';

@NgModule({
    imports: [
        CommonModule,
        
        RouterModule.forChild([
        {path: '', component: BannerSwitchComponent}
    ]),
    BannerTypesBaseModule
],
    exports: [BannerSwitchComponent],
    declarations: [BannerSwitchComponent],
    providers: [],
})
export class BannerSwitchModule { }
