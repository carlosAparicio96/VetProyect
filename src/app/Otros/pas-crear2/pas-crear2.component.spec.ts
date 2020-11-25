import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasCrear2Component } from './pas-crear2.component';

describe('PasCrear2Component', () => {
  let component: PasCrear2Component;
  let fixture: ComponentFixture<PasCrear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasCrear2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasCrear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
