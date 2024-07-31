import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../entity/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  @Input() product !: Product;

  ngOnInit(): void {
    
  

  }

}
