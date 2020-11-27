import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConListaComponent } from './con-lista.component';

describe('ConListaComponent', () => {
  let component: ConListaComponent;
  let fixture: ComponentFixture<ConListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
