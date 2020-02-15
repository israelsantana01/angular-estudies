import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgForComponent } from './ng-if-ng-for.component';

describe('NgIfNgForComponent', () => {
  let component: NgIfNgForComponent;
  let fixture: ComponentFixture<NgIfNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
