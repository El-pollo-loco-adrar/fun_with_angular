import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class Register {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);
  signUp() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur inscrit:', userCredential);
        console.log('Utilisateur inscrit:', this.user);
      })
      .catch((error) => {
        this.error = error.message;
        console.error('Erreur d\'inscription:', error);
      });
  }
}