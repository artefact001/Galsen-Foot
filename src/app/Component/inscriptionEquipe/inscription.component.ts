import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { EquipeModel } from '../Models/Tout.Model';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionEquipeComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  registrationForm!: FormGroup;
  isSubmitting = false;

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      logo: [''],
      zone_id: [''],
      nom_equipe: ['', Validators.required],
      user_id: [''],
      date_creer: [''],
      photo_profile: [null] // for file upload
    });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.registrationForm.patchValue({ photo_profile: file });
    }
  }

  registerEquipe() {
    if (this.registrationForm.invalid) {
      console.error('Le formulaire est invalide.');
      return;
    }

    this.isSubmitting = true;
    const formData = new FormData();

    Object.keys(this.registrationForm.controls).forEach(key => {
      const value = this.registrationForm.get(key)?.value;
      formData.append(key, value);
    });

    this.authService.registerEquipe(formData).subscribe(
      (response: any) => {
        console.log('Inscription réussie:', response);

        const loginObject = {
          email: this.registrationForm.get('email')?.value,
          password: this.registrationForm.get('password')?.value
        };

        this.authService.login(loginObject).subscribe(
          (loginResponse: any) => {
            console.log('Connexion réussie:', loginResponse);
            this.router.navigate(['/connexion']);
          },
          (loginError) => {
            console.error('Erreur lors de la connexion:', loginError);
            this.router.navigate(['/connexion']);
          }
        );
      },
      (registerError) => {
        console.error('Erreur lors de l\'inscription:', registerError);
      },
      () => {
        this.isSubmitting = false;
      }
    );
  }
}
