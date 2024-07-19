import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../entity/category';
import { error } from 'console';
import { catchError, empty, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrl: './managecategory.component.css'
})
export class ManagecategoryComponent implements OnInit {

  listCate = new Array<Category>();

  nameSearch !: String;

  idCategory  !: number;
  nameCategory !: String;


  constructor(private categoryService: CategoryService) { }

  getListCate() {
    this.categoryService.getListCate().subscribe(
      data => { this.listCate = data.result },
      error => { console.log(error) }

    )
  }

  // code func edit 

  getEdit(cate: Category) {
    this.idCategory = cate.idCategory;
    this.nameCategory = cate.name;

  }

  // save cate  
  postCate() {

    let cate = new Category(this.nameCategory);
    this.categoryService.postCate(cate).subscribe(
      data => {
        console.log('Success code:', data.code);
        this.getListCate()
      },
      error => {
        console.log('error code:', error.error.code);
        console.log('error code:', error.error.message);
      }

    )

    this.getRefresh()
   
  }

  // put cate
  putCate() {
    let cate = new Category(this.nameCategory);
    cate.idCategory = this.idCategory!=null?this.idCategory:0;
    this.categoryService.putCate(cate).subscribe(
      data => { console.log(data.code) 
        this.getListCate()
      },
      error => {
        console.log(error.error.code)
        console.log(error.error.message)
      }
    )
    this.getRefresh()
    

  }

  // delete cate
  deleteCate(idCategory : number){
    
    this.categoryService.deleleCate(idCategory).subscribe(
      data=>{
        console.log(data.code)
      },
      error=>{
        console.log(error.error.code)
        console.log(error.error.message)
      }

    )
    this.getRefresh()
    this.getListCate()
  }

  // refresh form 

  getRefresh() {
    this.idCategory = 0;
    this.nameCategory = "";
  }

  // search category  by name

  getListByName(){

    this.categoryService.getListCateByName(this.nameSearch).subscribe(
      data=>{
        this.listCate= data.result
        console.log(data.result)
        console.log(data.code)
      },
      error=>{
        console.log(error.error.code)
        console.log(error.error.message)
      }

    )

  }

  ngOnInit(): void {
    this.getListCate()
  }

}
