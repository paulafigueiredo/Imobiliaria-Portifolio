import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoPoaComponent } from './unico-poa.component';

describe('UnicoPoaComponent', () => {
  let component: UnicoPoaComponent;
  let fixture: ComponentFixture<UnicoPoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicoPoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicoPoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
