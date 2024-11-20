import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Matche } from '../Component/interfaces/matche.interface';




@Injectable({
  providedIn: 'root',
})
export class MatcheService {
  deleteMatche(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8000/api/matches';

  constructor(private http: HttpClient) {}

  // Obtenir tous les matches
  getAllMatches(): Observable<Matche[]> {
    return this.http.get<Matche[]>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Obtenir un match par son ID
  getMatchById(id: number): Observable<Matche> {
    return this.http.get<Matche>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Créer un nouveau match (données de base uniquement)
  createMatch(data: Pick<Matche, 'competition_id' | 'equipe1_id' | 'equipe2_id' | 'date_matche'>): Observable<Matche> {
    return this.http.post<Matche>(this.apiUrl, data, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Mettre à jour un match (ajout des données supplémentaires)
  updateMatch(id: number, match: Partial<Matche>): Observable<Matche> {
    return this.http.put<Matche>(`${this.apiUrl}/${id}`, match, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Supprimer un match
  deleteMatch(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Obtenir les matches à venir
  getUpcomingMatches(): Observable<Matche[]> {
    return this.http.get<Matche[]>(`${this.apiUrl}/venirs`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Obtenir les matches passés
  getPastMatches(): Observable<Matche[]> {
    return this.http.get<Matche[]>(`${this.apiUrl}/passes`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Gestion des headers
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  // Gestion des erreurs
  private handleError(error: any): Observable<never> {
    console.error('Une erreur s’est produite:', error);
    return throwError(() => new Error('Une erreur est survenue; veuillez réessayer plus tard.'));
  }
}


