import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Description, Exercises, Muscle } from '../types/Muscle';
import { appUrl } from '../core/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  constructor(private http: HttpClient) { }

  getMuscles() {
    return this.http.get<{ [id: string]: Muscle }>(`${appUrl}/muscles.json`)
  }

  getMuscle(key:string){
    return this.http.get<Muscle>(`${appUrl}/muscles/${key}.json`)
  }

  getMuscleInfo(key:string){
    return this.http.get<Description>(`${appUrl}/muscles/${key}/description.json`)
  }

  getMuscleExercises(key:string){
    return this.http.get<Exercises>(`${appUrl}/muscles/${key}/description/exercises.json`)
  }
  

}
