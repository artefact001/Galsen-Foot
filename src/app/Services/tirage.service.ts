// // import { Injectable } from '@angular/core'
// // import { HttpClient, HttpHeaders } from '@angular/common/http'
// // import { Observable, catchError, throwError } from 'rxjs'
// // import { CompetitionEquipe, Tirage } from '../Component/Models/Tout.Model'
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class TirageService {
// //   private readonly apiUrl = 'http://localhost:8000/api/tirages'

// //   constructor (private http: HttpClient) {}


// //   // Récupérer les équipes par compétition
// //   getEquipesByCompetition(competitionId: number): Observable<CompetitionEquipe[]> {
// //     return this.http.get<CompetitionEquipe[]>(`${this.apiUrl}/competitions/${competitionId}/equipes`);
// //   }


// //   // Obtenir tous les tirages ou filtrer par compétition ID
// //   getTirages (competitionId?: number): Observable<Tirage[]> {
// //     let url = this.apiUrl
// //     if (competitionId) {
// //       url += `?competition_id=${competitionId}`
// //     }
// //     return this.http
// //       .get<Tirage[]>(url, { headers: this.getHeaders() })
// //       .pipe(catchError(this.handleError))
// //   }

// //   // Lancer un tirage de poules
// //   lancerTirage (data: {
// //     competition_id: number
// //     phase: string
// //     nombre_poules: number
// //   }): Observable<Tirage> {
// //     return this.http
// //       .post<Tirage>(`${this.apiUrl}/lancer`, data, {
// //         headers: this.getHeaders()
// //       })
// //       .pipe(catchError(this.handleError))
// //   }


// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Equipe } from '../Component/Models/Tout.Model';

// @Injectable({
//   providedIn: 'root',
// })
// export class TirageService {
//   private apiUrl = 'http://localhost:8000/api/tirages';
//   constructor(private http: HttpClient) {}

//   // Récupérer tous les tirages
//   getTirages(competitionId?: number): Observable<any> {
//     const url = competitionId ? `${this.apiUrl}?competition_id=${competitionId}` : this.apiUrl;
//     return this.http.get(url);
//   }

//   // Lancer un tirage
//   lancerTirage(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/lancer`, data);
//   }

//   // charger les competitions
//     getAllCompetitions(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   // Obtenir les équipes par zone
//  getEquipesByZone(zoneId: number): Observable<Equipe[]> {
//   const url = `${this.apiUrl}?zone_id=${zoneId}`;
//   return this.http.get<Equipe[]>(url, { headers: this.getHeaders() }).pipe(
//     catchError((error: any) => {
//       console.error(`Erreur lors de la récupération des équipes pour la zone ${zoneId}:`, error);
//       return throwError(() => new Error('Erreur lors de la récupération des équipes.'));
//     })
//   );
// }

//   // Obtenir les en-têtes pour les requêtes HTTP
//   private getHeaders (): HttpHeaders {
//     const token = localStorage.getItem('access_token')
//     return new HttpHeaders({
//       Authorization: `Bearer ${token}`
//     })
//   }

//   // Gestion des erreurs
//   private handleError (error: any): Observable<never> {
//     console.error("Une erreur s'est produite:", error)
//     return throwError(
//       () => new Error('Une erreur est survenue; veuillez réessayer plus tard.')
//     )
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Tirage, Competition, Equipe } from '../Component/Models/Tout.Model';

@Injectable({
  providedIn: 'root',
})
export class TirageService {
  private apiUrl = 'http://localhost:8000/api/tirages'; // Endpoint pour les tirages
  private competitionsUrl = 'http://localhost:8000/api/competitions'; // Endpoint pour les compétitions
  private equipesUrl = 'http://localhost:8000/api/equipes'; // Endpoint pour les équipes

  constructor(private http: HttpClient) {}

  /**
   * Récupérer tous les tirages, avec ou sans filtre par competitionId.
   * @param competitionId ID de la compétition (optionnel)
   */
  getTirages(competitionId?: number): Observable<Tirage[]> {
    const url = competitionId ? `${this.apiUrl}?competition_id=${competitionId}` : this.apiUrl;
    return this.http.get<Tirage[]>(url, this.getOptions()).pipe(catchError(this.handleError));
  }

  /**
   * Lancer un tirage.
   * @param data Données nécessaires pour lancer le tirage
   */
  lancerTirage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/lancer`, data, this.getOptions()).pipe(catchError(this.handleError));
  }

  /**
   * Récupérer toutes les compétitions.
   */
  getAllCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.competitionsUrl, this.getOptions()).pipe(catchError(this.handleError));
  }

  /**
   * Récupérer les équipes par zone.
   * @param zoneId ID de la zone
   */
  getEquipesByZone(zoneId: number): Observable<Equipe[]> {
    const url = `${this.equipesUrl}?zone_id=${zoneId}`;
    return this.http.get<Equipe[]>(url, this.getOptions()).pipe(catchError(this.handleError));
  }

  /**
   * Obtenir les en-têtes pour les requêtes HTTP.
   * Ajoute automatiquement le token d'authentification si présent.
   */
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  /**
   * Obtenir les options HTTP incluant les headers.
   */
  private getOptions(): { headers: HttpHeaders } {
    return { headers: this.getHeaders() };
  }

  /**
   * Gérer les erreurs des requêtes HTTP.
   * @param error Erreur interceptée
   */
  private handleError(error: any): Observable<never> {
    console.error("Une erreur s'est produite :", error);
    return throwError(() => new Error('Une erreur est survenue ; veuillez réessayer plus tard.'));
  }
}
