import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise, Split } from '../types/Split';
import { Observable } from 'rxjs';
import { appUrl } from '../core/environment/environment';

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

  getSplits() {
    return this.http.get<{ [id: string]: Split }>(`${appUrl}/splits.json`)
  }

  postSplit(split: any): Observable<Split> {
    return this.http.post<Split>('https://exam1-835c0-default-rtdb.europe-west1.firebasedatabase.app/Splits.json',
      JSON.stringify(split), this.httpOptions)
  }

  getSplit(key: string) {
    return this.http.get<Split>(`${appUrl}/splits/${key}.json`)
  }
  getExerc(key: string) {
    return this.http.get<Exercise>(`${appUrl}/splits/${key}/exercises.json`)
  }
}
