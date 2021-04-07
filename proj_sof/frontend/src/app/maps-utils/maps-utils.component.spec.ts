import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsUtilsComponent } from './maps-utils.component';

describe('MapsUtilsComponent', () => {
  let component: MapsUtilsComponent;
  let fixture: ComponentFixture<MapsUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
