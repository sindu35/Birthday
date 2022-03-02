import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ConfirmValidation } from '../confirm-validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
    })
    title = 'validation';
    constructor(private formBuilder: FormBuilder) {}
    submitted = false;
    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        username : ['',Validators.required],
        mobilenumber:['',[Validators.required,Validators.minLength(10)]],
        confirmPassword :['',Validators.required]
      },
      {validators:[ConfirmValidation.match('password', 'confirmPassword')]}
      )
    }
    get f(): { [key: string]: AbstractControl } {
      return this.registerForm.controls;
    }
    onSubmit(): void {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      console.log(JSON.stringify(this.registerForm.value, null, 2));
  }
  
  }
  