import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../data';

@Component({
  selector: 'debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css'],
})
export class DebugComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  products = PRODUCTS;
}
