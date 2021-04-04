import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerdaComponent } from './add-perda.component';

describe('AddPerdaComponent', () => {
  let component: AddPerdaComponent;
  let fixture: ComponentFixture<AddPerdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPerdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
