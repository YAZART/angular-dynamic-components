import { NgModule } from '@angular/core';

import { BannerMediaComponent } from './banner-media.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [BannerMediaComponent],
    declarations: [BannerMediaComponent],
    providers: [],
})
export class BannerMediaModule { }
