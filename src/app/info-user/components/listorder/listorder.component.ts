import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { OrderService } from '../../../service/order.service';
import { Order } from '../../../entity/order';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrl: './listorder.component.css'
})
export class ListorderComponent implements OnInit{

  listOrder = new Array<Order>;

  constructor(private orderSerivce  : OrderService){}

ngOnInit(): void {
    
  if(LoginService.emailUser!=""){
    this.orderSerivce.getOrder(LoginService.emailUser).subscribe(
      data => {
        this.listOrder = data.result
        console.log(this.listOrder)
      }
    )

  }

}

}
