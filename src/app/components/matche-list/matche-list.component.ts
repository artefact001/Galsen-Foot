// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { MatcheService } from '../../Services/matche.service';

// @Component({
//   selector: 'app-matche-list',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './matche-list.component.html',
//   styleUrls: ['./matche-list.component.css'],
// })

// export class MatcheListComponent implements OnInit {
//   matches: any[] = [];
//   competitions: any[] = [];
//   teams: any[] = [];
//   selectedCompetition: any = null;
//   selectedTeam1: any = null;
//   selectedDate: string = '';
//   selectedTeam2: any = null;
//   selectedStatut: string = '';
//   selectedButeurs: any[] = [];
//   selectedPasseurs: any[] = [];
//   selectedHommeDuMatche: any = null;
//   selectedCartons: any[] = [];
//   selectedHommeDuMatcheId: number | null = null;
//   selectedCartonsIds: number[] = [];
//   selectedCartonsTypes: string[] = [];
//   selectedCartonsEquipeIds: number[] = [];
//   selectedCartonsNoms: string[] = [];
//   selectedCartonsJoueursIds: number[] = [];
//   selectedCartonsJoueursNoms: string[] = [];
//   selectedCartonsJoueursEquipeIds: number[] = [];
//   selectedCartonsJoueursEquipeNoms: string[] = [];
//   selectedCartonsJoueursEquipeIdsAndNoms: { id: number; nom: string }[] = [];
//   selectedCartonsJoueursEquipeIdsAndNomsAndEquipeIds: { id: number; nom: string; equipe_id: number }[] = [];
//   selectedCartonsJoueursEquipeIdsAndNomsAndEquipeIdsAndNoms: { id: number; nom: string; equipe_id: number; nom_equipe: string }[] = [];
//   selectedCartonsJoueursEquipeIdsAndNomsAndEquipeIdsAndNomsAndEquipeIds: { id: number; nom: string; equipe_id: number; nom_equipe: string; equipe_id_equipe: number }[] = [];
//   selectedCartonsJoueursEquipeIdsAndNomsAndEquipeIdsAndNomsAndEquipeIdsAndNoms: { id: number; nom: string; equipe_id: number; nom_equipe: string; equipe_id_equipe: number; nom_equipe_equipe: string }[] = [];

//   constructor(private matcheService: MatcheService, private router: Router) {}
//   ngOnInit(): void {
//     this.matcheService.getAllMatches().subscribe((data: any[]) => {
//       this.matches = data;
//     });
//   }
//   viewMatche(id: number) {
//     this.router.navigate(['/matches', id]);
//   }

//   editMatche(id: number) {
//     this.router.navigate(['/matches/edit', id]);
//   }

//   // deleteMatche(id: number) {
//   //   this.matcheService.deleteMatche(id).subscribe(() => {
//   //     this.matches = this.matches.filter(m => m.id !== id);
//   //   });
//   // }


//   currentPage: number = 1;
//   itemsPerPage: number = 9;

//   get totalPages(): number {
//     return Math.ceil(this.matches.length / this.itemsPerPage);
//   }

//   get paginatedMatches(): any[] {
//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     const endIndex = startIndex + this.itemsPerPage;
//     return this.matches.slice(startIndex, endIndex);
//   }

//   goToPage(page: number): void {
//     this.currentPage = page;
//     this.currentPage = page;
//     this.currentPage = page;


//     }


//   nextPage(): void {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }
//   previousPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

// }
