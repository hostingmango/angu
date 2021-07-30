import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAccountService } from '../services/create-account.service';
import { HttpService } from '../services/http.service';
import { User } from '../user';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;

  message: any;


  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, private httpC: HttpClient) { }

  ngOnInit(): void {
    this.createAccountForm = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      reTypePassword: ['', [
        Validators.required
      ]],
    });
  }
  // registerNow(userData) {
  //   let response = this.services.doRegistration(userData);
  //   response.subscribe((data) => this.message = data)
  // }

  async registerNow(userData) {
    console.log(userData);

    try {
      const registerData = await this.httpService.callApi(
        'post',
        userData,
        '/api/Accounts/InsertUpdateAccounts'
      );

      this.router.navigate([`thank-you/:${userData.email}`]);

    } catch (error) {
      console.log(error);
    }
  }

  goToSignIn() {
    this.router.navigate(['sign-in']);
  }


}
