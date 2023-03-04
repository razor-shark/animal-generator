import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraitsService } from './traits.service';

@Component({
  selector: 'app-new-animal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>An animal that can {{animalTraits}}</h2>
    </div>
  `,
  styles: [
  ]
})
export class NewAnimalComponent {
  public animalTraits: string = "";

  constructor(readonly traitsService: TraitsService) {
    let traits: string[] = traitsService.getTraits();


    for (var i = 0; i < traits.length; i++) {
      this.animalTraits += " " + traits[i];
    }

  }
}
