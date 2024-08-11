import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../entity/product';
import { error } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopService } from '../../../service/shop.service';
import { cartRespone } from '../../../entity/cart-reponse';
import { CartRequest } from '../../../entity/cart-request';
import { LoginService } from '../../../service/login.service';
import { ShopcartService } from '../../../service/shopcart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  product !: Product
  listProduct = new  Array<Product>
  idProduct !: number;
  formProductDetail !: FormGroup
  formBuilder = new FormBuilder



  constructor(private productService :ProductService,private shopCartService : ShopcartService,private route : ActivatedRoute){}


  postCart(){
    if(LoginService.emailUser!=""&&LoginService.loggedin!=false){
     let cartRequest = new CartRequest(LoginService.emailUser,this.idProduct,this.formProductDetail.value['size'],this.formProductDetail.value['quantity'])

     this.shopCartService.postProductToCard(cartRequest).subscribe(

      data=>{
        alert("Đã thêm vào giỏ hàng !");
        console.log(data)
      },
      error =>{
        console.log(error)
        if(error.status==401){
          window.location.assign("/user/login")
        }
      }
     )
      console.log(cartRequest)

    }

  }

  ngOnInit(): void {

    this.formProductDetail = this.formBuilder.group({
      size:['',Validators.required],
      quantity:['',[Validators.required,Validators.min(1)]]

    })


    
    this.route.queryParams.subscribe(
      params=>{
        if(params["idProduct"]){
          // get product by id
          this.idProduct = params["idProduct"]
          this.productService.getProduct(params["idProduct"]).subscribe(
            data=> {
              this.product =  data.result;
              console.log(this.product)
            }, 
            error =>{
              console.log(error)
            }
          )
          // get list product
          this.productService.getProducts().subscribe(
            data  => {


              for (let index = 0; index < data.result.length; index++) {
                if(index==3){
                  break;
                }
                this.listProduct.push(data.result[index])
                
              }
              
              console.log(this.listProduct)
           
            },
            error =>{
              console.log(error)
            }
          )


        }
      }
    )

  }
}
