import { Component, OnInit } from '@angular/core';
import { LocationCustomerService } from '../../../service/location-customer.service';
import { DeliveryAddress } from '../../../entity/delivery-address';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {

  listAddres = new Array<DeliveryAddress>

  constructor(private locationService : LocationCustomerService){}


  ngOnInit(): void {
    
    this.locationService.getList(LoginService.emailUser).subscribe(
      data =>  {
        this.listAddres = data.result
      }, error =>{
        console.log(error)
      }


    )

  }

}
