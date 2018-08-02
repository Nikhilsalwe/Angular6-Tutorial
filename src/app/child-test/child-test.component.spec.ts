import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestComponent } from './child-test.component';

describe('ChildTestComponent', () => {
  let component: ChildTestComponent;
  let fixture: ComponentFixture<ChildTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
