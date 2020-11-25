import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasListaComponent } from './pas-lista.component';

describe('PasListaComponent', () => {
  let component: PasListaComponent;
  let fixture: ComponentFixture<PasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
