import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBrandComponent } from './filters-brand.component';

describe('FiltersBrandComponent', () => {
  let component: FiltersBrandComponent;
  let fixture: ComponentFixture<FiltersBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
