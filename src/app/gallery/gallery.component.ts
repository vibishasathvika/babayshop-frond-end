import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  cartitemcount:number=0


  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartItemList.subscribe(
      (data:any)=>{
        if(data){
         this.cartitemcount = data.length
        }
      }
    )
  }

}
