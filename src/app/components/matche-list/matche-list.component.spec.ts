import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheListComponent } from './matche-list.component';

describe('MatcheListComponent', () => {
  let component: MatcheListComponent;
  let fixture: ComponentFixture<MatcheListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcheListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatcheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
