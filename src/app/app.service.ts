import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  http = inject(HttpClient)
  items: any;
  itemsInCart: Item[] = [];
  private total: BehaviorSubject<number> = new BehaviorSubject<number>(0.00);

  async getItems() {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}/groceries`))
    this.items = result;
    return this.items;
  }

  addToCart = (item: any) => {
    const IsInCart = this.itemsInCart.findIndex((i: any) => i.id === item.id)
    if (IsInCart === -1){
      const toCart = item
      toCart.quantity = 1
      this.itemsInCart.push(toCart)
    } else {
      this.itemsInCart[IsInCart].quantity++
    }
    this.cartTotal();
  }

  removeFromCart = (item: any) => {
    const IsInCart = this.itemsInCart.findIndex((i: any) => i.id === item.id)
    if (IsInCart === -1){
      console.log('Nothing to remove')
    } else {
      this.itemsInCart[IsInCart].quantity--
      if (this.itemsInCart[IsInCart].quantity <= 0) {
        this.itemsInCart.splice(IsInCart, 1)
      }
    }
    this.cartTotal();
  }

  cartTotal = () => {
    let newTotal: number = 0;
    this.itemsInCart.forEach((item: Item) => {
      newTotal += item.price * item.quantity
    });
    this.total.next(newTotal);
  }

  getTotal(): Observable<number>{
    return this.total.asObservable();
  }
}
