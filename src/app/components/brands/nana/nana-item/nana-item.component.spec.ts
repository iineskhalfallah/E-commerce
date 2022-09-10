import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanaItemComponent } from './nana-item.component';

describe('NanaItemComponent', () => {
  let component: NanaItemComponent;
  let fixture: ComponentFixture<NanaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
