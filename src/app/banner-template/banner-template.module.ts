import { NgModule } from '@angular/core';

import { BannerTemplateComponent } from './banner-template.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
        {path:'', component: BannerTemplateComponent}
    ])],
    exports: [BannerTemplateComponent],
    declarations: [BannerTemplateComponent],
    providers: [],
})
export class BannerTemplateModule { }
