import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { apiUrl } from "./apiUrl";
import { Observable } from "rxjs";

@Injectable ({
  providedIn: 'root'

})

export class AuthService{

  private userRoles: string[] | null = null;
constructor(private httpClient: HttpClient) {//+
    this.http = httpClient;//+
     this.userRoles = ['admin']; // Exemple de rôle
      this.userRoles = ['zone']; // Exemple de rôle
      this.userRoles = ['equipe']; // Exemple de rôle
  }//+
  // constructor(private http: HttpClient) {
     

  // }
  private http = inject(HttpClient);
  @Injectable({
    providedIn: 'root'
  })

    // method to login
  login(identifiant: any)  {
    return this.http.post(`${apiUrl}/auth/login`, identifiant)
  }

  // method to register
  register(identifiant: any) {
    return this.http.post(`${apiUrl}/auth/register`, identifiant)
  }

  registerZone(identifiant: any) {
    return this.http.post(`${apiUrl}/zones`, identifiant)
  }

  registerEquipe(identifiant: any) {
    return this.http.post(`${apiUrl}/equipes`, identifiant)
  }

  registerAdmin(identifiant: any) {
    return this.http.post(`${apiUrl}/register/admin`, identifiant)
  }


 // Method to logout
 logout() {
  const token = localStorage.getItem('access_token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(`${apiUrl}/logout`, { headers });
}



//ACCESS AU TOKEN
  getToken(): string | null {
    return localStorage.getItem('access_token'); // Exemple d'obtention du token
  }
  
  
  
  getUserRoles(): string[] | null {
    return this.userRoles;
  }

}
