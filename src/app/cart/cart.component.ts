import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private readonly appService: AppService){}

  itemsInCart: Item[] = this.appService.itemsInCart;
}
