- npm run start opens a browser window automatically;

- generated 3 modules with routing module (CartModule, OrdersModule, ProductsModule) and 2 modules without (CoreModule and SharedModule);

- ProductsModule:
  1. generated 2 components (ProductComponent, ProductListComponent);
  2. generated ProductService;
  3. generated Product model and interface;
  4. used property binding for button disabling;
  5. used @Input and @Output decorators;
  6. used OnPush change detection strategy for presentational component;
  7. applied structural directives *ngIf and *ngFor;
  8. used an attribute directive ngClass;
  9. realised 2 event handlers onBuyProduct and toggle.

- CartModule:
  1. generated 2 components (CartListComponent, CartItemComponent);
  2. generated CartService;
  3. generated Purchase model and interface;
  4. used property binding for '-' button disabling;
  5. used @Input and @Output decorators;
  6. used OnPush change detection strategy for presentational component;
  7. applied structural directives *ngIf and *ngFor;
  8. added event handlers for cart updates;

- added appPaintBackground directive to SharedModule;
  
- used @ViewChild decorator in AppComponent and ngAfterViewInit lifecycle hook;
