/**
 * Created by cwcordell on 10/24/16.
 */

import { Story } from "./story/Story";

export class World {
  id: string;
  name: string;
  prologue: string;
  imageURL: string;
  stories: Story[];

  constructor(id: string, name: string, prologue: string, image: string, stories: Story[]) {
    this.id = id;
    this.name = name;
    this.prologue = prologue;
    this.imageURL = image;
    this.stories = stories;
  }
}
