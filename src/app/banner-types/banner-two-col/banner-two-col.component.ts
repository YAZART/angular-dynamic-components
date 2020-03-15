import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from 'src/app/common/interfaces';

@Component({
    selector: 'app-banner-two-col',
    templateUrl: 'banner-two-col.component.html'
})
export class BannerTwoColComponent implements OnInit {
    @Input() public banner: IBanner;
    constructor() { }

    ngOnInit() { }
}