export class AddressDeliveryRequest {


    constructor(
    public city: string,
    public address : string,
    public status : boolean,
    public phone : number,
    public name : string,
    public mailUserCurrent : string
    ){}

}
