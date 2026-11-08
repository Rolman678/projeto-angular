import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuRestrito } from './menu-restrito';
import { provideRouter } from '@angular/router';

describe('MenuRestrito', () => {
  let component: MenuRestrito;
  let fixture: ComponentFixture<MenuRestrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuRestrito],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuRestrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
