import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ɵrenderComponent as renderComponent,
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ɵrenderComponent,
} from "@angular/core";
import { BannerDefaultComponent } from "../banner-types/banner-default/banner-default.component";

@Component({
  selector: "app-banner-render",
  templateUrl: "banner-render.component.html",
})
export class BannerRenderComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  @ViewChild("container1", { read: ViewContainerRef, static: true })
  container1: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  public async add(moduleName: string) {
    const module = await import(
      `../banner-types/${moduleName}/${moduleName}.component`
    );
    const factory = this.resolver.resolveComponentFactory(
      module[Object.keys(module)[0]]
    );
    const componentRef = this.container1.createComponent(factory);
  }

  public addWithRender() {
    import("../banner-types/banner-news/banner-news.component").then(
      ({ BannerNewsComponent }) => {
        const host = document.createElement('div');
        this.container.element.nativeElement.appendChild(host);
        ɵrenderComponent(BannerNewsComponent, {
          host: host,
          injector: this.injector,
        });
      }
    );
  }

  public addNews() {
    this.addWithRender();
  }
  public addSpecial() {
    this.add("banner-special");
  }
  public addMedia() {
    this.add("banner-media");
  }
  public addTwoCol() {
    this.add("banner-two-col");
  }
  addFullBg() {
    this.add("banner-full-bg");
  }
  addDefault() {
    this.add("banner-default");
  }

  ngOnInit() {}
  ngOnDestroy() {}
}
