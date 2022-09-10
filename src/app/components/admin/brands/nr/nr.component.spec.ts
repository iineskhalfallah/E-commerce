import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NrComponent } from './nr.component';

describe('NrComponent', () => {
  let component: NrComponent;
  let fixture: ComponentFixture<NrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
