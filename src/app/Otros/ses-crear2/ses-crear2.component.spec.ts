import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesCrear2Component } from './ses-crear2.component';

describe('SesCrear2Component', () => {
  let component: SesCrear2Component;
  let fixture: ComponentFixture<SesCrear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesCrear2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesCrear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
