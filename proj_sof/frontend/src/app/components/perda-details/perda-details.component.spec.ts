import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdaDetailsComponent } from './perda-details.component';

describe('PerdaDetailsComponent', () => {
  let component: PerdaDetailsComponent;
  let fixture: ComponentFixture<PerdaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
