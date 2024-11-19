import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private apiUrl = 'http://localhost:8000/api/zones';

  constructor(private http: HttpClient, private router: Router) {}

  // Get all zones
  getZones(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Get details of a specific zone by ID
  getZoneById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getEquipesByZone(zoneId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${zoneId}`);
  }

  getZoneByEquipeId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/equipe/${id}`);
  }

  getZoneByEquipe(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}//${id}/equipe`);
  }




  // Redirect user to a specific route
  redirectTo(path: string): void {
    this.router.navigate([path]);
  }
}
