import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtransComponent } from './newtrans.component';

describe('NewtransComponent', () => {
  let component: NewtransComponent;
  let fixture: ComponentFixture<NewtransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
