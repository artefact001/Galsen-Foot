import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheFormComponent } from './matche-form.component';

describe('MatcheFormComponent', () => {
  let component: MatcheFormComponent;
  let fixture: ComponentFixture<MatcheFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcheFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatcheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
