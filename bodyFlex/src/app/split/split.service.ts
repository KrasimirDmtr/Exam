import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Split } from '../types/Split';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http: HttpClient) { }

  fetchSplits() {
    return this.http.get<Split[]>('https://exam1-835c0-default-rtdb.europe-west1.firebasedatabase.app/Splits.json')
  }

  postSplit(split: any): Observable<Split> {
    return this.http.post<Split>('https://exam1-835c0-default-rtdb.europe-west1.firebasedatabase.app/Splits.json',
      JSON.stringify(split), this.httpOptions)
  }
}
