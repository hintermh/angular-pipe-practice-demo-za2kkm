import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipe-demo',
  template: `
    <div>
      <span>原先字符串：{{address}}</span><br/>
      <span>自定义管道截取5位数：{{address|cutout:5}}</span>
    </div>
  `
})
export class CustomPipeComponent {
  address: string = '123456789';
}