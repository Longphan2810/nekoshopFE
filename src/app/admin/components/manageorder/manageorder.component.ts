import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../service/order.service';
import { ActivatedRoute } from '@angular/router';
import { orderDetailResponse } from '../../../entity/orderDetailResponse';
import { error } from 'console';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-manageorder',
  templateUrl: './manageorder.component.html',
  styleUrl: './manageorder.component.css'
})
export class ManageorderComponent implements OnInit{
  constructor(private orderSerivce  : OrderService, private route : ActivatedRoute, private authService : AuthService){}

  listOrderDetail = new Array<orderDetailResponse>
  idOrderCurrent !: number;
  total =0;

ngOnInit(): void {
  this.route.queryParams.subscribe(
    params => {
      if(params['idOrder']){
        this.idOrderCurrent = params['idOrder']
        this.orderSerivce.getOrderDetail(this.idOrderCurrent).subscribe(

          data =>{
            this.listOrderDetail = data.result
            console.log(this.listOrderDetail)

            this.listOrderDetail .forEach(element => {
              this.total += (element.price * element.quantity)
            });


          }, error =>{
            console.log(error)
          }




        )



      }


    }

  )

  this.authService.isAutheticated()



}





}
