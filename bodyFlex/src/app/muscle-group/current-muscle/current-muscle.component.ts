import { Component, OnInit } from '@angular/core';
import { MuscleService } from '../muscle.service';
import { Description, Exercises, Muscle } from 'src/app/types/Muscle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-muscle',
  templateUrl: './current-muscle.component.html',
  styleUrls: ['./current-muscle.component.css']
})
export class CurrentMuscleComponent implements OnInit {
  muscles: Muscle | undefined;
  exerc: Exercises | undefined;
  desc: Description | undefined;
  resultMuscle: any[] = [];
  resultDesc: any[] = [];

  constructor(private muscleService: MuscleService, private actRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.fetchMuscle();
    this.fetchInfo();
    this.fetchMuscleExer();
  }
  fetchMuscle() {
    const key = this.actRoute.snapshot.params['key'];
    this.muscleService.getMuscle(key).subscribe((muscle) => {
      this.muscles = muscle;
    })
  }

  fetchInfo() {
    const key = this.actRoute.snapshot.params['key'];
    this.muscleService.getMuscleInfo(key).subscribe((info) => {
      this.desc = info;
      const data = Object.entries(this.desc);
      this.resultDesc = data?.map((item) => item[1]);
            
    })
  }

  fetchMuscleExer(){
    const key = this.actRoute.snapshot.params['key'];
    this.muscleService.getMuscleExercises(key).subscribe((exer)=> {
      this.exerc = exer
      const data = Object.entries(this.exerc);
      this.resultMuscle = data?.map((item) => item[1])
      
    })
  }
}
