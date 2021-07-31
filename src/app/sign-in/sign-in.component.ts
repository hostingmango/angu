import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, private httpC: HttpClient) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',
        [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      ],
      password: ['', [
        Validators.required,
      ]],
    });
  }

  async logInNow(userData) {
    console.log(userData);
    try {
      const logInData = await this.httpService.callApi(
        'post',
        userData,
        '/api/Accounts/GetUserLoginList'
      );
      this.router.navigate([`thank-you/:${userData.email}`]);
    } catch (error) {
      console.log(error);
    }
  }


}