import { Component, OnInit } from '@angular/core';
import { Matche } from '../../Component/interfaces/matche.interface';
import { MatcheService } from '../../Services/matche.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Competition, Equipe } from '../../Component/Models/Tout.Model';


@Component({
  selector: 'app-matches-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './matches-list.component.html',
  styleUrl: './matches-list.component.css'
})
export class MatchesListComponent implements OnInit {

  matches: Matche[] = [];
  competitions: Competition [] =[];
  equipes: Equipe [] = [];

  constructor(private matchService: MatcheService) { }

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.matchService.getAllMatches().subscribe(matches => {
      this.matches = matches;
    });
  }
  


  deleteMatch(id: number): void {
    this.matchService.deleteMatch(id).subscribe(() => {
      this.matches = this.matches.filter(m => m.id !== id);
    });
  }
}

