import { Component, OnInit, Input } from '@angular/core';
import { IBanner, BannerTypeSet } from '../common/interfaces';

@Component({
    selector: 'banner-switch',
    templateUrl: 'banner-switch.component.html'
})

export class BannerSwitchComponent implements OnInit {
    banner: IBanner = {
        header: 'Мой баннер',
        type: BannerTypeSet.MEDIA
    };
    enums = { 
        types: BannerTypeSet
    };
    
    constructor() {

        
    }

    ngOnInit() { }
}