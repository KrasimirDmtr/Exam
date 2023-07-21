import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { matchPassValidator } from 'src/app/shared/validators/match-pass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        repeatPassword: ['', [Validators.required]],
      },
      {
        validators: [matchPassValidator("password", "repeatPassword")]
      }
    ),
  })
  constructor(private fb: FormBuilder) { }


  handleSubmit() {
    console.log(this.registerForm.get('email'));
  }
}
