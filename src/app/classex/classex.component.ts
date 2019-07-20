import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classex',
  templateUrl: './classex.component.html',
  styleUrls: ['./classex.component.scss']
})
export class ClassexComponent implements OnInit {
  isBordered: boolean;
  classesObj: Object;
  classList: string[];

  constructor() {
  }

  ngOnInit() {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }

  toggleBorder(): void {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      isBordered: this.isBordered
    };
  }

  toggleClass(cssClass: string): void {
    const pos: number = this.classList.indexOf(cssClass);
    if (pos > -1) {
      this.classList.splice(pos, 1);
    } else {
      this.classList.push(cssClass);
    }
}

}
