import {MoralRule} from "../../../moral-rule/moralRule";
/**
 * Created by cwcordell on 10/24/16.
 */

export class Choice {
  id: number;
  text: string;
  moralRule: MoralRule;

  constructor(id: number, text: string, moralRule: MoralRule) {
    this.id = id;
    this.text = text;
    this.moralRule = moralRule;
  }
}
