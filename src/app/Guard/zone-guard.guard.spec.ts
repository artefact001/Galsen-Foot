import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { ZoneGuard } from './zone-guard.guard';

describe('zoneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => ZoneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
