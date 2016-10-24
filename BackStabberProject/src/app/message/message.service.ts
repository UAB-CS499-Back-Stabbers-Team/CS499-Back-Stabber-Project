import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  error(message) {
    console.log(message);
  }
}
