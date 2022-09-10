import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntrovableComponent } from './untrovable.component';

describe('UntrovableComponent', () => {
  let component: UntrovableComponent;
  let fixture: ComponentFixture<UntrovableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UntrovableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UntrovableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
