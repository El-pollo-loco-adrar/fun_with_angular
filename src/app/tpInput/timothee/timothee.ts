import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-timothee',
  imports: [CommonModule, NgFor ],
  templateUrl: './timothee.html',
  styleUrl: './timothee.css'
})
export class Timothee {
  @Input() sendUser: any;

  users: any = [];

  ngOnInit() {
    //console.log('Dans l\'enfant', this.sendUser);
    console.log('ICI');
    this.users = this.sendUser;
    console.log(this.users);
  }
}
