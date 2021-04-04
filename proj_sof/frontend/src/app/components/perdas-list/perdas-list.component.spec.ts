import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdasListComponent } from './perdas-list.component';

describe('PerdasListComponent', () => {
  let component: PerdasListComponent;
  let fixture: ComponentFixture<PerdasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
