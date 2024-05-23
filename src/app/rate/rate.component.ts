import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rate = 0.12345678
}