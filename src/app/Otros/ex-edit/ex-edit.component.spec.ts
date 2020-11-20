import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExEditComponent } from './ex-edit.component';

describe('ExEditComponent', () => {
  let component: ExEditComponent;
  let fixture: ComponentFixture<ExEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
