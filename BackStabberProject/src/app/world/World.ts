/**
 * Created by cwcordell on 10/24/16.
 */

import { Story } from "./story/Story";

export class World {
  id: number;
  name: string;
  prologue: string;
  image: string;
  stories: Story[];

  constructor(id: number, name: string, prologue: string, image: string, stories: Story[]) {
    this.id = id;
    this.name = name;
    this.prologue = prologue;
    this.image = image;
    this.stories = stories;
  }
}
