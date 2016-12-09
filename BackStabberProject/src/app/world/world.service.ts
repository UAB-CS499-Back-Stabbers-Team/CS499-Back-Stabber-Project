import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { DbService } from "../services/db.service";
import { World } from "./World";
import {Story} from "./story/Story";
import {Choice} from "./story/choice/Choice";
import {MoralRule} from "../moral-rule/moralRule";

@Injectable()
export class WorldService implements OnDestroy {
  private cr: any;
  public dbPath = 'world';
  public keys = [];
  public items = {};
  public done = false;
  public worlds = [];

  constructor(private db: DbService, private ss: StorageService) {
    this.cr = this.db.getChildRef(this.dbPath);
    this.getAll(snapShot => this.process(snapShot));
  }

  ngOnDestroy() {
    this.cr.off();
  }

  public getItemById(id: string) : World {
    let x = this.items[id];
    if(x) return x;
    else return null;
  }

  public getItemByIndex(i: number) {
    return this.items[this.keys[i]];
  }

  public keyExists(key: string) {
    return this.cr.once('value').exists(key);
  }

  public getChildRef(path: any) {
    return this.db.getChildRef(path);
  }

  public getAll(func: any) {
    return this.cr.on('value', func);
  }

  public remove(i: number) {
    this.cr.child(this.keys[i]).remove();
  }

  public set(item: any) {
    console.log(item);alert(item);
    // if(item.id == null)
    //   item.id = this.cr.push().key;
    // this.cr.child(item.id).set(item);
  }

  public process(snap: any) {
    this.items = {};
    this.keys = [];

    if(snap.val() != null) {
      snap.forEach(
        s => {
          this.keys.push(s.key);
          let v = s.val();
          this.items[s.key] = new World(v.id, v.name, v.prologue, v.imageURL, this.storyProcess(<Story[]>v.stories));
        }
      );
    }
    this.done = true;
    return this.items;
  }

  public storyProcess(stories: Story[]) {
    let ar = [];

    console.log("Stories");
    console.log(stories);
    if(stories) {
      for(var i = 0; i < stories.length; i++) {
        let x = stories[i];
        ar.push(x);//new Story(x.id, x.worldId, x.title, x.prologue, x.choice1Text, x.choice1Rule, x.choice2Text, x.choice2Rule));
      }
      return ar;
    } else {
      return [];
    }
  }

  // public choiceProcess(items: Choice[]) {
  //   let ar = [];
  //
  //   if(items != null) {
  //     for(var i = 0; i < items.length; i++) {
  //       let x = items[i];
  //       ar.push(new Choice(x.id, x.text, x.moralRule));
  //     }
  //     return ar;
  //   } else {
  //     return [];
  //   }
  // }

  public getImageUrl(path: string, success: any, error: any) {
    return this.ss.getFileUrl(path, success, error);
  }

  public getWorlds() {
    return this.world;
  }

  public stories1: Story[] = [new Story("1","1","The Team that Left a Member Behind",
    "A class was assigned a project to complete within a semester...",
    "Side with Cory", "Kantian",
    "Side with the Team", "Utilitarian"),
    new Story("2","1","The Classic Trolley Problem",
      "Classic trolley problem. You are watching a trolley come down the tracks. It is on path to run over 5 people. " +
      "You can pull a switch to make the trolley change tracks and hit only one person. Do you:",
      "Do nothing because actively switching would make you guilty of murder even if saving lives","kantian",
      "Flip the switch to lose less lives overall","utilitarian"),
    new Story("3", "1", "Hunger Games",
      "You just spent the last of your money on bread. Outside the bakery you see a poor hungry " +
      "orphan boy who hasn't eaten in days. You could give him some of your bread because your " +
      "family has eaten today, but you won't be able to buy food again for a week and your family " +
      "can only survive 5 days off the whole loaf giving him some would make your family starve longer. " +
      "What do you do?",
      "Help the boy and share", "kantian",
      "Deny the boy because you already have 3 other people to feed.", "utilitarian")];
  public stories2: Story[] = [
    new Story("1","2","The Cost of Living", "A very good friend is dying of a terminal " +
      "disease, and has not had time to change her will to represent her current wishes. " +
      "She gives you the combination to a safe that has $100,000 cash, and she wants you " +
      "to give it to her estranged son whom she left out of her will. No one else knows about" +
      " this money. You find out later that this son is already a multimillionaire and $100,000 " +
      "won’t make much difference to him. Do you ",
      "Give it to the son because that is what you agreed upon", "kantian",
      "Donate it to a cause that will help potentially thousands of people", "utilitarian"),
    new Story("2","2", "Nazis at the door",
      "It's 1939 and you live in Germany. You are hiding a Jewish family from the gestapo. One day some " +
      "gestapo officers show up to your home with dogs trained to sniff out people. They ask if there are " +
      "any jews hiding in the house and tell you that if you confess they will not persecute you or your" +
      " family. Otherwise they will search your home with the dogs and if they do find that you lied they " +
      "will send your entire family to a concentration camp as well.",
      "Do you confess so no harm will come to your family ", "utilitarian",
      " Do you lie and hope the dogs won't be able to sniff them out", "kantian"),
    new Story("3","2", "The cost of war", "You have captured the head of ISIS and are holding him " +
      "captive in a secret location. You know he's been planning a major terrorist attack on the " +
      "United States so you've been interrogating him but he won't talk. One of your superiors starts " +
      "suggesting torture. Do you Torture him?",
      "No, torture is wrong no matter what.", "kantian",
      "Yes because it will lead to saving thousands of lives", "utilitarian")];

  public world : World[] = [
    new World("1", "Fairness, A Matter of Point of View?",
      "Is fairness a point of view or are there definite lines between the right action and the wrong action? Have you ever " +
      "found yourself on one side of a stance concerning fairness and change your opinion once you understood the " +
      "other point of view? A point of view can be swayed by personal circumstance, affiliation, or bias. In the next " +
      "few questions consider both points of view and try to empathize or sympathize fully before choosing your side.",
      "http://comps.canstockphoto.com/can-stock-photo_csp35252341.jpg",
      this.stories1),
    new World("2", "Quality of Life", "This world you must adventure through poses some of the toughest" +
      " questions you will have to answer. Is it ever right to take a life or to diminish the quality of " +
      "life for someone else? Think carefully because your answers may have grave consequences!",
      "https://firebasestorage.googleapis.com/v0/b/the-moral-compass.appspot.com/o/world%2FKuntMills.png?" +
      "alt=media&token=ca5115f3-2edc-400f-8aff-627a29d28415",
      this.stories2)];
}
