import { Component, OnInit } from '@angular/core';
import { FinanceuserService }from './financeuser.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-financeuser',
  templateUrl: './financeuser.component.html',
  styleUrls: ['./financeuser.component.css']
})
export class FinanceUserComponent implements OnInit {
  finvalues: any;


  constructor(private fin: FinanceuserService) { 

    
  }

  ngOnInit() {
    this.fin.getFoods().subscribe(data => {
      this.finvalues=data;
      console.log(this.finvalues);
    })
    
  }
   
}