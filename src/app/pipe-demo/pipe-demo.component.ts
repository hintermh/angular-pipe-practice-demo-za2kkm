import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  templateUrl: './pipe-demo.html'
})
export class PipeDemoComponent implements OnInit {
  currentDate: any = new Date();
  toggle: boolean = true;
  
  ngOnInit() {
  }

  get format() { 
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}