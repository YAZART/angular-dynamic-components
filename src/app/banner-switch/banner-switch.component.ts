import { Component, OnInit, Input } from '@angular/core';
import { IBanner, BannerTypeSet } from '../common/interfaces';

@Component({
    selector: 'banner-switch',
    templateUrl: 'banner-switch.component.html'
})

export class BannerSwitchComponent implements OnInit {
    @Input() banner: IBanner;
    enums = { 
        BannerTypeSet: BannerTypeSet
    };
    
    constructor() { }

    ngOnInit() { }
}