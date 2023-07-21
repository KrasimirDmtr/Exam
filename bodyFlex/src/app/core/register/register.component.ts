import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required,],
    repeatPassword: ['', Validators.required,]
  })
  constructor(private fb: FormBuilder) { }


  handleSubmit() {

  }
}
