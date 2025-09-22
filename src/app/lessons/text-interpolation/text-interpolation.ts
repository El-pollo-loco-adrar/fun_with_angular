import { Component } from '@angular/core';
//import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d";

  interface Hobbies {
    reading: 'Intermédiaire',
    cycling: 'Avancé',
    cooking: 'Débutant',
  };

@Component({
  selector: 'app-text-interpolation',
  imports: [],
  templateUrl: './text-interpolation.html',
  styleUrl: './text-interpolation.css'
})

export class TextInterpolation {
  titre :string = 'Bienvenue dans le cours Angular (classe Text interpolation)';
  description: string = 'description du texte';
  curentDate: Date = new Date();
  username: string = 'Johny Halliday';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  hobbies: Hobbies = {
    reading: 'Intermédiaire',
    cycling: 'Avancé',
    cooking: 'Débutant',
  };

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  };
}
