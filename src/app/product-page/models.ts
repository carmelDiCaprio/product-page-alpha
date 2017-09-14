

export class ProductMeta{
    name:string;
    details:string;
    price:number;
    constructor({name , details, price}){
        this.name = name;
        this.details = details;
        this.price = price
        // this = Object.assign({name , details ,price}); 
    }
}


export class ProductMetaTwo{
    constructor(public name:string, public details:string, public price:number ){}
}
