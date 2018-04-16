import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductCardComponent } from './components/products-page/product-card/product-card.component';
import { DataAccessService } from './components/products-page/service/data-access.service';
import { WishListService } from './components/products-page/service/wish-list-service.service';
import { ProductListComponent } from './components/products-page/product-list/product-list.component';
import { ProductDetailComponent } from './components/products-page/product-detail/product-detail.component';
import { RouterModule, Routes} from '@angular/router';
import { WishListComponent } from './components/products-page/wish-list-component/wish-list-component.component';
const productRoutes: Routes = [
  { 
    path: '',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products-wish-list',
    component: WishListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      productRoutes,
      {enableTracing: true}
    )
  ],
  declarations: [MenuComponent, ProductsPageComponent, ProductCardComponent, ProductListComponent, ProductDetailComponent, WishListComponent],
  providers:[
    DataAccessService,
    WishListService
  ],
  exports:[
    ProductsPageComponent
  ]

})
export class PublicWebFrontModule { }
