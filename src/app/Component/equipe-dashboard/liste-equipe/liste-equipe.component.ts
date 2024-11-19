//   import { Component, OnInit } from '@angular/core';
//   import { EquipeService } from '../../../Services/equipe.service';
//   import { CommonModule } from '@angular/common';
//   import { ReactiveFormsModule } from '@angular/forms';
//   import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Equipe } from '../../Models/Tout.Model';
//   @Component({
//     selector: 'app-liste-equipe',
//     standalone: true,
//     imports: [CommonModule, ReactiveFormsModule],
//     templateUrl: './liste-equipe.component.html',
//     styleUrl: './liste-equipe.component.css'
//   })
//   export class ListeEquipeComponent implements OnInit {
//   zoneId: number | nom: string: any[] = [];
//     equipes: Equipe[] = [];
//     equipeForm: FormGroup | undefined;


//     constructor(private equipeService: EquipeService) {}

//     ngOnInit(): void {
//       this.equipeService.getEquipes().subscribe((equipes) => {
//         this.equipes = equipes;
//       });
//     }
//     deleteEquipe(equipeId: number): void {
//       this.equipeService.deleteEquipe(equipeId).subscribe(() => {
//         this.equipes = this.equipes.filter((equipe) => equipe.id !== equipeId);
//       });
//     }
//     updateEquipe(equipe: Equipe): void {
//       this.equipeService.updateEquipe(equipe).subscribe(() => {
//         this.equipes = this.equipes.map((e) => (e.id === equipe.id ? equipe : e));
//       });
//     }



//     editEquipe(equipe: Equipe): void {
//       this.equipeService.updateEquipe(equipe).subscribe(() => {
//         this.equipes = this.equipes.map((e) => (e.id === equipe.id ? equipe : e));
//       });
//     }

//     deleteEquipe(equipeId: number): void {
//       this.equipeService.deleteEquipe(equipeId).subscribe(() => {
//         this.equipes = this.equipes.filter((equipe) =>
//   }
//     );
//        }
