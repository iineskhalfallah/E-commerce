import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotebagComponent } from './totebag.component';

describe('TotebagComponent', () => {
  let component: TotebagComponent;
  let fixture: ComponentFixture<TotebagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotebagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotebagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
