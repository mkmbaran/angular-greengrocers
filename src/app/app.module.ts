import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { TotalComponent } from './total/total.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent, CartComponent, StoreComponent, TotalComponent, StoreItemComponent, CartItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
