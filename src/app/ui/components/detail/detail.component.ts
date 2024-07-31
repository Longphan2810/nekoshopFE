import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../entity/product';
import { error } from 'console';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  product !: Product
  listProduct = new  Array<Product>

  constructor(private productService :ProductService,private route : ActivatedRoute){}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(
      params=>{
        if(params["idProduct"]){
          // get product by id
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
