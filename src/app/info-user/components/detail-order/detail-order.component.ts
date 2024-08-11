import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../service/order.service';
import { ActivatedRoute } from '@angular/router';
import { orderDetailResponse } from '../../../entity/orderDetailResponse';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrl: './detail-order.component.css'
})
export class DetailOrderComponent  implements OnInit {

  listOrderDetail = new Array<orderDetailResponse>
  idOrder !: number;
  total =0;

  constructor(private orderService : OrderService, private route : ActivatedRoute){}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(
      params=>{
        if(params['idOrder']){
          this.idOrder =params['idOrder'];
          this.orderService.getOrderDetail(this.idOrder).subscribe(
            data =>{
              this.listOrderDetail = data.result;
              console.log(this.listOrderDetail)

              this.listOrderDetail .forEach(element => {
                this.total = this.total +(element.price*element.quantity);
              });

            }
          )


        }


      }
    )


  }

}
