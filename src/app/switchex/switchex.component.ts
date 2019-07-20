import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchex',
  templateUrl: './switchex.component.html',
  styleUrls: ['./switchex.component.scss']
})
export class SwitchexComponent implements OnInit {

  constructor() { }
  choice: number;

  

  ngOnInit() {
    this.choice = 1;
  }

  nextChoice(): void {
    this.choice += 1;

    if (this.choice > 5) {
      this.choice = 1;
    }
  }

}
