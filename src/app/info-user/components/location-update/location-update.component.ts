import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationCustomerService } from '../../../service/location-customer.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../service/login.service';
import { DeliveryAddress } from '../../../entity/delivery-address';
import { AddressDeliveryRequest } from '../../../entity/address-delivery-request';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrl: './location-update.component.css'
})
export class LocationUpdateComponent {

  formBuilder = new FormBuilder
  formUpdate !: FormGroup
  idAddress !: number;

  constructor(private locationService : LocationCustomerService,private route: ActivatedRoute){}

  putAdress(){
    let  addressRequest = new AddressDeliveryRequest(
       this.formUpdate.value['city'], this.formUpdate.value['address'], this.formUpdate.value['status']==null?false:true,
       this.formUpdate.value['phone'], this.formUpdate.value['name'], LoginService.emailUser
     );
  
     this.locationService.putAddress(addressRequest,this.idAddress).subscribe(
      
      data => {
        console.log(data)
        alert("Cap nhat thanh cong")
      },error =>{
        alert("cap nhat that  bai")
        console.log(error)
      }


     )

   

    
 
   }


  ngOnInit(): void {

    this.route.queryParams.subscribe(
      params=>{
        if(params['id']){
          this.idAddress = params['id']
          this.locationService.getList(LoginService.emailUser).subscribe(
            data=>{
              let listAddres : DeliveryAddress[] = data.result
              listAddres.forEach(element => {
                if(element.idDeliveryAddress==params['id']){
                  this.formUpdate = this.formBuilder.group({
                    name :[element.name,Validators.required],
                    phone :[element.phone,Validators.required],
                    city :[element.city,Validators.required],
                    address :[element.address,Validators.required],
                    status:[element.status],
              
                  })


                }
              });


            }, error =>{

              this.formUpdate = this.formBuilder.group({
                name :["",Validators.required],
                phone :["",Validators.required],
                city :["",Validators.required],
                address :["",Validators.required],
                status:[""],

            })
            }


          )


        }

      }
    )

    


  }

}
