import { Component, Input, OnInit } from '@angular/core';
import { SplitService } from '../split.service';
import { Split } from 'src/app/types/Split';
import { map } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  splits: Split[] = []
  constructor(private splitService: SplitService, private userService: UserService) { }

  
  isAuthenticated(){
    return this.userService.isLogged();
  }

  ngOnInit(): void {
    this.splitService.getSplits().pipe(map(response => {
      let splits: any[] = [];
      for (let key in response) {
        splits.push({...response[key],key});
      }
      return splits
    })).subscribe((response) => {
      this.splits = response;    
    })
  }
}

