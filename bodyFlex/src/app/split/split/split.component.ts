import { Component, Input, OnInit } from '@angular/core';
import { SplitService } from '../split.service';
import { Split } from 'src/app/types/Split';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  @Input() splitDetails = { name: '', exp: '', tmp: '' }
  splitsList: Split[] = []
  constructor(private splitService: SplitService) {
  }

  ngOnInit(): void {
    this.splitService.fetchSplits().subscribe((splits) => {
      this.splitsList = splits
      console.log(this.splitsList);
    })
  }

  addSplit(dataSplit:any) {
    this.splitService.postSplit(this.splitDetails).subscribe()
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