import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from 'src/app/common/interfaces';

@Component({
    selector: 'app-banner-special',
    templateUrl: 'banner-special.component.html'
})

export class BannerSpecialComponent implements OnInit {
    @Input() public banner: IBanner;
    constructor() { }

    ngOnInit() { }
}