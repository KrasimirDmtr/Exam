import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DEFAULT_DOMAINS } from 'src/app/shared/domains';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchPassValidator } from 'src/app/shared/validators/match-pass';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm = this.fb.group({
    email: ['', emailValidator(DEFAULT_DOMAINS)],
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
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }


  register(): void {
    if (this.regForm.invalid) {
      return
    }

    const {
      email, passGroup: { password, repeatPassword } = {}
    } = this.regForm.value;
    this.userService
      .register(email!, password!, repeatPassword!)
      .subscribe(() => {
        this.router.navigate(['/home'])
        console.log(this.regForm.value);
      })
  }
}
