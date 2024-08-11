export class UserResponse {

    constructor(
        public idUser : string,
        public email : string,
        public birthday : Date,
        public phone : number,
        public gender : boolean,
        public location : string,
        public name : String,
        public role : boolean,
        public status : String

    ){}
}
