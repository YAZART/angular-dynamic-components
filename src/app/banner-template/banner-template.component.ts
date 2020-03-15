import { Component, OnInit, ViewChild, TemplateRef, AfterViewChecked, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { BanerTypeCreatorService } from '../baner-types.service';

@Component({
    selector: 'app-banner-template',
    templateUrl: 'banner-template.component.html'
})
export class BannerTemplateComponent implements OnInit, AfterViewInit {
    loaded: boolean = false;
    bannerList: any[] = [];
    // Все шаблоны
    @ViewChild('news') public news: TemplateRef<any>;
    @ViewChild('special') public special: TemplateRef<any>;
    @ViewChild('media') public media: TemplateRef<any>;
    @ViewChild('twoCol') public twoCol: TemplateRef<any>;
    @ViewChild('fullBg') public fullBg: TemplateRef<any>;
    @ViewChild('default') public default: TemplateRef<any>;

    // Или через ViewChildren
    @ViewChildren(TemplateRef) public templates: QueryList<TemplateRef<any>>;
    public tmpl: {[key:string]: TemplateRef<any>} = {};

    ngAfterViewInit(){
        this.templates.forEach((x)=>{
            if(
                (x as any)._declarationTContainer &&
                (x as any)._declarationTContainer.localNames ){
                    this.tmpl[(x as any)._declarationTContainer.localNames[0]] = x; 
            }
            
        });
    }
    public get template(): TemplateRef<any>{
        
        return this.default;
    }
    constructor(
        private fabric: BanerTypeCreatorService){
    }
    addNews(){
        this.bannerList.push({
            template: this.tmpl['news'],
            ctx: this.fabric.createNews()
        });
    }
    addSpecial(){
        this.bannerList.push({
            template: this.tmpl['special'],
            ctx: this.fabric.createSpecial()
        });
    }
    addMedia(){
        this.bannerList.push({
            template: this.tmpl['media'],
            ctx: this.fabric.createMedia()
        });
    }
    addTwoCol(){
        this.bannerList.push({
            template: this.tmpl['twoCol'],
            ctx: this.fabric.createTwoCol()
        });
    }
    addFullBg(){
        this.bannerList.push({
            template: this.tmpl['fullBg'],
            ctx: this.fabric.createFullBg()
        });
    }
    addDefault(){
        this.bannerList.push({
            template: this.tmpl['default'],
            ctx: this.fabric.createDefault()
        });
    }

    ngOnInit() { }
}