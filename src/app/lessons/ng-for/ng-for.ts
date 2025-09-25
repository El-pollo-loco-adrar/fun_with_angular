// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ng-for',
//   imports: [],
//   templateUrl: './ng-for.html',
//   styleUrl: './ng-for.css'
// })
// export class NgFor {

// }
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyBinding } from '../property-binding/property-binding';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-rendering',
  imports: [PropertyBinding,NgFor,FormsModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class ListRendering {

  inputNameFriend:string=''

  
  userProfiles  = [
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    },
    // {
    //   id: 2,
    //   firstName: 'Marie',
    //   lastName: 'Martin',
    //   email: 'marie.martin@example.com',
    //   isActive: false,
    //   role: 'utilisateur'
    // },
    // {
    //   id: 3,
    //   firstName: 'Pierre',
    //   lastName: 'Durand',
    //   email: 'pierre.durand@example.com',
    //   isActive: true,
    //   role: 'modérateur'
    // },
    // {
    //   id: 4,
    //   firstName: 'Sophie',
    //   lastName: 'Lefebvre',
    //   email: 'sophie.lefebvre@example.com',
    //   isActive: true,
    //   role: 'utilisateur'
    // }
  ];

  addAFriend(){
    this.userProfiles.push(
      {
      id:Math.random(),
      firstName:this.inputNameFriend,
      lastName:'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    }
  )
  }

}
