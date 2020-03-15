import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from 'src/app/common/interfaces';

@Component({
    selector: 'app-banner-media',
    templateUrl: 'banner-media.component.html'
})

export class BannerMediaComponent implements OnInit {
    @Input() public banner: IBanner;
    constructor() { }

    ngOnInit() { }
}