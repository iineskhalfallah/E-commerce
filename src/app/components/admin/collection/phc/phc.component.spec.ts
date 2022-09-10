import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcComponent } from './phc.component';

describe('PhcComponent', () => {
  let component: PhcComponent;
  let fixture: ComponentFixture<PhcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
