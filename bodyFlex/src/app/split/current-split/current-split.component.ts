import { Component, OnInit } from '@angular/core';
import { SplitService } from '../split.service';
import { ActivatedRoute } from '@angular/router';
import { Exercise, Split } from 'src/app/types/Split';
import { map } from 'rxjs';

@Component({
  selector: 'app-current-split',
  templateUrl: './current-split.component.html',
  styleUrls: ['./current-split.component.css']
})
export class CurrentSplitComponent implements OnInit {

  constructor(private splitService: SplitService, private activatedRoute: ActivatedRoute) { }
  split: Split | undefined;
  ngOnInit(): void {
    this.fetchSplit();
  }

  fetchSplit() {
    const key = this.activatedRoute.snapshot.params['key']

    this.splitService.getSplit(key).subscribe((split) => {
      this.split = split;
      console.log(split.exercises);
    })
  }



}
