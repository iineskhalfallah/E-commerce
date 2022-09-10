import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarutoItemComponent } from './naruto-item.component';

describe('NarutoItemComponent', () => {
  let component: NarutoItemComponent;
  let fixture: ComponentFixture<NarutoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarutoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarutoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
