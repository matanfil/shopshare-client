import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtTimeLoginComponent } from './firt-time-login.component';

describe('FirtTimeLoginComponent', () => {
  let component: FirtTimeLoginComponent;
  let fixture: ComponentFixture<FirtTimeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirtTimeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtTimeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
