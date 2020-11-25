import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesListaComponent } from './ses-lista.component';

describe('SesListaComponent', () => {
  let component: SesListaComponent;
  let fixture: ComponentFixture<SesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
