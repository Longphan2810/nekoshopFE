import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../entity/product';
import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products = new Array(6);

  constructor(private productService: ProductService){}

  getList(){

    this.productService.getProducts().subscribe(
      data=>{
        // console.log(data.result)
        // this.products = data.result
        // console.log(data.result[1])
        for (let index = 0; index < data.result.length; index++) {
          if(index==6){
            break;
          }
          this.products.push(data.result[index])
          
        }

      },
      error=>{
        console.log(error.error.code)
        console.log(error.error.message)
      }
    )

  }

  ngOnInit(): void {
    this.getList()
    
  }


}
