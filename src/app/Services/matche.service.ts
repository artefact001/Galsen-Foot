// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// export interface Matche {
//   lieux: any;
//   id: number;
//   competition_id: number;
//   equipe1_id: number;
//   equipe2_id: number;
//   score_equipe1?: number | null;
//   score_equipe2?: number | null;
//   date_matche: string; // Format ISO, ex. "2023-12-31"
//   statut: 'en_attente' | 'termine' | 'annule';
//   buteurs?: any[] | null;
//   passeurs?: any[] | null;
//   homme_du_matche?: number | null;
//   cartons?: any[] | null;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class MatcheService {
//   deleteMatche(id: number) {
//     throw new Error('Method not implemented.');
//   }
//   private apiUrl = 'http://localhost:8000/api/matches';

//   constructor(private http: HttpClient) {}

  // Obtenir tous les matches
  // getAllMatches(): Observable<Matche[]> {
  //   return this.http.get<Matche[]>(this.apiUrl, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }

  // Obtenir un match par son ID
  // getMatchById(id: number): Observable<Matche> {
  //   return this.http.get<Matche>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }

  // Créer un nouveau match (données de base uniquement)
  // createMatch(data: Pick<Matche, 'id' | 'competition_id' | 'equipe1_id' | 'equipe2_id' | 'date_matche'>): Observable<Matche> {
  //   return this.http.post<Matche>(this.apiUrl, data, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }

  // Mettre à jour un match (ajout des données supplémentaires)
  // updateMatch(id: number, match: Partial<Matche>): Observable<Matche> {
  //   return this.http.put<Matche>(`${this.apiUrl}/${id}`, match, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }

  // Supprimer un match
  // deleteMatch(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }

  // Obtenir les matches à venir
//   getUpcomingMatches(): Observable<Matche[]> {
//     return this.http.get<Matche[]>(`${this.apiUrl}/venirs`, { headers: this.getHeaders() })
//       .pipe(catchError(this.handleError));
//   }

//   // Obtenir les matches passés
//   getPastMatches(): Observable<Matche[]> {
//     return this.http.get<Matche[]>(`${this.apiUrl}/passes`, { headers: this.getHeaders() })
//       .pipe(catchError(this.handleError));
//   }

//   // Gestion des headers
//   private getHeaders(): HttpHeaders {
//     const token = localStorage.getItem('access_token') || '';
//     return new HttpHeaders({
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     });
//   }

//   // Gestion des erreurs
//   private handleError(error: any): Observable<never> {
//     console.error('Une erreur s’est produite:', error);
//     return throwError(() => new Error('Une erreur est survenue; veuillez réessayer plus tard.'));
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatcheService {
  private apiUrl = 'http://localhost:8000/api/matches';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les compétitions
  getCompetitions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/competitions`);
  }

  // Méthode pour obtenir les équipes
  getEquipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/equipes`);
  }

  // Méthode pour obtenir les joueurs
  getJoueurs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/joueurs`);
  }

  // Méthode pour obtenir les détails d'un match par ID
  getMatchById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/matches/${id}`);
  }

  // Méthode pour mettre à jour les informations d'un match
  updateMatch(id: number, matchData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/matches/${id}`, matchData);
  }
  
  // Créer un nouveau match (données de base uniquement)
 
}
