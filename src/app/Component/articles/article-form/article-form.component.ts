import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../Services/article.service';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],

})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.articleForm = this.fb.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      file: [null]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.articleService.getArticle(+id).subscribe(data => {
        this.articleForm.patchValue(data);
      });
    }
  }

  if (id: string | number) {
    this.isEditing = true;
    this.articleService.getArticle(+id).subscribe(data => {
      if (data) {
        this.articleForm.patchValue(data);
      } else {
        // Handle the case when the article is not found
        console.error('Article not found');
      }
    });
  }
  onSubmit(): void {
    if (this.isEditing) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.articleService.updateArticle(+id, this.articleForm.value).subscribe(() => {
          this.router.navigate(['/articles']);
        });
      } else {
        console.error('Invalid article ID');
      }
    } else {
      this.articleService.createArticle(this.articleForm.value).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    }
  }

}
