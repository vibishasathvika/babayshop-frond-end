import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartaitemArray:any=[]
  cartItemList = new BehaviorSubject([])

  constructor() { }

  // add to cart
  addToCart(product:any){
    this.cartaitemArray.push(product)
    this.cartItemList.next(this.cartaitemArray)
    console.log(this.cartItemList);
    let total = this.getTotal()
    console.log(total);
    

  }

  getTotal(){
    let grantsum =0
    this.cartaitemArray.map((item:any)=>{
      grantsum += item.price
    })
    return grantsum
  }

  removeCartItem(product:any){
    this.cartaitemArray.map((item:any,index:any)=>{
      if(product.id === item.id){
        this.cartaitemArray.splice(index,1)
      }
    })
    this.cartItemList.next(this.cartaitemArray)
  
  
  }

  removeallitems(){
    this.cartaitemArray = []
    this.cartItemList.next(this.cartaitemArray)
   }
}
