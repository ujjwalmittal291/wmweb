import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  signupForm1: FormGroup;
  formBuilder: FormBuilder
  mobilenumber = new FormControl('');
  public sendOTPobj: any = {
    "mdn": "string",
    "otp": 0
  };
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signupForm1 = new FormGroup({
      mobilenumber: this.mobilenumber
    });
  }
  // check:(num:string)=>void = function(num:string):void {
  // if (isNumber(num)) {
  // console.log(num);
  // return true;
  // }
  onSubmit() {
    this.submitted = true;
    if (this.signupForm1.invalid) {
      return;
    }
    console.log("onsubmit....", this.getPwdControls.mobilenumber.value);
    this.router.navigate(['/inputotp']);
    const mobileObj: any = {
      mdn: this.mobilenumber.value,
      otp: "1234"
    }
    this.http.post('https://test.dikshatech.com/windmill/user-services/v1/wm/guest/otp/send', mobileObj).subscribe((success) => {
      console.log("success...", success);
    })
  }

  get getPwdControls() {
    return this.signupForm1.controls;
  }
}