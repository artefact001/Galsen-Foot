import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEquipeComponent } from './liste-equipe.component';

describe('ListeEquipeComponent', () => {
  let component: ListeEquipeComponent;
  let fixture: ComponentFixture<ListeEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
