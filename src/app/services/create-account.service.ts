import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient) { }

  // doRegistration(user: any) {
  //   return this.http.post("http://20.84.144.176/api/Accounts/InsertUpdateAccounts", user);
  // }
}
