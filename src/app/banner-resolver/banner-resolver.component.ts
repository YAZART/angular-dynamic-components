import { Component, OnInit, ComponentFactoryResolver, ViewChildren, ViewContainerRef, ViewChild, ElementRef, ViewRef, ComponentRef, TemplateRef, EmbeddedViewRef } from '@angular/core';
import { IBanner } from '../common/interfaces';
import { BannerNewsComponent } from '../banner-types/banner-news/banner-news.component';
import { BanerTypeCreatorService } from '../baner-types.service';
import { BannerMediaComponent } from '../banner-types/banner-media/banner-media.component';
import { BannerSpecialComponent } from '../banner-types/banner-special/banner-special.component';
import { BannerTwoColComponent } from '../banner-types/banner-two-col/banner-two-col.component';
import { BannerFullBgComponent } from '../banner-types/banner-full-bg/banner-full-bg.component';
import { BannerDefaultComponent } from '../banner-types/banner-default/banner-default.component';

export type BannerUnionType = BannerNewsComponent|BannerMediaComponent|BannerSpecialComponent|BannerTwoColComponent|BannerFullBgComponent|BannerDefaultComponent;



@Component({
    selector: 'app-banner-resolver',
    templateUrl: 'banner-resolver.component.html'
})

export class BannerResolverComponent implements OnInit {
    @ViewChild('container', { read: ViewContainerRef, static: true }) host: ViewContainerRef;
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private fabric: BanerTypeCreatorService) {
    }
    add(component:any, data: IBanner)
    {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = this.host.createComponent(componentFactory);
        (<BannerUnionType>componentRef.instance).banner = data;
    }

    addNews(){
        this.add(BannerNewsComponent, this.fabric.createNews());
    }
    addSpecial(){
        this.add(BannerSpecialComponent, this.fabric.createSpecial());
    }
    addMedia(){
        this.add(BannerMediaComponent, this.fabric.createMedia());
    }
    addTwoCol(){
        this.add(BannerTwoColComponent, this.fabric.createMedia());
    }
    addFullBg(){
        this.add(BannerFullBgComponent, this.fabric.createMedia()); 
    }
    addDefault(){
        this.add(BannerDefaultComponent, this.fabric.createDefault());
    }




    ngOnInit() { }
}