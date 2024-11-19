import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { ArticleService } from '../../../Services/article.service';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],  // Add RouterModule here
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  article: any;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticle(+id).subscribe(data => {
        this.article = data;
      });
    }
  }
}
