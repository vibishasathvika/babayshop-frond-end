import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  cartItems:any=[]
  total=0
  grantTotal:any=0
  updatedtotal:any=0
  cartitemcount:number=0





  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartItemList.subscribe(
      (data)=>{
        console.log(data);
        this.cartItems=data
        
      }
    )
    this.total= this.cart.getTotal()
    this.grantTotal = this.total.toFixed(2)


    this.cart.cartItemList.subscribe(
      (data:any)=>{
        if(data){
         this.cartitemcount = data.length
        }
      }
    )
   
  }
  removeItem(product:any){
    this.cart.removeCartItem(product)
    this.total= this.cart.getTotal()
    this.grantTotal = this.total.toFixed(2)
  }

  removeallitems(){
    this.cart.removeallitems()
  }

  discount3per(){
    let discount = (this.grantTotal *3)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }

  discount5per(){
    let discount = (this.grantTotal *5)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }
  discount30per(){
    let discount = (this.grantTotal *30)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }
  discount50per(){
    let discount = (this.grantTotal *50)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }
  proceed(){
    alert('order placed successfully')
    this.removeallitems
    this.router.navigateByUrl('allproducts')
  }

}
