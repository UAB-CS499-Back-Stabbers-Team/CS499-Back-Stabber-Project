/**
 * Created by cwcordell on 10/24/16.
 */

export class Choice {
  id: number;
  text: string;
  image: string;
  moralRuleId: number;

  constructor(id: number, text: string, moralRuleId: number, image: string) {
    this.id = id;
    this.text = text;
    this.moralRuleId = moralRuleId;
    this.image = image;
  }
}
