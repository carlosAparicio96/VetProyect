import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesCrearComponent } from './ses-crear.component';

describe('SesCrearComponent', () => {
  let component: SesCrearComponent;
  let fixture: ComponentFixture<SesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
