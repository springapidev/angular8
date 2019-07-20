import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleex',
  templateUrl: './styleex.component.html',
  styleUrls: ['./styleex.component.scss']
})
export class StyleexComponent implements OnInit {
  color: string;
  fontSize: number;
  style: {
    'background-color': string,
    'border-radius': string,
    border?: string,
    width?: string,
    height?: string
  };

  constructor() {
  }

  ngOnInit() {
    this.fontSize = 16;
    this.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      'height': '30px',
      'width': '30px'
    };
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }
}
