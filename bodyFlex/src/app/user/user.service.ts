import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  getUser() {
    return this.http.get<User[]>('https://exam1-835c0-default-rtdb.europe-west1.firebasedatabase.app/Users.json')
  }
}
