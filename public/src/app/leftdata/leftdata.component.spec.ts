import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftdataComponent } from './leftdata.component';

describe('LeftdataComponent', () => {
  let component: LeftdataComponent;
  let fixture: ComponentFixture<LeftdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
