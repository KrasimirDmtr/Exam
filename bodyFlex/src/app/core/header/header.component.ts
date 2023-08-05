import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private userService: UserService, private router: Router) { }
  auth() { 
    console.log(this.userService.isLoggedIn);
    
    return this.userService.isLoggedIn()
  }

  logOut() {
    this.userService.logOut().then(() => {
      this.router.navigateByUrl('login')
    })
  }
}
