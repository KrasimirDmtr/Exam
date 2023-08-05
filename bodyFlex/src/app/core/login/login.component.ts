import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
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

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { }
  loginWithEmailAndPass() {
    const userData = Object.assign(this.loginForm.value)
    this.userService.signInWithEmailAndPassword(userData).then((res: any) => {
      this.route.navigateByUrl('home');
    }).catch((error: any) => {
      console.error(error);
    })
  }

}
