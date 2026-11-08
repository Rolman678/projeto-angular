import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { GuardGuard } from './guard-guard';

describe('guardGuard', () => {
  let executeGuard: GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardGuard, { provide: Router, useValue: { navigate: vi.fn() } }],
    });

    executeGuard = TestBed.inject(GuardGuard);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
