import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from '../../../entity/category';
import { CategoryService } from '../../../service/category.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../entity/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrl: './manageproduct.component.css'
})
export class ManageproductComponent implements OnInit {

  constructor( private cateService : CategoryService, private productServie : ProductService,
              private formBuilder : FormBuilder, private router : ActivatedRoute
  ){}

  productForm !: FormGroup
   
  selectedFile !: File;

  hidenIdProduct !: number;

  listCate !: Category[];

  srcImage="/img/noImage.jpg";

  hostingImg = "http://localhost:8080/images/"

  changeImage(event : Event){
    const input = event.target as HTMLInputElement;

    if(input.files){
      console.log(input.files[0])
      this.selectedFile = input.files[0]
      this.srcImage = URL.createObjectURL(input.files[0])
      
    }


  }
// submit form 

  postForm(){

   let product = new Product(
    this.productForm.value.name,
    this.productForm.value.price,
    this.productForm.value.status,
    this.productForm.value.disscount,
    this.productForm.value.description,
    this.productForm.value.idCategory,
    this.productForm.value.imageFile,
    this.productForm.value.sizeS,
    this.productForm.value.sizeM,
    this.productForm.value.sizeL,
    this.productForm.value.sizeXL
   )

   console.log(product)

   this.productServie.postProduct2(product,this.selectedFile).subscribe(
    data=>{
      console.log(data)
      alert("Thêm sản phẩm thành  công !")
      window.location.assign("http://localhost:4200/admin/manageProduct")
    },
    error=> {
      console.log(error.error.code)
      console.log(error.error.message)
      alert("Thêm Sản phẩm thất bại , Lỗi : " +error.error.message )
    }

   )


  }

  // put form 
  putForm(){

    let product = new Product(
     this.productForm.value.name,
     this.productForm.value.price,
     this.productForm.value.status=="true"?true:false,
     this.productForm.value.disscount,
     this.productForm.value.description,
     this.productForm.value.idCategory,
     this.productForm.value.imageFile,
     this.productForm.value.sizeS,
     this.productForm.value.sizeM,
     this.productForm.value.sizeL,
     this.productForm.value.sizeXL
    )
    console.log( this.productForm.value.status=="true"?true:false)
   
 
    this.productServie.putProduct(this.hidenIdProduct,product,this.selectedFile).subscribe(
     data=>{
       console.log(data)
       alert("Cập nhật thành công !")
       window.location.assign("http://localhost:4200/admin/manageProduct")
     },
     error=> {
       console.log(error.error.code)
       console.log(error.error.message)
       alert("Cập nhật Thất bại !")
     }
 
    )
 
 
   }

  fillDataCategory(){

    this.cateService.getListCate().subscribe(

      data=>{
        this.listCate = data.result
        
       
      },
      error=>{
        console.log(error.error.code)
        console.log(error.error.message)
         
      }

    )


  }


  
ngOnInit(): void {
  this.fillDataCategory()

  this.productForm = this.formBuilder.group({
    name:['',Validators.required],
    price:['',[Validators.required,Validators.min(0)]],
    disscount:['',[Validators.required,Validators.min(0)]],
      sizeS: ['', [Validators.min(0),Validators.required]],
      sizeM: ['', Validators.min(0)],
      sizeL: ['', Validators.min(0)],
      sizeXL: ['', Validators.min(0)],
      idCategory: ['', Validators.required],
      status: [, Validators.required],
      description: [''],
      imageFile: ['']

  })

  this.router.params.subscribe(
    param =>{
      let idProduct = param['id']
      let product !: Product ;
      
      if(idProduct!= undefined){
        this.productServie.getProduct(idProduct).subscribe(
          data=>{product = data.result ;
                console.log(data.result)
                this.productForm = this.formBuilder.group({
                  name:[product.name,Validators.required],
                  price:[product.price,[Validators.required,Validators.min(0)]],
                  disscount:[product.disscount,[Validators.required,Validators.min(0)]],
                    sizeS: [product.sizeS, [Validators.min(0),Validators.required]],
                    sizeM: [product.sizeM, Validators.min(0)],
                    sizeL: [product.sizeL, Validators.min(0)],
                    sizeXL: [product.sizeXL, Validators.min(0)],
                    idCategory: [product.idCategory, Validators.required],
                    status: [product.status, Validators.required],
                    description: [product.description],
                    imageFile: ['']
              
                })
                this.srcImage=this.hostingImg+product.nameImage;
                this.hidenIdProduct = product.idProduct;
          }

        )
        
        


      }
    
    }

  )


  
}


}
