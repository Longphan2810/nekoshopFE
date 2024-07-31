import { Product } from "./product"

export class Page {
        totalElements: number = 0
        totalPages: number =  0
        size: number =0
        number : number =0
        content!: Product[]

        constructor( totalElements : number,totalPages: number,size:number,number:number,content: Product[]){
            this.totalElements = totalElements;
            this.totalPages = totalPages;
            this.size = size;
            this.content = content;
            this.number = number;
        }
}
