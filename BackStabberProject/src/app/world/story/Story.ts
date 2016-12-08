/**
 * Created by cwcordell on 10/24/16.
 */

import { Choice } from './choice/Choice.ts';

export class Story {
  id: string;
  worldId: string;
  title: string;
  prologue: string;
  choices: Choice[];

  constructor(id: string, worldId: string, title: string, pro: string, choices: Choice[]) {
    this.id = id;
    this.worldId = worldId;
    this.title = title;
    this.prologue = pro;
    this.choices = choices;
  }
}
