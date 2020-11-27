import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarConsultaComponent } from './realizar-consulta.component';

describe('RealizarConsultaComponent', () => {
  let component: RealizarConsultaComponent;
  let fixture: ComponentFixture<RealizarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
