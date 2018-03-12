import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  username: string;
  password: string;
  authToken:any;
  email:string;

  formError: string;
  submitting = false;
  loading = false;


  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    alert('work')
  }

}
