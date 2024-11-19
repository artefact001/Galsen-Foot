import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from '../../../Services/competition.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competition-details',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
  competition: any;

  constructor(
    private competitionService: CompetitionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.competitionService.getCompetitionById(id).subscribe((data: any) => {
      this.competition = data;
    });
  }

  backToList() {
    this.router.navigate(['/competitions']);
  }
}
