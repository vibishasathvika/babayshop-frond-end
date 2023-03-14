import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  reviewForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    message:['',[Validators.required]]
  
   })
   emsg=""
   cartitemcount:number=0


  constructor(private fb:FormBuilder,private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartItemList.subscribe(
      (data:any)=>{
        if(data){
         this.cartitemcount = data.length
        }
      }
    )
  }

  review(){ 
    //console.log(this.reviewForm.get('name')?.errors);
    
    if(this.reviewForm.valid){
      let name =this.reviewForm.value.name
      let email =this.reviewForm.value.email
      let message =this.reviewForm.value.message
      this.api.review(name,email,message)
      .subscribe((result:any)=>{
        console.log(result);
        alert(result.message)
        this.reviewForm.reset()
        
      },
      (result:any)=>{
        this.emsg = result.error.message
      }
      )
      }
    else{
      alert('invalid form')
    }
   
    
  }
 

}
