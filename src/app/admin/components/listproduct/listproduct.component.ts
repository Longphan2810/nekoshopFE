import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../entity/product';
import { Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent implements OnInit {

  constructor(private  productService: ProductService,private router : Router){}

  Products !: Product[];

  nameNeedFind !: string;

  editProduct(idProduct : number){
    this.router.navigate(["/admin/manageProduct",idProduct]).then(()=>{
      window.location.reload();
    })
  }

  getFindByName(){
    this.productService.getProductsByName(this.nameNeedFind).subscribe(
      data=>{
        console.log(data);
        this.Products = data.result
      } ,
      error =>{
        console.log(error.error.code)
        console.log(error.error.message)

      }
    )
  }

  getProducts(){

    this.productService.getProducts().subscribe(
      data=>  {
          // console.log(data.result) 
          this.Products = data.result
      },
      error => {
        console.log(error.error.code)
        console.log(error.error.message)
        
      }
    )


  }
  ngOnInit(): void {
    this.getProducts()
  }

}
