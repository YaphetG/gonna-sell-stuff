import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../service/data-access.service';
import { ProductModel } from '../models/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel [];

  
  constructor(private dataAccessService: DataAccessService) {}

  ngOnInit() {
    this.products = this.dataAccessService.getProduct();
  }

}
