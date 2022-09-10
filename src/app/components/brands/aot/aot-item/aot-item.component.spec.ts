import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotItemComponent } from './aot-item.component';

describe('AotItemComponent', () => {
  let component: AotItemComponent;
  let fixture: ComponentFixture<AotItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
