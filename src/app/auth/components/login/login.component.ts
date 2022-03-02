import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
    })
    title = 'validation';
    constructor(private formBuilder: FormBuilder) {}
    submitted = false;
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      })
    }
    get f(): { [key: string]: AbstractControl } {
      return this.loginForm.controls;
    }
    onSubmit(): void {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      console.log(JSON.stringify(this.loginForm.value, null, 2));
  }
  }
  