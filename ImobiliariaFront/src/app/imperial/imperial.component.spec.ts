import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperialComponent } from './imperial.component';

describe('ImperialComponent', () => {
  let component: ImperialComponent;
  let fixture: ComponentFixture<ImperialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
