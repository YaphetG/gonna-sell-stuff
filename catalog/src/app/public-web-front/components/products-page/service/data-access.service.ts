import { Injectable } from '@angular/core';
import { ProductModel } from '../models/models';
@Injectable()
export class DataAccessService {

  constructor() { }


  public getProduct(): ProductModel[]{
    return [
      new ProductModel(1,'Shoes', '10/12/2018', 'Kendios', 'www.pics.com/pic1.jpg'),
      new ProductModel(2, 'Cloth', '13/12/2018', 'Mr. Rager', 'www.pics.com/dfodf.jpg'),
      new ProductModel(3, 'Pants', '12/12/2018', 'Plantaeshop', 'junkurl.com'),
      new ProductModel(4, 'Caps', '11/12/2018', 'Awesome shop', 'coolimages.com/image.png')
    ];

  }
  public getProductById (id: string): ProductModel{    
    return  this.getProduct().find( product => product.id == id);
  }
}
