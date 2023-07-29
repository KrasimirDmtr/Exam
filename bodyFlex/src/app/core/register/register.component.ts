import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { DEFAULT_DOMAINS } from 'src/app/shared/domains';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchPassValidator } from 'src/app/shared/validators/match-pass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm = this.fb.group({
    email: ['', Validators.required, emailValidator(DEFAULT_DOMAINS)],
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
    console.log(this.regForm.get('email'));
  }
}
