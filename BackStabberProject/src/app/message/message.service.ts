import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  q: string[];

  constructor() {
    this.q = [];
  }

  error(message) {
    console.log(message);
  }

  msgDisplay(message) {
    alert(message);
  }

  msgStore(message) {
    this.q.push(message);
  }

  disp() {
    while(this.q.length > 0) {
      this.msgDisplay(this.q.pop());
    }
  }
}
