import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-pipes',
  templateUrl: './text-pipes.component.html',
  styleUrls: ['./text-pipes.component.css'],
})
export class TextPipesComponent implements OnInit {
  constructor() {}

  title = 'Das ist der Titel';

  ngOnInit() {}
}
