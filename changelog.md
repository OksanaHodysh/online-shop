- npm run start opens a browser window automatically;

- generated 3 modules with routing module (CartModule, OrdersModule, ProductsModule) and 3 modules without (CoreModule, LayoutModule, SharedModule);

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
  10. adjusted getProducts method to return promise and used it with async pipe;
  11. applied CurrencyPipe, DatePipe and UpperCasePipe to ProductComponent.

- CartModule:
  1. generated 2 components (CartListComponent, CartItemComponent);
  2. generated CartService;
  3. generated Purchase model and interface;
  4. used property binding for '-' button disabling;
  5. used @Input and @Output decorators;
  6. used OnPush change detection strategy for presentational component;
  7. applied structural directives *ngIf and *ngFor;
  8. added event handlers for cart updates;
  9. applied OrderByPipe to CartListComponent;
  10. applied CurrencyPipe to CartItemComponent.

- SharedModule:
  1. added PaintBackground and ClickHandler directives.
  2. implemented OrderByPipe;
  
- CoreModule:
  1. generated 4 services (ConfigOptions-, Constants-, Generator-, and LocalStorageService);
  
- LayoutModle:
  1. generated AboutComponent;
  2. applied ClickHandlerDirective to the AboutComponent;
  3. applied localStorageService in ngOnInit and ngOnDestroy of AboutComponent decorated with @Optional;
  4. applied GeneratorService (via useFactory and @Inject) in ngOnInit of AboutComponent;
  5. applied ConstantsService (via useValue and @Inject) in ngOnInit of AboutComponent;
  6. applied ConfigOptionsService in ngOnInit of AboutComponent decorated with @Optional;

- AppModule:
  1. used @ViewChild decorator in AppComponent and ngAfterViewInit lifecycle hook;
