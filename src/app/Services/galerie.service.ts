import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {
  private apiUrl = 'http://localhost:8000/api/galeries';

  constructor(private http: HttpClient) {}

  // Get all images
  getGaleries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Upload a new image
  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<any>(this.apiUrl, formData);
  }

  // Delete an image by ID
  deleteImage(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
