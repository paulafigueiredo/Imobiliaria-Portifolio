import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmenereComponent } from './carmenere.component';

describe('CarmenereComponent', () => {
  let component: CarmenereComponent;
  let fixture: ComponentFixture<CarmenereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmenereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
