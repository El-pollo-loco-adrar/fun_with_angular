import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Cela permet à Angular de gérer l'injection de dépendances
})
export class AuthGuardService implements CanActivate {

  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          observer.next(true);  // Si l'utilisateur est authentifié, on autorise l'accès
        } else {
          observer.next(false);
          console.log('Foutez le CAMP!')
          // Si l'utilisateur n'est pas authentifié, on redirige vers la page de login
          this.router.navigate(['/app-login']); // Redirection vers le login
        }
      });
    });
  }
}