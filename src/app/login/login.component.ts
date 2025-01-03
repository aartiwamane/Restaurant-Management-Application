import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit 
{
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router ) { }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  logIn() 
  {
    console.log(this.loginForm.value);
          alert("Marvellous" + ' logged in successfully');
          this._router.navigate(['/restaurent']);
          this.loginForm.reset();    
  }
}
