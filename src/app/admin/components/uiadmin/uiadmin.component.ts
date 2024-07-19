import { Component } from '@angular/core';

@Component({
  selector: 'app-uiadmin',
  templateUrl: './uiadmin.component.html',
  styleUrl: './uiadmin.component.css'
})
export class UiadminComponent {

  activeTab = "cate"

  setActiveTab(nameTab: string) {

    switch (nameTab) {
      case "cate":
        this.activeTab = "cate"
        break;
      case "ManageProduct":
        this.activeTab = "ManageProduct"
        break;
      case "ListProduct":
        this.activeTab = "ListProduct"
        break;
        case "ManageOrder":
        this.activeTab = "ManageOrder"
        break;
      case "ListOrder":
        this.activeTab = "ListOrder"
        break;
        case "ManageUser":
        this.activeTab = "ManageUser"
        break;
      case "ListUser":
        this.activeTab = "ListUser"
        break;
    }

  }


}
