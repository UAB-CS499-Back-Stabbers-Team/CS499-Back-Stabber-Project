import { Component, OnInit } from '@angular/core';
import {DbService} from "../services/db.service";
import {WorldService} from "../world/world.service";
import {FirebaseService} from "../services/firebase/firebase.service";
import {Story} from "../world/story/Story";
import {World} from "../world/World";
declare var firebase: any;

@Component({
  selector: 'bsp-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [WorldService]
})
export class GameComponent implements OnInit {
  fb: any;
  ref: any;
  items = [];
  keys: any[] = [];
  nums: number[] = [];
  selected: any[] = [];
  worlds: any[] = [];
  currentWorld = new World('', '', '', '', []);
  currentStory = new Story('','','','','','','','');
  currentWorldIndex: number = 0;
  currentStoryIndex: number = 1;
  kant = 0;
  util = 0;
  results: any = {};

  constructor(private db: DbService, private ws: WorldService, private fbase: FirebaseService) { }

  ngOnInit() {
    // this.fb = this.fbase.getDb();
    // this.ref = this.fb.ref('world');
    // this.ref.on('value', x => this.start(x));

    // var w1 = new World('0', 'Tis is the name', 'This is the prologue', 'http://comps.canstockphoto.com/can-stock-photo_csp35252341.jpg',
    // []);
    // w1.stories.push(new Story('0',w1.id,'this is the story title', 'this is the prologue', 'choice 1 text', 'utilitarian', 'choice 2 text', 'kantian'));
    // this.items.push(w1);

    this.items = this.ws.getWorlds();
    this.currentWorld = this.items[0];
    this.start();
  }

  start() {
    // this.items = this.ws.items;//this.ws.process(data);
    // this.keys = this.ws.keys;
    // setTimeout(this.go, 3000);

    console.log(this.items);
    // console.log(this.keys);
    let max = this.ws.keys.length;
    for(let i = 0; i < max; i++) {
      this.nums.push(i);
    }
    // console.log(this.nums);


    // console.log(this.keys);

    for(let a in this.items) {
      this.selected.push(a);
    }
    // console.log(this.selected);

    let x = this.getRand(max);
    let y = this.getRand(max);
    let temp;
    for(let i = 0; i < (max * 50) - 1; i++) {
      temp = this.selected[x];
      this.selected[x] = this.selected[y];
      this.selected[y] = temp;
      x = this.getRand(max);
      y = this.getRand(max);
    }
    // console.log(this.selected);

    for(let i = 0; i < 3; i++) {
      this.worlds.push(this.selected[i]);
    }

    // console.log(this.worlds);
    // console.log(this.items[this.worlds[0]]);

    // this.next('');
  }

  getRand(x: number) {
    return <number>(Math.floor(Math.random() * x));
  }

  ngOnDestroy() {
    this.ref.off();
  }

  // public process(snap: any) {
  //   this.items = {};
  //   this.keys = [];
  //
  //   if(snap.val() != null) {
  //     snap.forEach(
  //       s => {
  //         this.keys.push(s.key);
  //         let v = s.val();
  //         this.items[s.key] = s.val();// = new World(v.id, v.name, v.prologue, v.imageURL, this.storyProcess(<Story[]>v.stories));
  //       }
  //     );
  //   }
  //   // this.done = true;
  //   return this.items;
  // }

  // next(rule: string) {
  //   if(rule == 'kantian') this.kant++;
  //   if(rule == 'utilitarian') this.util++;
  //
  //   if(this.currentWorldIndex < this.worlds.length)
  //
  //   if(this.currentStoryIndex >= this.currentWorld.stories.length) {
  //     this.currentStoryIndex = 1;
  //     this.currentWorldIndex++;
  //
  //     this.currentWorld = this.items[this.worlds[this.currentWorldIndex]];
  //   }
  //   this.currentStoryIndex++;
  //
  //   if(this.currentStoryIndex >= this.currentWorld.stories.length) {
  //     this.currentStoryIndex = 1;
  //     this.currentWorldIndex++;
  //   }
  //
  //   if(this.currentWorldIndex >= this.worlds.length) {
  //     this.end();
  //   } else {
  //     this.currentWorld = this.worlds[this.currentWorldIndex];
  //   }
  // }

  end() {

  }

  nextWorld() {
    this.currentWorldIndex++;
    if(this.currentWorldIndex >= this.items.length) this.end();
    else this.currentWorld = this.items[this.currentWorldIndex];
  }

  // nextWorld() {
  //   this.currentWorldIndex++;
  // }

  result(worldName, index, rule) {
    this.results[worldName+'/'+index] = rule;
    console.log(this.results);
  }
}
