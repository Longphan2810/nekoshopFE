import { Component, OnInit } from '@angular/core';
import { Order } from '../../../entity/order';
import { OrderService } from '../../../service/order.service';
import { error } from 'console';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrl: './listorder.component.css'
})
export class ListorderComponent  implements OnInit {
  listOrder = new Array<Order>;

  constructor(private orderSerivce  : OrderService){}

  idFind !: number;

  findOrder(){

    if(this.idFind){
    this.orderSerivce.getOrderById(this.idFind).subscribe(
      data => {
        this.listOrder = data.result
        console.log(this.listOrder)
      }, error=>{
        console.log(error)
    
      }
      
    )
  }
  }

  fillTable(){
    this.orderSerivce.getOrderAll().subscribe(
      data => {
        this.listOrder = data.result
        console.log(this.listOrder)
      }, error=>{
        console.log(error)
    
      }
    
    )
  }

ngOnInit(): void {
  this.fillTable()

}

}
