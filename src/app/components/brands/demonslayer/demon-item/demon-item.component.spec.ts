import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonItemComponent } from './demon-item.component';

describe('DemonItemComponent', () => {
  let component: DemonItemComponent;
  let fixture: ComponentFixture<DemonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
