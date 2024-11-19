import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  private baseUrl = 'http://localhost:8000/api/joueurs';

  constructor(private http: HttpClient) {}

  getAllJoueurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  showJoueur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJoueur(joueur: FormData): Observable<any> {
    return this.http.post(this.baseUrl, joueur);
  }

  updateJoueur(id: number, joueur: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}?_method=PUT`, joueur);  // Utilisation de POST pour les requêtes multipart
  }

  deleteJoueur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
