import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenEncontradoComponent } from './examen-encontrado.component';

describe('ExamenEncontradoComponent', () => {
  let component: ExamenEncontradoComponent;
  let fixture: ComponentFixture<ExamenEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
