import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APICOMPComponent } from './apicomp.component';

describe('APICOMPComponent', () => {
  let component: APICOMPComponent;
  let fixture: ComponentFixture<APICOMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APICOMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APICOMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
