import { MoralRule } from "../../../moral-rule/moralRule";
/**
 * Created by cwcordell on 10/24/16.
 */

export class Choice {
  text: string;
  moralRule: string;

  constructor(text: string, moralRule: string) {
    this.text = text;
    this.moralRule = moralRule;
  }
}
