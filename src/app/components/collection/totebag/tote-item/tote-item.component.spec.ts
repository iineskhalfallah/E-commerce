import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToteItemComponent } from './tote-item.component';

describe('ToteItemComponent', () => {
  let component: ToteItemComponent;
  let fixture: ComponentFixture<ToteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
