import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(private readonly appService: AppService){}

  total: any;

  async ngOnInit() {
    this.appService.getTotal().subscribe(total =>{
      this.total = total;
      console.log(total);
    });
  }
}