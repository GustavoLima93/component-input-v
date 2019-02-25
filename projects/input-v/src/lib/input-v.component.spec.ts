import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputVComponent } from './input-v.component';

describe('InputVComponent', () => {
  let component: InputVComponent;
  let fixture: ComponentFixture<InputVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
