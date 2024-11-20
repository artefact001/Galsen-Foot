import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatcheService } from '../../Services/matche.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matches-add',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './matches-add.component.html',
  styleUrl: './matches-add.component.css'
})
export class MatchesAddComponent implements OnInit {

  matchForm: FormGroup;

  constructor(private fb: FormBuilder, private matchService: MatcheService) {
    this.matchForm = this.fb.group({
      competition_id: ['', Validators.required],
      equipe1_id: ['', Validators.required],
      equipe2_id: ['', Validators.required],
      lieux: [''],
      statut: ['en_attente', Validators.required],
      date_matche: ['', Validators.required],
      resultat: ['gagne', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.matchForm.valid) {
      this.matchService.createMatch(this.matchForm.value).subscribe(() => {
        alert('Match créé avec succès');
        this.matchForm.reset();
      });
    }
  }
}
