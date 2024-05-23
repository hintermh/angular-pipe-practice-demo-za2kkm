import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-in-component',
  templateUrl: './pipe-in-component.component.html',
  styleUrls: ['./pipe-in-component.component.css'],
  providers: [UpperCasePipe],
})
export class PipeInComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Hier steht mein neuer Titel!';
}
