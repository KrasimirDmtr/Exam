import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.isAuthenticated()
  }

  isAuthenticated() {
    return this.userService.isLogged()
  }

  logOut() {
    return this.userService.signOut().then(() => {
      this.router.navigateByUrl('login')
    })
  }

}
