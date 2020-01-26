import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightdataComponent } from './rightdata.component';

describe('RightdataComponent', () => {
  let component: RightdataComponent;
  let fixture: ComponentFixture<RightdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
