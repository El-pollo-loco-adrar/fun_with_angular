import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list-firebase',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './task-list-firebase.html',
  styleUrl: './task-list-firebase.css'
})

export class TaskListFirebase {
  tasks: {
    title: string;
    status: string }[] = [];
  profil: {
    nom: string;
    prenom: string;
    age: number;
    img: string
  } []=[];

  newTask = { title: '', status: 'pending' }; // Tâche à ajouter
  newProfil = { nom: '', prenom: '', age: 0, img: ''};

    constructor(private db:Database){
      const profilRef = ref(this.db, 'profil');
      const tasksRef = ref(this.db, 'tasks');

        onValue(tasksRef, (snapshot) =>{
        // .val pour récupérer toutes des données de la base dans tasks
        const data = snapshot.val();
        console.log(data);
        //On récuprère le méga objet tasks de la base mais on en fait un tableau d'objet tasks
        this.tasks = data ? Object.values(data) : [];
        console.log(this.tasks);
    });

      onValue(profilRef, (snapshot) => {
        const data = snapshot.val();
        this.profil = data ? Object.values(data) : [];
      });
    }

    addProfil(){
      if( this.newProfil.nom.trim()){
        const profilRef = ref(this.db, 'profil');
        const newProfilRef = push(profilRef);
        set(newProfilRef, this.newProfil);
        this.newProfil = { nom: '', prenom: '', age: 0, img: ''};
      }
    }
    addTask() {
    if (this.newTask.title.trim()) {
      const tasksRef = ref(this.db, 'tasks');
      const newTaskRef = push(tasksRef);
      set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
      this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
    }
  }
}


