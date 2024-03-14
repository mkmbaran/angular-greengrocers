import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  constructor(private readonly appService: AppService){}
  @Input('itemInCart') itemInCart: Item | null = null;

  quantity: number = 1;

  addQuantity = () => {
    this.quantity++;
    this.appService.addToCart(this.itemInCart);
  }

  removeQuantity = () => {
    this.quantity--;
    this.appService.removeFromCart(this.itemInCart);
    }
  }
