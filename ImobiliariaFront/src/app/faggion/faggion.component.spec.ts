import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaggionComponent } from './faggion.component';

describe('FaggionComponent', () => {
  let component: FaggionComponent;
  let fixture: ComponentFixture<FaggionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaggionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaggionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
