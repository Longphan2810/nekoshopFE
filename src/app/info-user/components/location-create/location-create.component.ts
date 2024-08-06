import { Component, OnInit } from '@angular/core';
import { LocationCustomerService } from '../../../service/location-customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressDeliveryRequest } from '../../../entity/address-delivery-request';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrl: './location-create.component.css'
})
export class LocationCreateComponent implements OnInit {

  formBuilder = new FormBuilder
  form !: FormGroup

  constructor(private locationService : LocationCustomerService){}

  postAdress(){
   let  addressRequest = new AddressDeliveryRequest(
      this.form.value['city'], this.form.value['address'], this.form.value['status']==null?false:true,
      this.form.value['phone'], this.form.value['name'], LoginService.emailUser
    );
    this.locationService.postAdress(addressRequest).subscribe(
      data=>{
        alert("Luu thanh cong")
      }, error =>{
        alert("luu that bai")
      }
    )

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name :["",Validators.required],
      phone :["",Validators.required],
      city :["",Validators.required],
      address :["",Validators.required],
      status:[""],

    })


  }

}
