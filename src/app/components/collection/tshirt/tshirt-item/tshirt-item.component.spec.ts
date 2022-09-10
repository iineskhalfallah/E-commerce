import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtItemComponent } from './tshirt-item.component';

describe('TshirtItemComponent', () => {
  let component: TshirtItemComponent;
  let fixture: ComponentFixture<TshirtItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshirtItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
