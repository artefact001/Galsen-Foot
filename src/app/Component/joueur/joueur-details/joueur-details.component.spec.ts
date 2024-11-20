import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurDetailsComponent } from './joueur-details.component';

describe('JoueurDetailsComponent', () => {
  let component: JoueurDetailsComponent;
  let fixture: ComponentFixture<JoueurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoueurDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoueurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
