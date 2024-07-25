export class Product {

    idProduct !: number;
    nameImage !: string;
    
    name !: string;
    price !: number;
    status !: boolean;
    disscount !: number;
    description !: string;
    idCategory !: number;
    file !: File;
    sizeS !: number;
    sizeM !: number;
    sizeL !: number;
    sizeXL !: number;

    constructor(name: string,
        price: number,
        status: boolean,
        disscount: number,
        description: string,
        idCategory: number,
        file: File,
        sizeS: number,
        sizeM: number,
        sizeL: number,
        sizeXL: number,) {


        this.name = name
        this.price = price
        this.status = status
        this.disscount = disscount
        this.description = description
        this.idCategory = idCategory
        this.file = file
        this.sizeS = sizeS
        this.sizeM = sizeM
        this.sizeL = sizeL
        this.sizeXL = sizeXL


    }
}
