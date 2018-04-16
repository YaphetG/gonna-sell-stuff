import { Component, OnInit } from '@angular/core';
import { WishListService } from '../service/wish-list-service.service';
@Component({
  selector: 'app-wish-list-component',
  templateUrl: './wish-list-component.component.html',
  styleUrls: ['./wish-list-component.component.css']
})
export class WishListComponent implements OnInit {

  private products;

  constructor(private wishListService: WishListService) { }

  ngOnInit() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Found");
    this.products = this.wishListService.getWishListItems();
  }

}
