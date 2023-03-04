import { Injectable } from '@angular/core';
import { MovementService } from './movement.service';

@Injectable({
  providedIn: 'root'
})
export class TraitsService {

  constructor(readonly movementService: MovementService) { }

  getTraits(): string[] {
    let traits: string[] = [];
    let newMovement = this.movementService.getMovementCombination();

    traits.push(newMovement.name + " " + newMovement.speed);

    return traits;
  }
}
