import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HEROES } from '../heros';
@Component({
  selector: 'check-demo',
  templateUrl: './check-demo.html'
})
export class CheckDemoComponent {
  people: any[] = [];
  canFly: boolean = true;
  constructor() {
    this.reset();
  }
  add(name: string) {
    name = name.trim();
    if (!name) { return }
    let per = { name, canFly: this.canFly };
    this.people.push(per)// 存在隐患，应用管道时不会触发变更检测Angular 只有在它检测到输入值发生了纯变更时才会执行纯管道。 纯变更是指对原始类型值(String、Number、Boolean、Symbol)的更改， 或者对对象引用(Date、Array、Function、Object)的更改
  }

  reset() {
    this.people = HEROES.slice();// 小技巧，不填默认为null转化为0
  }
}

@Pipe({
  name: 'canFly',
  // pure: false
})
export class CanFlyPipe implements PipeTransform {
  transform(value: any, params?: any) {
    // console.log(value)
    return value.filter(item => item.canFly)
  }
}

@Pipe({
  name: 'canFlyNotPure',
  pure: false//Angular 会在每个组件的变更检测周期中执行非纯管道。 非纯管道可能会被调用很多次，和每个按键或每次鼠标移动一样频繁。
})
export class CanFlyPipeNotPure extends CanFlyPipe {
}