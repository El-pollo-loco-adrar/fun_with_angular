import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  constructor(){
  }

  
  img : string= 'https://www.franceinfo.fr/pictures/vVm7GJjoc2v8FYiZ-5DDyUPGl-o/1200x1200/2023/11/21/043-dpa-pa-230921-99-287054-dpai-655c8ab9b100e702351783.jpg'
  username: string = 'Snoop dogg';
  status: boolean = false;
  age : number = 25;
  bio: string = "Snoop dogg ... random sheet text";

  currentInput: string ='';
  listFriendsCreation: string ='aucun ami';

  onKeyUp(event: Event){
    const target = event.target as HTMLInputElement;
    this.currentInput = target.value;
    console.log(`Texte: ${this.currentInput}`)
  }


  addFriend(){
    this. listFriendsCreation = `🥳 Votre ami a été ajouté : ${this.currentInput} `;
    console.log (`Ami ${this.currentInput} ajouté`)
  }
}
