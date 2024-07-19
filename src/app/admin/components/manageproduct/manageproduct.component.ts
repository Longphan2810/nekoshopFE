import { Component } from '@angular/core';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrl: './manageproduct.component.css'
})
export class ManageproductComponent {

  srcImage="/img/noImage.jpg";

  SelectedFile !: File

  changeImage(event : Event){
    let input = event.target as HTMLInputElement;
    if(input.files){
    console.log(input.files[0])
    this.srcImage = URL.createObjectURL(input.files[0]);
  } 

  }
  



}
