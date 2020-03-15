import { Component, OnInit } from '@angular/core';
import { BanerTypeCreatorService } from '../baner-types.service';
import { BannerTypeSet, IBanner } from '../common/interfaces';

@Component({
    selector: 'app-banner-if',
    templateUrl: 'banner-if.component.html'
})

export class BannerIfComponent implements OnInit {
    enums = { 
        types: BannerTypeSet
    };
    bannerList: IBanner[] = [];
    
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