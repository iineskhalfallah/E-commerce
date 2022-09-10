import { GComponent } from './components/admin/collection/g/g.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { AotComponent } from './components/brands/aot/aot.component';
import { DemonslayerComponent } from './components/brands/demonslayer/demonslayer.component';
import { JujutsukaisenComponent } from './components/brands/jujutsukaisen/jujutsukaisen.component';
import { NanaComponent } from './components/brands/nana/nana.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { NgModule } from "@angular/core";
import { Routes , RouterModule  } from "@angular/router";

import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UntrovableComponent} from "./components/shared/untrovable/untrovable.component"
import { TshirtComponent } from "./components/collection/tshirt/tshirt.component";
import { JeansComponent } from "./components/collection/jeans/jeans.component";
import { PhonecasesComponent } from "./components/collection/phonecases/phonecases.component";
import { GlasspaintingComponent } from "./components/collection/glasspainting/glasspainting.component";
import { TotebagComponent } from "./components/collection/totebag/totebag.component";
import { NarutoComponent } from './components/brands/naruto/naruto.component';
import { OtherComponent } from './components/brands/other/other.component';
import { DashbordComponent } from './components/admin/dashbord/dashbord.component';

import { UsersComponent } from './components/admin/users/users.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';
import { EditUsersComponent } from './components/admin/edit-users/edit-users.component';

import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { ProdsComponent } from './components/admin/prods/prods.component';
import { CollectionComponent } from './components/admin/collection/collection.component';
import { TshirtsComponent } from './components/admin/collection/tshirts/tshirts.component';
import { ToteComponent } from './components/admin/collection/tote/tote.component';
import { JComponent } from './components/admin/collection/j/j.component';
import { PhcComponent } from './components/admin/collection/phc/phc.component';
import { NaComponent } from './components/admin/brands/na/na.component';
import { NrComponent } from './components/admin/brands/nr/nr.component';
import { BrandsComponent } from './components/admin/brands/brands.component';
import { KnyComponent } from './components/admin/brands/kny/kny.component';
import { JkComponent } from './components/admin/brands/jk/jk.component';
import { SnkComponent } from './components/admin/brands/snk/snk.component';
import { OComponent } from './components/admin/brands/o/o.component';


const routes: Routes=[
    {path :'', redirectTo :'/sakura.com',pathMatch:'full'},
    { path :'sakura.com',component:UserComponent},
    { path :'tshirts',component:TshirtComponent},
    { path :'jeans',component:JeansComponent},
    { path :'admin/dashbord',component:DashbordComponent},
    { path :'admin/products',component:ProdsComponent},
    
    { path :'admin/collection',component:CollectionComponent},
    { path :'admin/collection/glasspaintings',component:GComponent},
    { path :'admin/collection/totebags',component:ToteComponent},
    { path :'admin/collection/t-shirts',component:TshirtsComponent},
    { path :'admin/collection/phonecases',component:PhcComponent},
    { path :'admin/collection/jeans',component:JComponent},

    { path :'admin/brands',component:BrandsComponent},
    { path :'admin/brands/nana',component:NaComponent},
    { path :'admin/brands/naruto',component:NrComponent},
    { path :'admin/brands/demonslayer',component:KnyComponent},
    { path :'admin/brands/jujutsukaisen',component:JkComponent},
    { path :'admin/brands/attackontitan',component:SnkComponent},
    { path :'admin/brands/other',component:OComponent},
    
    { path :'admin/addproduct',component:AddProductComponent},
    { path: 'admin/editproduct/:id',component:EditProductComponent},
    { path :'admin/editusers/:id',component:EditUsersComponent},
    { path :'phonecases',component:PhonecasesComponent},
    { path :'glasspaintings',component:GlasspaintingComponent},
    { path :'totebags',component:TotebagComponent},
    { path :'nana',component:NanaComponent},
    {path :'login' ,component: LoginComponent },
    {path :'register' ,component: RegisterComponent },
    {path :'shop' , component : ShoppingCartComponent },
    {path:'myaccount',component:MyaccountComponent},
    {path:'phoneCases',component:PhonecasesComponent},
    {path:'jujutsukaisen',component:JujutsukaisenComponent},
    {path:'demonSlayer',component:DemonslayerComponent},
    {path:'aot',component:AotComponent},
    {path:'naruto',component:NarutoComponent},
    {path:'other',component:OtherComponent},
    {path:'allProduct',component:AllProductComponent},
    {path:'admin/users',component:UsersComponent},
    
    {path:'admin/adduser',component:AddUserComponent},
    {path:'**' ,component:UntrovableComponent}
]   

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}