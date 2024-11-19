import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from '../../../Services/competition.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competition-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './competition-form.component.html',
  styleUrl: './competition-form.component.css'
})
export class CompetitionFormComponent implements OnInit {
  competitionForm: FormGroup;
  isEdit: boolean = false;
  competitionId?: number;

  constructor(
    private fb: FormBuilder,
    private competitionService: CompetitionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.competitionForm = this.fb.group({
      nom: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      lieux: ['', Validators.required]

    });
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.competitionId = params['id'];
  //     this.isEdit = !!this.competitionId;
  //     if (this.isEdit) {
  //       this.competitionService.getCompetitionById(this.competitionId)
  //         // .subscribe((data: { [key: string]: any; }) => {
  //         .subscribe((data: any) => {
  //           console.log(data);
  //         })
  //           this.competitionForm.patchValue(data);
  //         // this.competitionService.getCompetitionById(this.competitionId).subscribe((_data: any) => {
  //           // this.competitionForm.patchValue(data);
  //         });
  //         // });
  //     }
  //   });
  // }


  ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.competitionId = +params['id']; // Assurez-vous que 'id' est converti en nombre
    this.isEdit = !!this.competitionId;

    if (this.isEdit) {
      this.competitionService.getCompetitionById(this.competitionId).subscribe((data: any) => {
        console.log(data);
        this.competitionForm.patchValue(data); // Remplir le formulaire avec les données récupérées
      });
    }
  });
}



  onSubmit(): void {
    if (this.competitionForm.valid) {
      if (this.isEdit) {
        this.competitionService.updateCompetition(this.competitionId!, this.competitionForm.value).subscribe(() => {
          this.router.navigate(['/competitions']);
        });
      } else {
        this.competitionService.createCompetition(this.competitionForm.value).subscribe(() => {
          this.router.navigate(['/competitions']);
        });
      }
    }
  }
}

