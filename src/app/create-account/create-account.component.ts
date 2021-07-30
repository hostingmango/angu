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


  constructor(private httpService: HttpService, private services: CreateAccountService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    [
      this.createAccountForm = this.fb.group({
        firstName: ['', [
          Validators.required
        ]],
        lastName: ['', [
          Validators.required
        ]],
        email: ['', [
        ]],
        password: ['', [
          Validators.required
        ]],
        reTypePassword: ['', [
          Validators.required
        ]],
      })


    ]
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
      console.log(registerData, "kkk");
    } catch (error) {
      console.log(error);
    }
  }

  goToSignIn() {
    this.router.navigate(['sign-in'])
  }


}
