import { Component, OnInit, Input } from '@angular/core';
import { IBanner, BannerTypeSet } from '../common/interfaces';
import { BanerTypeCreatorService } from '../baner-types.service';

@Component({
    selector: 'banner-switch',
    templateUrl: 'banner-switch.component.html'
})

export class BannerSwitchComponent implements OnInit {
    // banner: IBanner = {
    //     header: 'Мой баннер',
    //     type: BannerTypeSet.MEDIA
    // };
    enums = { 
        types: BannerTypeSet
    };
    bannerList: any[] = [];
    
    constructor(
        private fabric: BanerTypeCreatorService){
    }
    addNews(){
        this.bannerList.push(
            this.fabric.createNews()
        );
    }
    addSpecial(){
        this.bannerList.push(
            this.fabric.createSpecial()
        );
    }
    addMedia(){
        this.bannerList.push(
            this.fabric.createMedia()
        );
    }
    addTwoCol(){
        this.bannerList.push(
            this.fabric.createTwoCol()
        );
    }
    addFullBg(){
        this.bannerList.push(
            this.fabric.createFullBg()
        );
    }
    addDefault(){
        this.bannerList.push(
            this.fabric.createDefault()
        );
    }

    ngOnInit() { }
}