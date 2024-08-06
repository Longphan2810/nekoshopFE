import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { ShopcartService } from '../../../service/shopcart.service';
import { cartRespone } from '../../../entity/cart-reponse';
import { CartRequest } from '../../../entity/cart-request';
import { error } from 'console';
import { ProductDetail } from '../../../entity/product-detail';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css'
})
export class ShopingCartComponent  implements OnInit {

  shopCart = new Array<cartRespone>();
  checkCart = new Array<ProductDetail>();
  tong = 0;

 constructor(private shopcartService : ShopcartService){}

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
  
  this.fillCart()
    
  }

}


