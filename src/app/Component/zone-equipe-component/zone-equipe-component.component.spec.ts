import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneEquipeComponentComponent } from './zone-equipe-component.component';

describe('ZoneEquipeComponentComponent', () => {
  let component: ZoneEquipeComponentComponent;
  let fixture: ComponentFixture<ZoneEquipeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneEquipeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneEquipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
