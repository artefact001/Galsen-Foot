import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZoneService } from '../../Services/zone.service';
import { Zone } from '../Models/Tout.Model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zone-equipe-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './zone-equipe-component.component.html',
  styleUrls: ['./zone-equipe-component.component.css']
})
export class ZoneEquipeComponent implements OnInit {
  equipes: any[] = [];
  selectedZone: number | null = null;
  zones: Zone[] = [];
  errorMessage: string = '';

  constructor(private zoneService: ZoneService, private http: HttpClient) {}

  ngOnInit(): void {
    // Charger les zones au démarrage
    this.zoneService.getZones().subscribe(
      (data: Zone[]) => {
        this.zones = data;
      },
      (error: any) => {
        this.errorMessage = error.message;
        console.error('Erreur lors de la récupération des zones :', error);
      }
    );
  }

fetchEquipes(): void {
  if (this.selectedZone) {
    // Appel correct de la méthode getEquipesByZone avec zoneService
    this.zoneService.getEquipesByZone(this.selectedZone).subscribe(
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

//filtrer les equipes qui participent a une competition lorsque l'on clique sur participer
ajouterEquipe(equipe: any): void {
  this.equipes.push(equipe);
  this.selectedZone = null;
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
