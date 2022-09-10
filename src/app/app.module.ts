
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule, NgForm } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductsComponent } from './components/shopping-cart/products/products.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { SliderComponent } from './components/slider/slider.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/products/product-item/product-item.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {SidebarModule}from 'ng-sidebar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UntrovableComponent } from './components/shared/untrovable/untrovable.component';
import { TshirtComponent } from './components/collection/tshirt/tshirt.component';
import { CollectionComponent } from './components/collection/collection.component';
import { JeansComponent } from './components/collection/jeans/jeans.component';
import { PhonecasesComponent } from './components/collection/phonecases/phonecases.component';
import { GlasspaintingComponent } from './components/collection/glasspainting/glasspainting.component';
import { TotebagComponent } from './components/collection/totebag/totebag.component';
import { BrandsComponent } from './components/brands/brands.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { WishlistComponent } from './components/shopping-cart/wishlist/wishlist.component';
import { TshirtItemComponent } from './components/collection/tshirt/tshirt-item/tshirt-item.component';
import { NanaComponent } from './components/brands/nana/nana.component';
import { NanaItemComponent } from './components/brands/nana/nana-item/nana-item.component';
import { PhonecaseItemComponent } from './components/collection/phonecases/phonecase-item/phonecase-item.component';
import { JujutsukaisenComponent } from './components/brands/jujutsukaisen/jujutsukaisen.component';
import { JjkItemComponent } from './components/brands/jujutsukaisen/jjk-item/jjk-item.component';
import { FiltersBrandComponent } from './components/shopping-cart/filters-brand/filters-brand.component';
import { GlassItemComponent } from './components/collection/glasspainting/glass-item/glass-item.component';
import { JeanItemComponent } from './components/collection/jeans/jean-item/jean-item.component';
import { ToteItemComponent } from './components/collection/totebag/tote-item/tote-item.component';
import { DemonslayerComponent } from './components/brands/demonslayer/demonslayer.component';
import { DemonItemComponent } from './components/brands/demonslayer/demon-item/demon-item.component';
import { AotComponent } from './components/brands/aot/aot.component';
import { AotItemComponent } from './components/brands/aot/aot-item/aot-item.component';
import { NarutoComponent } from './components/brands/naruto/naruto.component';
import { NarutoItemComponent } from './components/brands/naruto/naruto-item/naruto-item.component';
import { OtherComponent } from './components/brands/other/other.component';
import { OtherItemComponent } from './components/brands/other/other-item/other-item.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { AllItemComponent } from './components/all-product/all-item/all-item.component';
import { DashbordComponent } from './components/admin/dashbord/dashbord.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { UsersComponent } from './components/admin/users/users.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';
import { EditUsersComponent } from './components/admin/edit-users/edit-users.component';
import { ProdsComponent } from './components/admin/prods/prods.component';
import { TshirtsComponent } from './components/admin/collection/tshirts/tshirts.component';
import { ToteComponent } from './components/admin/collection/tote/tote.component';
import { GComponent } from './components/admin/collection/g/g.component';
import { JComponent } from './components/admin/collection/j/j.component';
import { PhcComponent } from './components/admin/collection/phc/phc.component';
import { NaComponent } from './components/admin/brands/na/na.component';
import { NrComponent } from './components/admin/brands/nr/nr.component';
import { JkComponent } from './components/admin/brands/jk/jk.component';
import { KnyComponent } from './components/admin/brands/kny/kny.component';
import { SnkComponent } from './components/admin/brands/snk/snk.component';
import { OComponent } from './components/admin/brands/o/o.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductsComponent,
    CartComponent,
    SliderComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    UntrovableComponent,
    TshirtComponent,
    CollectionComponent,
    JeansComponent,
    PhonecasesComponent,
    GlasspaintingComponent,
    TotebagComponent,
    BrandsComponent,
    MyaccountComponent,
    WishlistComponent,
    TshirtItemComponent,
    NanaComponent,
    NanaItemComponent,
    PhonecaseItemComponent,
    JujutsukaisenComponent,
    JjkItemComponent,
    FiltersBrandComponent,
    GlassItemComponent,
    JeanItemComponent,
    ToteItemComponent,
    DemonslayerComponent,
    DemonItemComponent,
    AotComponent,
    AotItemComponent,
    NarutoComponent,
    NarutoItemComponent,
    OtherComponent,
    OtherItemComponent,
    AllProductComponent,
    AllItemComponent,
    DashbordComponent,
    AddProductComponent,
    EditProductComponent,
    UsersComponent,
    AddUserComponent,
    UserComponent,
    EditUsersComponent,
    ProdsComponent,
    TshirtsComponent,
    ToteComponent,
    GComponent,
    JComponent,
    PhcComponent,
    NaComponent,
    NrComponent,
    JkComponent,
    KnyComponent,
    SnkComponent,
    OComponent,
    
 

    
    
  
  ],
  imports: [
    CarouselModule ,SidebarModule,ReactiveFormsModule,
    BrowserModule,HttpClientModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
