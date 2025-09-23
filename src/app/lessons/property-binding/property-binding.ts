import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'


@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './property-binding.html',
  styleUrls: ['./property-binding.css']
})
export class PropertyBinding {
  constructor(){
    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 3000);
  }

  img : string= 'https://www.franceinfo.fr/pictures/vVm7GJjoc2v8FYiZ-5DDyUPGl-o/1200x1200/2023/11/21/043-dpa-pa-230921-99-287054-dpai-655c8ab9b100e702351783.jpg'
  username: string = 'Snoop dogg';
  status: boolean = true;
  age : number = 25;
  bio: string = "Snoop dogg ... random sheet text";

  tempUsername: string = '';
  tempAge: number | null = null;
  tempBio: string = '';
  tempImg: string = '';

  onValidate(){
    console.log('onValidate appelé');
      if(this.tempUsername) this.username = this.tempUsername;
      if(this.tempAge !==null) this.age = this.tempAge;
      if(this.tempBio) this.bio = this.tempBio;
      if(this.tempImg) this.img = this.tempImg;

      this.tempUsername = '';
      this.tempAge = null;
      this.tempBio = '';
      this.tempImg = '';
  }
  
  getAgeClass(){
    return this.age > 30 ? 'text-red-500 font-bold text-xl' : 'text-green-500 font-semibold text3xl';
  }
  getStatusClass(){
    return this.status ? 'bg-green-200 text-green-800 px-2 rounded' : 'bg-red-200 text-red-800 px-2 rounded'
  }
// https://media.gqmagazine.fr/photos/5bfbb750cfaab69c96e8ef96/1:1/w_960,c_limit/ill_1750796_1bab_morsay2.jpg

  listFriendsInputText:string="";
  listFriendsAuth:boolean=false;
  //!listFriendsCreationStatus:string="🥶 Aucun ami ..."
  listFriendsCreationStatus: boolean = false;

  onAddingFriends():void{
    //!this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !"
    this.listFriendsCreationStatus = true;
  }



  // onUpdateFriendsList(eventInput:any):void{
  //   this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !";
  //   console.log(eventInput);
  //   console.log(eventInput.target.value);
  //   // console.log((<HTMLInputElement>eventInput.target).value);
  //   this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;
  //   //! autre syntaxe de typage avec as
  //   // this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;

  // }
}