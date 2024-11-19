import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from '../../../Services/zone.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zone-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zone-details.component.html',
  styleUrl: './zone-details.component.css'
})
export class ZoneDetailsComponent implements OnInit {
  zone: any;
  equipes: any;
  // id: number;

  constructor(private route: ActivatedRoute, private zoneService: ZoneService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.zoneService.getZoneById(id).subscribe(
      (data) => {
        this.zone = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de la zone', error);
        this.zoneService.redirectTo('/zones'); // Redirect if zone not found
      }
    );
  }
  
  
  fetchEquipes(): void {
  if (this.zone) {
    // Appel correct de la méthode getEquipesByZone avec zoneService
    this.zoneService.getEquipesByZone(this.zone).subscribe(
      (data: any) => {
        // Si les données contiennent un attribut "equipes"
        this.equipes = data.equipes || []; // Assigner les équipes ou un tableau vide
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des équipes :', error);
      }
    );
  } else {
    console.warn('Aucune zone sélectionnée.');
  }
}
  Zone(Zone: any) {
    throw new Error('Method not implemented.');
  }

//filtrer les equipes qui participent a une competition lorsque l'on clique sur participer
ajouterEquipe(equipe: any): void {
  this.equipes.push(equipe);
  this.zone = (this.zone || []).concat(equipe);
}

  //supprimer une equipe de la liste des equipes
  // supprimerEquipe(equipe: any): void {
  //   const index = this.equipes.indexOf(equipe);
  //   if (index !== -1) {
  //     this.equipes.splice(index, 1);
  //   }
  // }
  
  // Suspendre un equipe pour qu'il ne participe pas a une competition
  suspenderEquipe(equipe: any): void {
    const index = this.equipes.indexOf(equipe);
    if (index !== -1) {
      this.equipes.splice(index, 1);
    }
  }
  
}
