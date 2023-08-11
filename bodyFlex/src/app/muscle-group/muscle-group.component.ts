import { Component, OnInit } from '@angular/core';
import { Muscle } from '../types/Muscle';
import { map } from 'rxjs';
import { MuscleService } from './muscle.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-muscle-group',
  templateUrl: './muscle-group.component.html',
  styleUrls: ['./muscle-group.component.css']
})
export class MuscleGroupComponent implements OnInit {
  muscles: Muscle[] = []
  constructor(private muscleService: MuscleService, private userService: UserService) { }
  isAuthenticated() {
    return this.userService.isLogged();
  }
  ngOnInit(): void {
    this.muscleService.getMuscles().pipe(map(response => {
      let muscles: any[] = [];
      for (let key in response) {
        muscles.push({ ...response[key], key });
      }
      return muscles
    })).subscribe((response) => {
      this.muscles = response;      
    })
  }


}
