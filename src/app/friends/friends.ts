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
    reputation: string
  } [] = [];

  newName: string = "";
  newAge: number | null = null;
  newBio: string = "";
  newReputation: string = "";

  addFriend(){
    if (this.newName && this.newAge && this.newBio && this.newReputation)
      this.lesAmis.push ({
        name: this.newName,
        age: this.newAge,
        bio: this.newBio,
        reputation: this.newReputation
      })
    }
  }

