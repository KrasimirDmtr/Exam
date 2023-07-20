import { Component, OnInit } from '@angular/core';
import { SplitService } from '../split.service';
import { Split } from 'src/app/types/Split';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  splitsList: Split[] = []
  constructor(private splitService: SplitService) {
  }

  ngOnInit(): void {
    this.loadSplits()
  }

  loadSplits(): void {
    this.splitService.fetchSplits().subscribe((splits) => {
      this.splitsList = splits
    })
  }
}


// this.splitService.fetchSplits().subscribe({
//   next: (splits) => {
//     this.splitsList = splits
//   },
//   error: (error) => {
//     console.error(`Error: ${error}`);
//   }
// })