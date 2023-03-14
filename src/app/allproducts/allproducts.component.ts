import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  allproducts:any = []
  allreviews:any = []
  searchKey:string="";
  cartitemcount:number=0




  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (data:any)=>{
        this.allproducts = data.result
        console.log(this.allproducts);
        

      }
    )



    this.api.getAllreviews().subscribe(
      (data:any)=>{
        this.allreviews = data.result
        console.log(this.allreviews);
        

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

  search(event:any){
    this.searchKey = event.target.value
    console.log(this.searchKey);
    
  }
  addToWishlist(product:any){
    this.api.addToWishlist(product).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
    //addToCart
    addToCart(product:any){
      this.cart.addToCart(product)

    }
 

}
