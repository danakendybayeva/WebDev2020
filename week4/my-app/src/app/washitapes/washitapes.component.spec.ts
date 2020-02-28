import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashitapesComponent } from './washitapes.component';

describe('WashitapesComponent', () => {
  let component: WashitapesComponent;
  let fixture: ComponentFixture<WashitapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashitapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashitapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
