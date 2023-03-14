import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import {AllproductsComponent}from './allproducts/allproducts.component'
import { ContactusComponent } from './contactus/contactus.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
     path:'allproducts',component:AllproductsComponent
  },
  {
    path:'contact',component:ContactusComponent
  },
  {
   path:'wishlist',component:WishlistComponent
  },
  {
    path:'addtocart',component:AddtocartComponent
   },
   {
    path:'gallery',component:GalleryComponent
   },
  {
    path:'**',component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
