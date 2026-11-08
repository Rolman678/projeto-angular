import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizaProduto } from './atualiza-produto';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AtualizaProduto', () => {
  let component: AtualizaProduto;
  let fixture: ComponentFixture<AtualizaProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizaProduto],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizaProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
