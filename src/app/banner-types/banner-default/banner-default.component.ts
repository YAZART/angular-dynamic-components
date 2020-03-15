import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from 'src/app/common/interfaces';

@Component({
    selector: 'app-banner-default',
    templateUrl: 'banner-default.component.html'
})

export class BannerDefaultComponent implements OnInit {
    @Input() public banner: IBanner;
    constructor() { }
    ngOnInit() { }
}