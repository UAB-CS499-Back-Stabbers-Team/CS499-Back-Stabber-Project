/**
 * Created by cwcordell on 10/24/16.
 */

import { Choice } from './choice/Choice.ts';

export class Story {
  id: number;
  worldId: number;
  title: string;
  prologue: string;
  choices: Choice[];

  constructor(id: number, worldId: number, title: string, pro: string, choices: Choice[]) {
    this.id = id;
    this.worldId = worldId;
    this.title = title;
    this.prologue = pro;
    this.choices = choices;
  }
}
