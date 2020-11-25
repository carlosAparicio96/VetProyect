import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasCrearComponent } from './pas-crear.component';

describe('PasCrearComponent', () => {
  let component: PasCrearComponent;
  let fixture: ComponentFixture<PasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
