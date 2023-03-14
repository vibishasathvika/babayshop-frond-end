import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  login(username:any,pswd:any){
    const body = {
      username,
     pswd
    }
 
    return this.http.post('http://localhost:3000/login',body)
 
   }

   register(username:any,pswd:any){
    const body = {
     username,
     pswd,
     
    }
 
    return this.http.post('http://localhost:3000/register',body)
 
   }


   review(name:any,email:any,message:any){
    const body = {
      name,
      email,
      message
    }
    return this.http.post('http://localhost:3000/review',body)


   }

   getAllProducts(){
    return this.http.get('http://localhost:3000/all-products')
  }  

  getAllreviews(){
    return this.http.get('http://localhost:3000/all-reviews')
  }  

  addToWishlist(product:any){
    const body = {
      id:product.id,
      product:product.product,
      price:product.price,
      description:product.description,
      image:product.image,
      
    }
    return this.http.post('http://localhost:3000/add-to-wishlist',body)

  }

  getWishlist(){
    return this.http.get('http://localhost:3000/get-wishlist')
  }

  deletefrmwishlist(id:any){
    return this.http.delete('http://localhost:3000/delete-item-wishlist/'+id)
 
   }
 

}
