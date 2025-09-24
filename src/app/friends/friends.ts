import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneFriend } from '../one-friend/one-friend';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, OneFriend, FormsModule],
  templateUrl: './friends.html',
  styleUrls: ['./friends.css']
})
export class Friends {
  lesAmis: {
    name: string;
    age: number;
    bio: string;
    reputation: string;
    top?: number;
    left?: number;
    rotation?: number,
    //color?: string
  } [] = [];

  newName: string = "";
  newAge: number | null = null;
  newBio: string = "";
  newReputation: string = "";

  addFriend(){
    if (this.newName && this.newAge && this.newBio && this.newReputation){
      const randomTop = Math.floor(Math.random() * 500);  // entre 0 et 500px
      const randomLeft = Math.floor(Math.random() * 800);
      const randomRotation = Math.floor(Math.random() *40) -20;
      // const colors = ["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#f472b6"];
      // const randomColor = colors[Math.floor(Math.random() * colors.length)];

      this.lesAmis.push ({
        name: this.newName,
        age: this.newAge,
        bio: this.newBio,
        reputation: this.newReputation,
        top: randomTop,
        left: randomLeft,
        rotation: randomRotation,
        //color: randomColor
      })
    }
    }
  }
