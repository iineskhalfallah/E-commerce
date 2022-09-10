import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseItemComponent } from './phonecase-item.component';

describe('PhonecaseItemComponent', () => {
  let component: PhonecaseItemComponent;
  let fixture: ComponentFixture<PhonecaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonecaseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonecaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
