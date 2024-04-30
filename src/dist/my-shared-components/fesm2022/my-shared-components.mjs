import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class MySharedComponentsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.6", ngImport: i0, type: MySharedComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.6", ngImport: i0, type: MySharedComponentsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.6", ngImport: i0, type: MySharedComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class MySharedComponentsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.6", ngImport: i0, type: MySharedComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.6", type: MySharedComponentsComponent, isStandalone: true, selector: "lib-my-shared-components", ngImport: i0, template: `
    <p>
      my-shared-components works! Loaded from shared library , Lookes Great!!!!!!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.6", ngImport: i0, type: MySharedComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-shared-components', standalone: true, imports: [], template: `
    <p>
      my-shared-components works! Loaded from shared library , Lookes Great!!!!!!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of my-shared-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MySharedComponentsComponent, MySharedComponentsService };
//# sourceMappingURL=my-shared-components.mjs.map
