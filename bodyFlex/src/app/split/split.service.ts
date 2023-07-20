import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Split } from '../types/Split';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

  constructor(private http: HttpClient) { }

  fetchSplits() {
    return this.http.get<Split[]>('https://exam1-835c0-default-rtdb.europe-west1.firebasedatabase.app/Splits.json')
  }
}
