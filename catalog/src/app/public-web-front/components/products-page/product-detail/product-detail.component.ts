import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataAccessService } from '../service/data-access.service';
import {ProductModel } from '../models/models';
import { WishListService } from '../service/wish-list-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel;
  constructor(private route: ActivatedRoute,
              private dataAccessService: DataAccessService,
              private wishListService: WishListService) { }

  ngOnInit() {
    const productId =  this.route.snapshot.paramMap.get('id');
    this.product = this.dataAccessService.getProductById(productId);
  }

  private addToWishListClickHandler(product){
    this.wishListService.addProductToWishList(product);
  }

}
