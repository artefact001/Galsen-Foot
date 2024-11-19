import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JoueurService } from '../../Services/joueur.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joueur',
  standalone:true,
  imports: [ ReactiveFormsModule , CommonModule],
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  joueurForm!: FormGroup;
  joueurs: any[] = [];
  selectedJoueur: any = null;
  selectedFile: File | null = null;
  fileError: string | null = null;
  categories = [
    { id: 1, nom: 'Senior' },
    { id: 2, nom: 'cadet' }
  ];

  constructor(private fb: FormBuilder, private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.joueurForm = this.fb.group({
      nom: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      licence: ['', Validators.required],
      equipe_id: ['', Validators.required],
      categorie_id: ['', Validators.required]
    });
    this.getAllJoueurs();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.fileError = null;
    } else {
      this.fileError = 'Veuillez sélectionner une image valide';
    }
  }

  onSubmit(): void {
    if (this.joueurForm.invalid || !this.selectedFile) {
      this.fileError = this.selectedFile ? null : 'Photo de profil requise';
      return;
    }

    const formData = new FormData();
    formData.append('nom', this.joueurForm.get('nom')?.value);
    formData.append('age', this.joueurForm.get('age')?.value);
    formData.append('licence', this.joueurForm.get('licence')?.value);
    formData.append('equipe_id', this.joueurForm.get('equipe_id')?.value);
    formData.append('categorie_id', this.joueurForm.get('categorie_id')?.value);
    formData.append('profil', this.selectedFile);

    if (this.selectedJoueur) {
      this.joueurService.updateJoueur(this.selectedJoueur.id, formData).subscribe(() => {
        this.getAllJoueurs();
        this.resetForm();
      });
    } else {
      this.joueurService.createJoueur(formData).subscribe(() => {
        this.getAllJoueurs();
        this.resetForm();
      });
    }
  }

  getAllJoueurs(): void {
    this.joueurService.getAllJoueurs().subscribe((data: any) => {
      this.joueurs = data;
    });
  }

  viewDetails(joueur: any): void {
    this.selectedJoueur = joueur;
  }

  editJoueur(joueur: any): void {
    this.selectedJoueur = joueur;
    this.joueurForm.patchValue(joueur);
  }

  deleteJoueur(id: number): void {
    this.joueurService.deleteJoueur(id).subscribe(() => this.getAllJoueurs());
  }

  resetForm(): void {
    this.joueurForm.reset();
    this.selectedFile = null;
    this.selectedJoueur = null;
  }

  closeDetails(): void {
    this.selectedJoueur = null;
  }
}
