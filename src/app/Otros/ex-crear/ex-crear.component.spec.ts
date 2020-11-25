import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCrearComponent } from './ex-crear.component';

describe('ExCrearComponent', () => {
  let component: ExCrearComponent;
  let fixture: ComponentFixture<ExCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
