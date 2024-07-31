import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../../service/shop.service';
import { error } from 'console';
import { Page } from '../../../entity/page';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  products = new Array();

  pageRespone !: Page

  cateName !: string;
  cateForUrl ="";
  keyword: string = '';
  sortBy: string = '';
  filterByPrice: string = '';
  page: number = 0;


  constructor(private route: ActivatedRoute, private shopService: ShopService) { }


  changefilterByPrice(price  : string){

    this.filterByPrice = price;

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      params => {
        this.cateName = params['cate']
        this.keyword = params['keyword']
        this.sortBy = params['sortBy']
        this.filterByPrice = params['filterByPrice']
        this.page = params['page']
        this.cateForUrl= this.cateName ? `cate=${this.cateName}&` : '';
        console.log(this.cateForUrl)
        // fill product by cate
        if (this.cateName) {
          if (this.keyword || this.sortBy || this.filterByPrice || this.page) {
            this.keyword = this.keyword ? this.keyword : ''
            this.sortBy = this.sortBy ? this.sortBy : ''
            this.filterByPrice = this.filterByPrice ? this.filterByPrice : ''
            this.page = this.page ? this.page : 0;
            this.shopService.getListProductByCateAndFilter(this.cateName, this.keyword, this.sortBy, this.filterByPrice, this.page)
              .subscribe(
                data => {

                  this.pageRespone = data.result;
                  this.products = this.pageRespone.content
                  console.log(this.pageRespone)
                },
                error => {
                  console.log(error)
                }

              )
          } else {
            console.log("only cate page ")
            this.shopService.getListProductByCate(this.cateName).subscribe(
              data => {
                this.pageRespone = data.result;
                this.products = this.pageRespone.content
                console.log(this.pageRespone)
              },
              error => {
                console.log(error)
              }

            )
          }

        }
        // fill all product 
        else {
          if (this.keyword || this.sortBy || this.filterByPrice || this.page) {
            this.keyword = this.keyword ? this.keyword : ''
            this.sortBy = this.sortBy ? this.sortBy : ''
            this.filterByPrice = this.filterByPrice ? this.filterByPrice : ''
            this.page = this.page ? this.page : 0;
            this.shopService.getListProductAndFilter( this.keyword, this.sortBy, this.filterByPrice, this.page)
            .subscribe(
              data => {
                this.pageRespone = data.result;
                this.products = this.pageRespone.content
                console.log(this.pageRespone)
              },
              error => {
                console.log(error)
              }

            )



          } else {
            console.log("only cate page ")
            this.shopService.getListProduct().subscribe(
              data => {
                this.pageRespone = data.result;
                this.products = this.pageRespone.content
                console.log(this.products)
                console.log("day ne")
              },
              error => {
                console.log(error)
              }

            )
          }


        }


      }
    )


  }

}
