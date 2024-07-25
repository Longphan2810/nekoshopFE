import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uiadmin',
  templateUrl: './uiadmin.component.html',
  styleUrl: './uiadmin.component.css'
})
export class UiadminComponent  implements OnInit{

  constructor( private  router : Router){}
 activeTab = ""
  ngOnInit(): void {
    console.log(this.router.url.replace("/admin/",""))
    this.activeTab = this.router.url.replace("/admin/","")
   
  }

 

  setActiveTab(nameTab: string) {

    switch (nameTab) {
      case "cate":
        this.activeTab = "cate"
        break;
      case "manageProduct":
        this.activeTab = "manageProduct"
        break;
      case "listProduct":
        this.activeTab = "listProduct"
        break;
        case "manageOrder":
        this.activeTab = "manageOrder"
        break;
      case "listOrder":
        this.activeTab = "listOrder"
        break;
        case "lanageUser":
        this.activeTab = "manageUser"
        break;
      case "listUser":
        this.activeTab = "listUser"
        break;
    }

  }


}
