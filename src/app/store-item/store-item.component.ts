import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { AppService } from '../app.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
  constructor(private readonly appService: AppService){}
  @Input('item') item: Item | null = null;

  addToCart = (item: any) => {
    this.appService.addToCart(this.item);
  }
}
