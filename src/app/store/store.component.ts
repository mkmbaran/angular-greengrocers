import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private readonly appService: AppService){}

  items: Item[] = [];
  onlyVeggiesNotFruit: boolean = false;

  async ngOnInit() {
    this.items = await this.appService.getItems();
    this.filterItems();
  }

  toggleVeggiesNotFruit = () => {
    this.onlyVeggiesNotFruit = !this.onlyVeggiesNotFruit;
    this.filterItems();
  }

  async filterItems() {
    if (this.onlyVeggiesNotFruit){
      this.items = (await this.appService.getItems()).filter(
        (item: any) => item.type === 'vegetable'
      )
    }
    if (!this.onlyVeggiesNotFruit){
      this.items = (await this.appService.getItems()).filter(
        (item: any) => item.type === 'fruit'
      )
    }
  }
}
