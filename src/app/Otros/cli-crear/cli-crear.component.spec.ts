import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliCrearComponent } from './cli-crear.component';

describe('CliCrearComponent', () => {
  let component: CliCrearComponent;
  let fixture: ComponentFixture<CliCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
