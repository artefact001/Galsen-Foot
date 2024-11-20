import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../../Services/zone.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zones-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zones-list.component.html',
  styleUrl: './zones-list.component.css'
})
export class ZonesListComponent implements OnInit {
deleteEquipe(arg0: any) {
throw new Error('Method not implemented.');
}
editEquipe(_t17: any) {
throw new Error('Method not implemented.');
}
viewEquipeDetails(arg0: any) {
throw new Error('Method not implemented.');
}
  zones: any[] = [];
equipes: any;

  constructor(private zoneService: ZoneService) {}

  ngOnInit(): void {
    this.zoneService.getZones().subscribe(
      (data) => {
        this.zones = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des zones', error);
      }
    );
  }

  // Navigate to zone details page
  viewZoneDetails(id: number): void {
    this.zoneService.redirectTo(`/zones/${id}`);
  }
}

