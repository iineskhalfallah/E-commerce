import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanItemComponent } from './jean-item.component';

describe('JeanItemComponent', () => {
  let component: JeanItemComponent;
  let fixture: ComponentFixture<JeanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeanItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
