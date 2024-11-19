import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompetitionEquipe } from '../Component/Models/Tout.Model';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
 getCompetitionById(id: number): Observable<any> {
    if (!id) {
      throw new Error('L\'ID de la compétition est invalide ou non défini.');
    }
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  private apiUrl = 'http://localhost:8000/api/competitions';
  private http = inject(HttpClient);

  getAllCompetitions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCompetition(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCompetition(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateCompetition(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteCompetition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Méthode pour obtenir les détails d'une compétition
  getCompetitionDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/details`);
  }

  getEquipesByCompetitionId(competitionId: number): Observable<CompetitionEquipe[]> {
    return this.http.get<CompetitionEquipe[]>(`${this.apiUrl}/${competitionId}/equipes`);
  }

    // Ajouter une fonction ou l'on filtre les equipes qui participent a une competition Participer et on les liste dans une nouvelle page dans notre table pivot competition-equipe


      getEquipesParticipate( competitionId: number ):Observable<CompetitionEquipe[]>{ 
      return this.http.get<CompetitionEquipe[]>(`${this.apiUrl}/${competitionId}/equipes/participants`);

      }


    // getEquipesParticipate (competitionId:number):Observable<any> {
    // return this.http.get<any> (`${this.apiUrl}/${competitionId}/equipes/participants`)
    // }


}
