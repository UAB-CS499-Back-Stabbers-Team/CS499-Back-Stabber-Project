/**
 * Created by cwcordell on 12/8/16.
 */

export class Game {
  result: string[];
  user: string;
  id: string;

  constructor() {
    this.id = Date.now().toString();
  }
}
