export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    collection:string;
    brands:string;
    constructor(id:number , name: string ,description:string , price:number ,imageUrl:string,
        collection:string,brands:string){
        this.id =id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
        this.collection=collection
        this.brands=brands
    }
}