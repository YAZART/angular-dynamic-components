import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[banner-host]' })
export class BannerHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}