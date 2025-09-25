import { Component, NgModule } from '@angular/core';
import { Timothee } from '../timothee/timothee';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-papa',
  imports: [Timothee, FormsModule],
  templateUrl: './papa.html',
  styleUrl: './papa.css'
})
export class Papa {
  saisie: string = '';
  newUser: any = {
    firstName : '', lastName: 'ririNew', email:'aa', isActive: true, role: 'utilisateur'
  };

  saveSaisie(){
    this.newUser.firstName = this.saisie;
    console.log('saveSaisie',this.saisie);
    console.log('saisie newUser',this.newUser);

    this.user.push(this.newUser);

  }


  user: any = [
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    },
    {
      id: 2,
      firstName: 'Marie',
      lastName: 'Martin',
      email: 'marie.martin@example.com',
      isActive: false,
      role: 'utilisateur'
    },
    {
      id: 3,
      firstName: 'Pierre',
      lastName: 'Durand',
      email: 'pierre.durand@example.com',
      isActive: true,
      role: 'modérateur'
    },
    {
      id: 4,
      firstName: 'Sophie',
      lastName: 'Lefebvre',
      email: 'sophie.lefebvre@example.com',
      isActive: true,
      role: 'utilisateur'
    }
  ];
}
