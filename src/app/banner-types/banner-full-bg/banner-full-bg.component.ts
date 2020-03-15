import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from 'src/app/common/interfaces';

@Component({
    selector: 'app-banner-full-bg',
    templateUrl: 'banner-full-bg.component.html'
})

export class BannerFullBgComponent implements OnInit {
    @Input() public banner: IBanner;
    constructor() { }

    ngOnInit() { }
}