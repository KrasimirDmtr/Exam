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
    password: ['', [Validators.required, Validators.minLength(6), matchPassValidator("password", "repeatPassword")]],
    repeatPassword: ['', [Validators.required, matchPassValidator("password", "repeatPassword")]]
  })
  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { }

  register() {
    const userData = Object.assign(this.regForm.value)
    console.log(userData);

    this.userService.registerWithEmailAndPassword(userData).then((res: any) => {
      this.route.navigateByUrl('login');
    }).catch((error: any) => {
      console.error(error);
    })
  }
}
