import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.html',
  styleUrl: './one-friend.css'
})
export class OneFriend {
  @Input() ami!: {
    name:string;
    age: number;
    bio: string;
    reputation: string
  };
}
