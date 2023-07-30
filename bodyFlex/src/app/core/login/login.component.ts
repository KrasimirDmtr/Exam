import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required,]
  })

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }


  login(): void {
    if (this.loginForm.invalid) {
      return
    }

    const { email, password } = this.loginForm.value;

    this.userService.login(email!, password!).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }


}
