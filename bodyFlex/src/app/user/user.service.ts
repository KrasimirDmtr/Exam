import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { BehaviorSubject } from 'rxjs';
import { appUrl } from '../core/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any;
  constructor(private afAuth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user.email
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!); 
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!)
      }
    })
  }

  isLogged() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null
  }

  registerWithEmailAndPassword(user: { email: string, password: string }) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);

  }
  signInWithEmailAndPassword(user: { email: string, password: string }) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    })
  }


}
