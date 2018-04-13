import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductCardComponent } from './components/products-page/product-card/product-card.component';
import { DataAccessService } from './components/products-page/service/data-access.service';
import { ProductListComponent } from './components/products-page/product-list/product-list.component';
import { ProductDetailComponent } from './components/products-page/product-detail/product-detail.component';
import { RouterModule, Routes} from '@angular/router';
const productRoutes: Routes = [
  { 
    path: '',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
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
  declarations: [MenuComponent, ProductsPageComponent, ProductCardComponent, ProductListComponent, ProductDetailComponent],
  providers:[
    DataAccessService
  ],
  exports:[
    ProductsPageComponent
  ]

})
export class PublicWebFrontModule { }
