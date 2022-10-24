import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { //used for initialization on page
  
  a :string = 'praveen' ;
  user:User[] =[];
  b=12;
  name=undefined;
  //age=undefined;
document:any;
d=false;
todaydate =new Date();
money=554644
marks=3/100
mobiles=['Poco','moto','redmi']
  constructor(@Inject(DOCUMENT) document:Document, private objs:TestService) { 
    this.document=document;
    
  }
  ngOnInit(): void {
    
    alert(this.objs.getdate())
    //    alert(a);

  }

 printdata(event:any)
 {
  alert(this.name )


 // alert(this.document.getElementById('doctest').value)
  
 }

 printdata2(event:any){
  alert(this.document.getElementById('doctest').value)

 }
 prntd(){
  alert(this.objs.getdata())
 }


 alrt(event:any){
  alert("ok bro")

 }
 getalluserdata(){
  this.objs.getallusers().subscribe(user=>{this.user=user
    
  })
 }

}
