import { Component } from '@angular/core';
import { cartRespone } from '../../../entity/cart-reponse';
import { ShopcartService } from '../../../service/shopcart.service';
import { LoginService } from '../../../service/login.service';
import { CartRequest } from '../../../entity/cart-request';
import { DeliveryAddress } from '../../../entity/delivery-address';
import { LocationCustomerService } from '../../../service/location-customer.service';
import { ProductDetail } from '../../../entity/product-detail';
import { OrderService } from '../../../service/order.service';
import { error } from 'console';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  shopCart = new Array<cartRespone>();
  listAddres = new Array<DeliveryAddress>
  checkCart = new Array<ProductDetail>();
  tong = 0;

 constructor(private orderService : OrderService,private shopcartService : ShopcartService,private locationService : LocationCustomerService){}

  putCart(event : Event){
    if(LoginService.emailUser!=""){
      let inputTag = event.target as HTMLInputElement
      let idProductDetail = Number(inputTag.getAttribute('idProductDetail'))
      let quantity = Number(inputTag.value) 
      let emailUser = LoginService.emailUser

      let cartRequest = new CartRequest(emailUser,0,"",quantity);
      cartRequest.idProductDetail = idProductDetail;

      console.log(cartRequest)

      this.shopcartService.putProductToCard(cartRequest).subscribe(
        data => {
          console.log(data)
          this.fillCart()
        },
        error  => {
          console.log(error)
        }
      )

    }
  
  
   
  }

  postOrder(){
    this.orderService.postOrder(LoginService.emailUser).subscribe(
      data=>{
        console.log(data)
        alert("Dat Hang Thanh Cong")
      }, error  =>{
        alert("Dat Hang Khong Thanh Cong")
      }
    )

  }

  deleteCart(idProductDetail : number){
    if(LoginService.emailUser!=""){
       let emailUser = LoginService.emailUser

       this.shopcartService.DeleteProductToCard(emailUser,idProductDetail).subscribe(
        data => {
          console.log(data)
          this.fillCart()
        },
        error =>{
          console.log(error)
        }
       )

    }

  }

  fillCart(){
    if(LoginService.loggedin==true){
      this.shopcartService.getShopCart().subscribe(
    
        data => {
          this.shopCart = data.result
          this.tong = 0;
          this.shopCart.forEach(element => {
            this.tong += element.price*element.quantity;
          });
          console.log(this.shopCart)
        },
        error =>{
          // console.log(error)
        }
    
      )
      this.shopcartService.getCheckStock().subscribe(
        data=>{
          this.checkCart = data.result
          console.log(this.checkCart)
        },error =>{
          console.log(error)
        }
      )
    
    }
  }

ngOnInit(): void {

  this.locationService.getList(LoginService.emailUser).subscribe(
    data =>  {
      this.listAddres = data.result
    }, error =>{
      console.log(error)
    }


  )

  
  this.fillCart()
    
  }

}
