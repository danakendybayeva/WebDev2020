import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenDetailComponent } from './pen-detail.component';

describe('PenDetailComponent', () => {
  let component: PenDetailComponent;
  let fixture: ComponentFixture<PenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
