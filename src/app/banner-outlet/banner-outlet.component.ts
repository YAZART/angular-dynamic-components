import { Component, OnInit } from '@angular/core';
import { BanerTypeCreatorService } from '../baner-types.service';
import { BannerTypeSet } from '../common/interfaces';
import { BannerNewsComponent } from '../banner-types/banner-news/banner-news.component';
import { BannerDefaultComponent } from '../banner-types/banner-default/banner-default.component';
import { BannerFullBgComponent } from '../banner-types/banner-full-bg/banner-full-bg.component';
import { BannerSpecialComponent } from '../banner-types/banner-special/banner-special.component';
import { BannerMediaComponent } from '../banner-types/banner-media/banner-media.component';
import { BannerTwoColComponent } from '../banner-types/banner-two-col/banner-two-col.component';

@Component({
    selector: 'app-banner-outlet',
    templateUrl: 'banner-outlet.component.html'
})
export class BannerOutletComponent implements OnInit {
    enums = { 
        types: BannerTypeSet
    };
    bannerList: any[] = [];
    
    constructor(
        private fabric: BanerTypeCreatorService){
    }
    addNews(){
        this.bannerList.push({
            component: BannerNewsComponent,
            data: this.fabric.createNews()
        });
    }
    addSpecial(){
        this.bannerList.push({
            component: BannerSpecialComponent,
            data: this.fabric.createSpecial()
        });
    }
    addMedia(){
        this.bannerList.push({
            component: BannerMediaComponent,
            data: this.fabric.createMedia()
        });
    }
    addTwoCol(){
        this.bannerList.push({
            component: BannerTwoColComponent,
            data: this.fabric.createTwoCol()
        });
    }
    addFullBg(){
        this.bannerList.push({
            component: BannerFullBgComponent,
            data: this.fabric.createFullBg()
        });
    }
    addDefault(){
        this.bannerList.push({
            component: BannerDefaultComponent,
            data: this.fabric.createDefault()
        });
    }
    ngOnInit(){}
}