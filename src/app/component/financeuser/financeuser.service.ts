import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class FinanceuserService {
 
  constructor(private financehttp: HttpClient) { 
 
  }
  getFoods() {
    return this.financehttp.get('http://172.16.2.115:7070/admin/v1/windmill/Payments/')
  }
}