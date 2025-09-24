import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jeff-tp1',
  imports: [CommonModule],
  templateUrl: './jeff-tp1.html',
  styleUrl: './jeff-tp1.css'
})

export class JeffTp1 {


  para: string = 'Je suis un texte !'
  etatPara: boolean = false;
  array: Array <number> = [];

  clique() {
    this.etatPara = !this.etatPara;
    this.array.push(1);
    console.log(this.array);
  }
}
