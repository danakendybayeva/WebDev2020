import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashitapeDetailComponent } from './washitape-detail.component';

describe('WashitapeDetailComponent', () => {
  let component: WashitapeDetailComponent;
  let fixture: ComponentFixture<WashitapeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashitapeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashitapeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
