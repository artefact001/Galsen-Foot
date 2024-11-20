import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesUpdateComponent } from './matches-update.component';

describe('MatchesUpdateComponent', () => {
  let component: MatchesUpdateComponent;
  let fixture: ComponentFixture<MatchesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
