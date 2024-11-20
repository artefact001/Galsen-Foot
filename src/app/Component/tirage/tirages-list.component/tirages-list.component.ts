import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Competition, Equipe, Tirage } from '../../Models/Tout.Model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-tirages-list.component',
  standalone: true,
  imports : [ ReactiveFormsModule, CommonModule],
  templateUrl: './tirages-list.component.html',
  styleUrls: ['./tirages-list.component.css'],
 } )


export class TiragesListComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
} 
  private apiUrl = 'http://localhost:8000/api/tirages'; // Endpoint pour les tirages
  private competitionsUrl = 'http://localhost:8000/api/competitions'; // Endpoint pour les compétitions
  private equipesUrl = 'http://localhost:8000/api/equipes'; // Endpoint pour les équipes
    tirageForm: any;
    competitions: Competition[] = [];  // Define the type of the competitions array
    zones: any[] = []; // Replace with actual type if available




  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
