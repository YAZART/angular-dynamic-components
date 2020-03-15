import { NgModule } from '@angular/core';

import { BannerSwitchComponent } from './banner-switch.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        
        RouterModule.forChild([
        {path: '', component: BannerSwitchComponent}
    ])],
    exports: [BannerSwitchComponent],
    declarations: [BannerSwitchComponent],
    providers: [],
})
export class BannerSwitchModule { }
