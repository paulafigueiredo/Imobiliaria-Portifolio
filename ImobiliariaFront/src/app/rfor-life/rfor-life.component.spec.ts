import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RForLifeComponent } from './rfor-life.component';

describe('RForLifeComponent', () => {
  let component: RForLifeComponent;
  let fixture: ComponentFixture<RForLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RForLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RForLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
