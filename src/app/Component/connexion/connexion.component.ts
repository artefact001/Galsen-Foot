import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { UserModel } from '../Models/user.model';
// import { UserModel } from '../../../../Models/users.model';
// import { AuthService } from '../../../../Services/auth.service';
// import { Role } from '../../../../Models/roles.model';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  getUserRole() {
    throw new Error("Method not implemented.");
  }
  private authService = inject(AuthService);
  private router =inject(Router);


  // Declaration des variables
  userObject :UserModel = {};

  email: string = '';
  password: string = '';


  login() {
    if (this.userObject.email && this.userObject.password) {
      this.authService.login(this.userObject).subscribe(
        (response: any) => {
          console.log(response.access_token);
          console.log(response.user);

          if (response.user) {
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('user', JSON.stringify(response.user));
             // si role = 'admin' ->dashboard/admin ou role = 'super_admin ->dashboard/super-admin ou role = 'entrepreneur ->dashboard/entrepreneur

            if (response.user) {
              if (response.user.role === 'admin') {
                this.router.navigateByUrl('admin-dashboard');
              }
              else if (response.user.role === 'zone'){
                this.router.navigateByUrl('zones');
              }
              else if (response.user.role === 'equipe'){
                this.router.navigateByUrl('equipe-dashboard');
              }
            }
            else {
              this.router.navigateByUrl('dashboard');
            }
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  // Fonction pour deconnexion
  // logout() {
  //   localStorage.removeItem('access_token');
  //   localStorage.removeItem('user');
  //   this.router.navigateByUrl('login');
  // }gout


  logout() {
    return this.authService.logout().subscribe(
      (response: any) => {
        console.log(response);
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Erreur lors de la déconnexion:', error);
      }
    );







}
}
