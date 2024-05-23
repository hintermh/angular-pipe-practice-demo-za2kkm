import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../data';

@Component({
  selector: 'slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = PRODUCTS;
}