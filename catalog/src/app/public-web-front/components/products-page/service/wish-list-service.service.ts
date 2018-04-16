import { Injectable } from '@angular/core';
import { WishListItemModel, ProductModel } from '../models/models';
@Injectable()
export class WishListService {
  private wishList: WishListItemModel;

  constructor() { }

  public getWishListItems(){
    return this.wishList.products;
  }
  public addProductToWishList(product: ProductModel){
    this.wishList = this.wishList || new WishListItemModel([]);
    this.wishList.products.push(product);
  }
}
