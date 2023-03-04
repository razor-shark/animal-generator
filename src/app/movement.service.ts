import { Injectable } from '@angular/core';

export interface Combo {
  name: string;
  speed: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  movements: string[] = [
    "fly",
    "walk",
    "jump",
    "swim",
    "crawl"
  ];

  speed: string[] = [
    "fast",
    "slow",
    "normal"
  ];


  getMovementCombination(): Combo {
    let m: Combo = {
      name: this.movements[Math.floor(Math.random() * this.movements.length)],
      speed: this.speed[Math.floor(Math.random() * this.speed.length)]
    };
    
    return m;
  }
}
