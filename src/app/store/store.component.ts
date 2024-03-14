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

  async ngOnInit() {
    this.items = await this.appService.getItems();
  }
}
