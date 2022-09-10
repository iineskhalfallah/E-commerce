import { Product } from 'src/app/models/product';
export class Wishlist {
    id:number;
    productId:number
    productName:string
    productImage:string
    price:number

    constructor(id:number,product:Product){
        this.id=id
        this.productId=product.id
        this.productName=product.name
        this.productImage=product.imageUrl
        this.price=product.price
    
    }

}
