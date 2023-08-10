import { Component, OnInit } from '@angular/core';
import { SplitService } from '../split/split.service';
import { Muscle } from '../types/Muscle';
import { map } from 'rxjs';

@Component({
  selector: 'app-muscle-group',
  templateUrl: './muscle-group.component.html',
  styleUrls: ['./muscle-group.component.css']
})
export class MuscleGroupComponent implements OnInit {
  muscles: Muscle[] = []
  constructor(private splitService: SplitService) { }

  ngOnInit(): void {
    this.splitService.getMuscles().pipe(map(response => {
      let muscles: any[] = [];
      for (let key in response) {
        muscles.push({ ...response[key], key });
      }
      return muscles
    })).subscribe((response) => {
      this.muscles = response;
      console.log(this.muscles);
    })
  }
}
