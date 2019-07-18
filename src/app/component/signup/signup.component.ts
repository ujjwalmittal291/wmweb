import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let num:any;
  }
  check:(num:string)=>void = function(num:string):void {
    // if (isNumber(num)) {
      console.log(num);
      // return true;
    // }
  }
  

}
