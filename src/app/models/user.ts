export class User {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
    role:string;
    
    constructor(id:number , name: string ,lastname:string , email:string ,password:string
        ,role: string){
        this.id =id
        this.name = name
        this.lastname =lastname
        this.email = email
        this.password=password
        this.role=role
        
    }
}
