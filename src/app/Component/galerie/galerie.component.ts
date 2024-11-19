import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GalerieService } from '../../services/galerie.service';
import { HttpClientModule } from '@angular/common/http';
import { GalerieService } from '../../Services/galerie.service';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  galeries: any[] = [];
  selectedFile: File | null = null;
  uploadError: string | null = null;

  constructor(private galerieService: GalerieService) {}

  ngOnInit(): void {
    this.loadGaleries();
  }

  // Load all images
  loadGaleries(): void {
    this.galerieService.getGaleries().subscribe(
      (data) => {
        this.galeries = data;
      },
      (error) => {
        console.error('Error loading galleries', error);
      }
    );
  }

  // Handle file selection
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }

  // Upload the selected image
  uploadImage(): void {
    if (this.selectedFile) {
      this.galerieService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          this.loadGaleries(); // Reload images
          this.selectedFile = null; // Reset selected file
          this.uploadError = null;  // Clear any errors
        },
        (error) => {
          console.error('Error uploading image', error);
          this.uploadError = 'Failed to upload image. Please try again.';
        }
      );
    } else {
      this.uploadError = 'Please select an image to upload.';
    }
  }

  // Delete an image
  deleteImage(id: number): void {
    this.galerieService.deleteImage(id).subscribe(
      () => this.loadGaleries(),
      (error) => console.error('Error deleting image', error)
    );
  }
}
