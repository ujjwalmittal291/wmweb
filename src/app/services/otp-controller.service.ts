import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtpControllerService {
  private finaldata = [];
  private apiurl = "https://test.dikshatech.com/user-services/v1/wm/otp/get/${mdn}";
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiurl);
  }
}
