import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassowrdChangeComponent } from './passowrd-change.component';

describe('PassowrdChangeComponent', () => {
  let component: PassowrdChangeComponent;
  let fixture: ComponentFixture<PassowrdChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassowrdChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassowrdChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
