import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilaSuzanoComponent } from './vila-suzano.component';

describe('VilaSuzanoComponent', () => {
  let component: VilaSuzanoComponent;
  let fixture: ComponentFixture<VilaSuzanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilaSuzanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilaSuzanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
