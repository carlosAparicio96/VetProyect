import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaMedicoComponent } from './edita-medico.component';

describe('EditaMedicoComponent', () => {
  let component: EditaMedicoComponent;
  let fixture: ComponentFixture<EditaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
