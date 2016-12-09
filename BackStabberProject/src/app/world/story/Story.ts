/**
 * Created by cwcordell on 10/24/16.
 */

import { Choice } from './choice/Choice.ts';

export class Story {
  id: string;
  worldId: string;
  title: string;
  prologue: string;
  choice1Rule: string;
  choice1Text: string;
  choice2Text: string;
  choice2Rule: string;

  constructor(id: string, worldId: string, title: string, pro: string, choice1Text: string,
               choice1Rule: string, choice2Text: string, choice2Rule: string) {
    this.id = id;
    this.worldId = worldId;
    this.title = title;
    this.prologue = pro;
    this.choice1Text = choice1Text;
    this.choice1Rule = choice1Rule;
    this.choice2Text = choice2Text;
    this.choice2Rule = choice2Rule;
  }
}
