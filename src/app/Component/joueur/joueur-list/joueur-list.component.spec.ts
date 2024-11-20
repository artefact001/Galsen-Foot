import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurListComponent } from './joueur-list.component';

describe('JoueurListComponent', () => {
  let component: JoueurListComponent;
  let fixture: ComponentFixture<JoueurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoueurListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoueurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
