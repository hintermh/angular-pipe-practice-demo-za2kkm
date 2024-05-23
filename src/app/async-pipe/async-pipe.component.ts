import { Component } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'message',
  template: `
    <div>
        <h2>异步管道</h2>
        <p>消息: {{ message$ | async }}</p>
        <button (click)="resend()">发送</button>
    </div>
`
})
export class AsyncMessageComponent {
  message$: Observable<string>;

  private messages = [
    '开始消息',
    '发送消息...',
    '结束消息'
  ];

  constructor() { this.resend(); }

  resend() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]), take(this.messages.length)// rxjs每次从数组中取一个值
    );
  }
}