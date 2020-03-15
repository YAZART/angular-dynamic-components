import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from 'src/app/common/interfaces';

@Component({
    selector: 'app-banner-news',
    templateUrl: 'banner-news.component.html'
})

export class BannerNewsComponent implements OnInit {
    @Input() public banner: IBanner;
    constructor() { }

    ngOnInit() { }
}