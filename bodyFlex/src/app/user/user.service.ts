import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/User';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { appUrl } from '../core/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';
  get isLogged(): boolean {
    return !!this.user;
  }
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
    
  }

  headers = new HttpHeaders({
  })
  register(
    email: string,
    password: string,
    repeatPassword: string,
  ) {
    return this.http.post<User>(`${appUrl}/register.json`, {
      email, password, repeatPassword
    })
      .pipe(tap((user) => this.user$$.next(user)))
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(`${appUrl}/login.json`, { email, password })
      .pipe(tap((user) => this.user$$.next(user)))
  }

  logout() {
    return this.http
      .post<User>(`${appUrl}/logout.json`, {})
      .pipe(tap(() => this.user$$.next(undefined)))
  }

  getProfile() {
    return this.http
      .get<User>(`${appUrl}/login.json`)
      .pipe(tap((user) => this.user$$.next(user)))
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
