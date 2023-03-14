import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  whishList:any
  emsg:string = ''
  cartitemcount:number=0



  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe(
      (data:any)=>{
        this.whishList = data.result
        if(this.whishList.length==0){
          this.emsg = 'empty wishlist'
        }
      },
      (data:any)=>{
         this.emsg = data.error.message
      }
    )

    this.cart.cartItemList.subscribe(
      (data:any)=>{
        if(data){
         this.cartitemcount = data.length
        }
      }
    )
  }
  deletefrmwishlist(product:any){
    this.api.deletefrmwishlist(product.id)
    .subscribe(
      (result:any)=>{
        this.whishList = result.Wishlist
        if(this.whishList.length==0){
          this.emsg = 'empty wishlist'
        }
      },
      (result:any)=>{
        alert(result.error.message)
      }

    )
  }

  addToCart(product:any){
    this.cart.addToCart(product)
    this.deletefrmwishlist(product)
    
  

  }

}
