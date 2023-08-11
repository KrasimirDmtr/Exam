import { Component, OnInit } from '@angular/core';
import { SplitService } from '../split.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise, Split } from 'src/app/types/Split';
import { UserService } from 'src/app/user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current-split',
  templateUrl: './current-split.component.html',
  styleUrls: ['./current-split.component.css'],
})
export class CurrentSplitComponent implements OnInit {
  constructor(
    private splitService: SplitService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) { }
  split: Split | undefined;
  exercise: Exercise | undefined;
  result: any[] = [];
  userData: string = ''


  ngOnInit(): void {
    this.fetchSplit();
    this.fetchExerc();
  }



  fetchSplit() {
    const key = this.activatedRoute.snapshot.params['key'];
    this.splitService.getSplit(key).subscribe((split) => {
      this.split = split;
    });
  }

  fetchExerc() {
    const key = this.activatedRoute.snapshot.params['key'];
    this.splitService.getExerc(key).subscribe((exer) => {
      this.exercise = exer;
      const data = Object.entries(this.exercise)
      const id = data?.map((item) => item[0])
      this.result = data?.map((item) => item[1])
    });
  }


}
