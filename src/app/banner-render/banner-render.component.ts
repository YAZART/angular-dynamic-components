import { 
    Component, 
    OnInit, 
    ViewChild, 
    ElementRef, 
    ɵrenderComponent as renderComponent,
    ɵLifecycleHooksFeature as LifecycleHooksFeature,
    Injector, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BannerDefaultComponent } from '../banner-types/banner-default/banner-default.component';

@Component({
    selector: 'app-banner-render',
    templateUrl: 'banner-render.component.html'
})

export class BannerRenderComponent implements OnInit {
    @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

    constructor(
        private injector: Injector,
        private resolver: ComponentFactoryResolver
    ) { }

    public addNews() {
        import(`../banner-types/banner-news/banner-news.component`).then(({BannerNewsComponent}) => {
            const componentFactory = this.resolver.resolveComponentFactory(BannerNewsComponent);
            const componentRef = this.container.createComponent(componentFactory, 0, this.injector);
            // return renderComponent(BannerDefaultComponent, { injector, });
          });
    }
    public addSpecial() {   
        import(`../banner-types/banner-special/banner-special.component`).then(({BannerSpecialComponent}) => {
            const componentFactory = this.resolver.resolveComponentFactory(BannerSpecialComponent);
            const componentRef = this.container.createComponent(componentFactory, 0, this.injector);
            // return renderComponent(BannerDefaultComponent, { injector, });
          });  
    }
    public addMedia() {
        import(`../banner-types/banner-media/banner-media.component`).then(({BannerMediaComponent}) => {
            const componentFactory = this.resolver.resolveComponentFactory(BannerMediaComponent);
            const componentRef = this.container.createComponent(componentFactory, 0, this.injector);
            // return renderComponent(BannerDefaultComponent, { injector, });
          }); 
    }
    public addTwoCol() {
        import(`../banner-types/banner-two-col/banner-two-col.component`).then(({BannerTwoColComponent}) => {
            const componentFactory = this.resolver.resolveComponentFactory(BannerTwoColComponent);
            const componentRef = this.container.createComponent(componentFactory, 0, this.injector);
            // return renderComponent(BannerDefaultComponent, { injector, });
          }); 
    }
    addFullBg() {
        import(`../banner-types/banner-full-bg/banner-full-bg.component`).then(({BannerFullBgComponent}) => {
            const componentFactory = this.resolver.resolveComponentFactory(BannerFullBgComponent);
            const componentRef = this.container.createComponent(componentFactory, 0, this.injector);
            // return renderComponent(BannerDefaultComponent, { injector, });
        }); 
    }
    addDefault() {
        import(`../banner-types/banner-default/banner-default.component`).then(({BannerDefaultComponent}) => {
            const componentFactory = this.resolver.resolveComponentFactory(BannerDefaultComponent);
            const componentRef = this.container.createComponent(componentFactory, 0, this.injector);
            // return renderComponent(BannerDefaultComponent, { injector, });
        }); 
    }

    ngOnInit() { }
    ngOnDestroy() {
    }
}