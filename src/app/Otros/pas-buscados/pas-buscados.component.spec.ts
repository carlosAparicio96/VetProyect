import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasBuscadosComponent } from './pas-buscados.component';

describe('PasBuscadosComponent', () => {
  let component: PasBuscadosComponent;
  let fixture: ComponentFixture<PasBuscadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasBuscadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasBuscadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
