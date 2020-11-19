import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaVinciComponent } from './da-vinci.component';

describe('DaVinciComponent', () => {
  let component: DaVinciComponent;
  let fixture: ComponentFixture<DaVinciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaVinciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaVinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
