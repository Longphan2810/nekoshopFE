export class CartRequest {
    idProductDetail !: Number
    constructor(private  emailUser : string, private idProduct : number,
         private size : string,private quantity : number
    ){}

}
